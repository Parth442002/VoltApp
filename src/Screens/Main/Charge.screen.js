import React,{useEffect, useState,useRef,useMemo,useCallback} from "react";
import { StyleSheet, Text, View,Dimensions,TextInput, TouchableOpacity, SafeAreaView} from "react-native";
import MapView from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import AntDesign from "react-native-vector-icons/AntDesign"

import globals from "../../styles/constants";
import ChargeCarousel from "../../Components/ChargeComponents/ChargeCarousel";
const windowWidth = Dimensions.get('window').width;
AntDesign.loadFont()
export default function ChargeScreen() {
  const [latitude,setLatitude]=useState()
  const [longitude,setLongitude]=useState()
  const [search,setSearch]=useState()
  const [settingsVisible,setSettingsVisible]=useState(false)

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude)
      setLongitude(info.coords.longitude)
      console.log(info.coords)
    });
  }, [])

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['50%', '100%'], []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputContainer.inputField}
            onChangeText={search}
            value={setSearch}
            placeholder="Find Places you Love"
            placeholderTextColor={"gray"}
          />
          <TouchableOpacity>
            <AntDesign
              name="search1"
              color={globals.primaryColor}
              size={30}
              style={styles.inputContainer.postfix}
            />
          </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.toggle}
            onPressOut={()=>{
              setSettingsVisible(!settingsVisible)}
            }
          >
            <AntDesign name="appstore-o" size={30} color={"white"}/>
          </TouchableOpacity>
      </View>
      {settingsVisible?(
        <View style={styles.settingsBar}>
          <Text style={{fontSize:40,}}>This is working</Text>
        </View>
      ):null}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 12.820282888591311,
          longitude: 80.03775784580994,
          latitudeDelta: .1,
          longitudeDelta: .1,
        }}
        onRegionChangeComplete={(region) => {
          setLatitude(region.latitude)
          setLongitude(region.longitude)
        }}
        showsUserLocation={true}
      />
      <View style={styles.chargeContainer}>
        <ChargeCarousel/>
      </View>
    </SafeAreaView>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  topBar:{
    width:windowWidth,
    position:"absolute",
    top:50,
    alignItems:"center",
    justifyContent:"space-evenly",
    zIndex:10,
    flexDirection:"row",
  },
  settingsBar:{
    width:windowWidth,
    position:"absolute",
    top:150,
    alignItems:"center",
    justifyContent:"space-evenly",
    zIndex:10,
    flexDirection:"row",
  },
  inputContainer:{
    paddingVertical:3,
    width:windowWidth/1.5,
    flexDirection: 'row',
    backgroundColor:"white",
    borderRadius:10,
    prefix:{
      paddingHorizontal: 10,
    },
    inputField:{
      flex: 1,
      fontSize:15,
      paddingHorizontal:10,
      marginLeft:5,
      backgroundColor:"white",
      borderRadius:10,
      color: '#424242',
    },
    postfix:{
      padding:10,
    },
  },
  toggle:{
    padding:10,
    borderRadius:10,
    backgroundColor:globals.primaryColor,
  },
  chargeContainer:{
    width:windowWidth,
    position:"absolute",
    bottom:120,
  }
});