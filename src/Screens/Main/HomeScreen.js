import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View,Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import ProfileCarIcon from '../../Components/ProfileComponents/ProfileCarIcon';
import LinearGradient from 'react-native-linear-gradient';
import globals from '../../styles/constants'
import BatteryPercentage from '../../Components/HomeComponents/BatteryPercentage';
import BatteryVector from "../../Assets/Vectors/BatteryIcon.svg"


const windowWidth = Dimensions.get('window').width;
const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:globals.backgroundColor,alignItems:"center",justifyContent:"center"}}>
      <ScrollView
        style={{flex:1}}
        contentContainerStyle={{flex:1,alignItems:"center"}}
      >
      <StatusBar style={styles.backgroundG}/>
        <View style={styles.topBar}>
          <Text style={styles.welcome}>Welcome Parth !</Text>
          <TouchableOpacity style={styles.carToggle}>
            <ProfileCarIcon/>
          </TouchableOpacity>
        </View>
        <View style={styles.carSection}>
          <Image
            source={require("../../Assets/Images/MainImageFront.png")}
            style={{
              height:windowWidth*1.5,
              width:windowWidth*1.5,
              resizeMode:"cover",
              marginTop:-250,
              //position:"absolute",
              alignSelf:"center",
              //top:-200,
            }}
          />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.yourCar}>Your Car</Text>
          <Text style={styles.carName}>Tesla Model X</Text>
        </View>
        <View style={styles.charging}>
          <TouchableOpacity
            style={styles.chargingbutton}
          >
            <Text style={styles.chargingText}>Start Charging</Text>
          </TouchableOpacity>
          <Text style={styles.chargingETA}>{"<"}2 Hours</Text>
        </View>
        <View style={styles.stats}>
          <View style={styles.batteryContainer}>
            <Text style={styles.batteryPercentage}>55%</Text>
            <BatteryVector height={200} width={100} style={{padding:0}}/>
          </View>
          <View style={styles.carStats}>
            <View style={[styles.box1,{backgroundColor:"#f67280"}]}>
              <Text style={[styles.box1heading]}>Range</Text>
              <Text style={styles.box1Km}>~40</Text>
              <Text style={styles.box1Stnd}>KM</Text>
            </View>
            <View style={[styles.box1,{backgroundColor:"#7dd87d"}]}>
              <Text style={[styles.box1heading,]}>Charger</Text>
              <Text style={styles.box1Km}>{"<"}40</Text>
              <Text style={styles.box1Stnd}>KM</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  topBar:{
    //marginTop:5,
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
  yourCar:{
    fontSize:25,
    marginTop:20,
    color:globals.textColor,
    fontWeight:"600",
    fontStyle:"italic",
  },
  carName:{
    fontSize:30,
    color:globals.textColor,
    fontWeight:"800"
  },
  charging:{
    marginTop:20,
    justifyContent:"space-evenly",
    flexDirection:"row",
    alignItems:"center",
    width:windowWidth,
  },
  chargingbutton:{
    paddingVertical:10,
    paddingHorizontal:15,
    borderRadius:15,
    backgroundColor:globals.primaryColor,
  },
  chargingText:{
    fontSize:20,
    color:"white",
    fontWeight:"700"
  },
  chargingETA:{
    fontSize:20,
    fontWeight:"500",
    fontStyle:"italic",
    color:"white",
  },
  stats:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    width:windowWidth*.8,
    marginTop:20,
  },
  batteryContainer:{
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor:"white",
    borderRadius:15,
    position:"relative",
  },
  batteryPercentage:{
    position:'absolute',
    top:60,
    right:35,
    elevation:30,
    zIndex:40,
    fontSize:30,
    fontWeight:"600",
    color:"white",
  },
  box1:{
    backgroundColor:"lightgreen",
    alignItems:"center",
    borderRadius:10,
    marginTop:15,
    paddingHorizontal:30,
    position:"relative",
  },
  box1heading:{
    marginTop:5,
    fontSize:15,
    fontWeight:"400",
    color:"black",
    paddingHorizontal:5,
  },
  box1Km:{
    marginTop:5,
    fontSize:30,
    fontWeight:"900",
  },
  box1Stnd:{
    marginVertical:5,
    fontSize:20,
    fontWeight:"600",
  }
})