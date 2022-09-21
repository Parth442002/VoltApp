import { SafeAreaView, StatusBar, StyleSheet, Text, View,TouchableOpacity,Dimensions,Image,TextInput } from 'react-native'
import React, { useState,useRef,useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AntDesign from "react-native-vector-icons/AntDesign"
import globals from '../../styles/constants';

const windowWidth = Dimensions.get('window').width;

const CarSetupScreen = ({navigation}) => {
  useEffect(() => {
    AntDesign.loadFont()
  }, [])

  const [stateCode,setStateCode]=useState()
  const [cityNumber,setCityNumber]=useState()
  const [uniqueCode,setUnique]=useState()
  const [numberCode,setNumberCode]=useState()
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const box4 = useRef();

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.topBar}>
          <Text style={styles.welcome}>Welcome Parth !</Text>
          <TouchableOpacity style={styles.carToggle}>
            <Text></Text>
          </TouchableOpacity>
      </View>
      <View style={styles.carSection}>
          <Image
            source={require("../../Assets/Images/MainImageFront.png")}
            style={{
              height:windowWidth*1.5,
              width:windowWidth*1.5,
              resizeMode:"cover",
              marginTop:-200,
              //position:"absolute",
              alignSelf:"center",
              //top:-200,
            }}
          />
      </View>
      <View style={styles.mainBody}>
        <Text style={styles.heading}>Add Your Car </Text>
        <Text style={styles.suplementaryText}>Supplementary Text</Text>

        <View style={styles.carNumberContainer}>
          <Text
            style={styles.ind}
          >IND</Text>
          <TextInput
              value={stateCode}
              style={[styles.singleInput,{
                borderTopStartRadius:20,
                borderBottomLeftRadius:20,
              }]}
              placeholder="UP"
              maxLength={2}
              autoFocus={true}
              ref={box1}
              onChangeText={text => {
                setStateCode(text);
                text && box2.current.focus();
              }}
          />
          <TextInput
            value={cityNumber}
            style={styles.singleInput}
            placeholder="32"
            maxLength={2}
            ref={box2}
            onChangeText={text => {
                setCityNumber(text);
                text ? box3.current.focus() : box1.current.focus();
              }}

          />
          <TextInput
             value={uniqueCode}
             style={styles.singleInput}
             placeholder="MB"
             maxLength={2}
             ref={box3}
             onChangeText={text => {
                 setUnique(text);
                 text ? box4.current.focus() : box3.current.focus();
               }}

          />
          <TextInput
             value={numberCode}
             style={[styles.singleInput,{
              borderTopEndRadius:20,
              borderBottomRightRadius:20,
             }]}
             placeholder="2548"
             maxLength={4}
             ref={box4}
             onChangeText={text=>{
              setNumberCode(text);
              !text && box3.current.focus();
            }}
          />
        </View>
      </View>
      <View style={styles.toggles}>
        <TouchableOpacity
          style={styles.continueButton}
          onPressOut={()=>navigation.navigate("CarLoadingScreen")}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
          <AntDesign name="right" size={20} color="white" style={{fontWeight:"700"}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.setUpManually}>
          <Text style={styles.setUpManuallyText}>SetUp Manually</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default CarSetupScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    top:50,
  },
  topBar:{
    marginTop:5,
    flexDirection:"row",
    width:windowWidth*.9,
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:20,
  },
  welcome:{
    fontSize:30,
    color:globals.textColor,
    fontWeight:"600"
  },
  carSection:{
    marginTop:20,
    alignSelf:"center",
    width:windowWidth,
    position:"relative",
  },
  TextContainer:{
    marginTop:-200,
    textAlign:"center",
    alignItems:"center",
  },
  mainBody:{
    marginTop:-180,
    alignSelf:"center",
    alignItems:"center",
  },
  heading:{
    fontSize:35,
    fontWeight:"600",
  },
  suplementaryText:{
    fontSize:20,
    marginTop:10,
    paddingHorizontal:20
  },
  carNumberContainer:{
    backgroundColor:"red",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    backgroundColor:globals.inputBackgroundColor,
    borderRadius:10,
    borderColor:globals.borderColor,
    borderWidth:2,
    marginTop:50,
  },
  ind:{
    padding:10,
    alignSelf:"center",
    textAlign:"center",
    marginLeft:5,
    fontSize:20,
    fontWeight:"700",
    color:"blue",
    borderColor:globals.borderColor,
    borderRightWidth:3,
  },
  singleInput:{
    backgroundColor:globals.inputBackgroundColor,
    fontSize:30,
    padding:10,
    marginHorizontal:0,
  },
  toggles:{
    marginTop:40,
    flexDirection:"row",
    alignSelf:"center",
    width:windowWidth*.8,
    alignItems:"center",
    justifyContent:"space-between"
  },
  continueButton:{
    backgroundColor:globals.primaryColor,
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:20,
    flexDirection:"row",
    alignItems:"center",
  },
  continueButtonText:{
    fontSize:20,
    fontWeight:"700",
    color:"white",
    marginRight:3,
  },
  setUpManuallyText:{
    fontSize:15,
    color:"#63686e",
    fontWeight:"700",
    textDecorationLine:true,
  }
})
