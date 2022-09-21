import { StyleSheet, Text, View,Dimensions, SafeAreaView, ScrollView, StatusBar, Image, Touchable, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import LottieView from 'lottie-react-native';
import globals from "../../styles/constants"
import Line from "../../Assets/Vectors/line.svg"


const windowWidth = Dimensions.get('window').width;
const HomePrototypeScreen= ({route,navigation}) => {
  const [charging,setCharging]=useState(true)
  useEffect(() => {
    Feather.loadFont()
    FontAwesome.loadFont()
  }, [0])

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView
        style={{flex:1}}
        contentContainerStyle={[{flex:1}]}
      >
        <StatusBar/>
        <View style={[styles.circle,{borderColor:charging==true?"lightgreen":"#f96d6d"}]}/>
        <Image
          source={require("../../Assets/Images/TopView-removebg-preview.png")}
          resizeMode="contain"
          style={styles.topImage}
        />
          <View style={styles.topInfo}>
            <Text style={styles.batteryPercentage}>20</Text>
            <View style={styles.right}>
              <View style={styles.chargingStatus}>
                <Text style={styles.chargingText}>{charging==true?"Charging":"Idle"}</Text>
                <Feather
                  name={charging==true?"battery-charging":"battery"}
                  color={globals.primaryColor}
                  size={30}
                />
              </View>
              <Feather
                name="percent"
                color={"black"}
                size={30}
              />
            </View>
          <Text style={{position:"absolute",top:80,fontSize:15}}>Smart Chage</Text>
          {charging==true?(
            <LottieView
            autoPlay
            style={{
            width:300,
            height:300,
            right:-15,
            position:"absolute",
            }}
            source={require("../../Assets/LottieFiles/chargingIcon.json")}
          />
          ):null}
        </View>

        {charging==true?(
          <View style={styles.chargingStats}>
          <View style={styles.chargingStatsCard}>
            <View style={styles.firstLine}>
              <FontAwesome name="rupee" size={25} color={"black"}/>
              <Text style={{fontSize:20,marginLeft:5,}}>567</Text>
            </View>
            <Text style={{marginTop:5,fontSize:15,}}>Spent so far</Text>
          </View>

          <View style={styles.chargingStatsCard}>
            <View style={styles.firstLine}>
              <Text style={{fontSize:20,marginLeft:5,}}>54 KM</Text>
            </View>
            <Text style={{marginTop:5,fontSize:15,}}>added</Text>
          </View>

          <View style={styles.chargingStatsCard}>
            <View style={styles.firstLine}>
              <Text style={{fontSize:20,marginLeft:5,}}>2h 20m</Text>
            </View>
            <Text style={{marginTop:5,fontSize:15,}}>Charge Time</Text>
          </View>
        </View>
      )
      :null}
        <View style={styles.secondaySection}>
          <Text style={styles.carName}>Tesla Model S</Text>
          <TouchableOpacity
            style={styles.chargingToggle}
            onPress={()=>{{
              setCharging(!charging)
              navigation.navigate("ChargingFlowStack")
            }
            }}
          >
            <Text
              style={{fontSize:20,color:"white"}}
            >{charging?"Stop Charging":"Start Charging"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.toggles}>
          <View style={styles.leftBox}>
              <Text
                style={[styles.rightBoxHeading,{width:"100%"}]}
              >
                Plan A trip</Text>
            <Feather style={{marginTop:20,alignSelf:"center"}} name="map" size={40} color="black"/>
            <Line height={5} style={{marginTop:25,}}/>
          </View>
          <View style={styles.rightToggles}>
            <View style={styles.rightBox}>
              <Text
                style={styles.rightBoxHeading}
              >
                Remaining Battery Range</Text>
              <Text style={{fontSize:25,fontWeight:"700",alignSelf:"center",marginTop:5}}>30</Text>
              <Text style={{marginVertical:5,fontSize:20,fontWeight:"500",alignSelf:"center"}}>Miles</Text>
            </View>

            <View style={[styles.rightBox,{marginTop:10,height:120}]}>
              <Text
                style={styles.rightBoxHeading}
              >
                Account Balance</Text>
              <Text style={{fontSize:25,fontWeight:"700",alignSelf:"center",marginTop:5}}>6000</Text>
              <Text style={{marginVertical:5,fontSize:20,fontWeight:"500",alignSelf:"center"}}>Rupees</Text>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePrototypeScreen

const styles = StyleSheet.create({
  circle:{
    height:windowWidth*1.4,
    width:windowWidth*1.4,
    borderRadius:400,
    backgroundColor:"transparent",
    position:"absolute",
    top:"-50%",
    borderWidth:40,
    borderColor:"lightgreen",
    alignSelf:"center"
  },
  topImage:{
    marginTop:-100,
    height:windowWidth/1.2,
    width:windowWidth/1.2,
    alignSelf:"center",
  },
  topInfo:{
    flexDirection:"row",
    alignSelf:"center",
    width:windowWidth,
    justifyContent:"flex-start",
    alignItems:"center",
    left:40,
    marginTop:5,
  },
  batteryPercentage:{
    fontSize:70,
    fontWeight:"600",
  },
  right:{
    marginLeft:15,
  },
  chargingStatus:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    marginBottom:5,
  },
  chargingText:{
    fontSize:15,
    fontWeight:"600",
    backgroundColor:"lightgray",
    padding:5,
    marginRight:10,
  },
  chargingStats:{
    width:windowWidth,
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:40,
  },
  chargingStatsCard:{
    textAlign:"center",
    alignItems:"center",
  },
  firstLine:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  secondaySection:{
    flexDirection:"row",
    width:windowWidth,
    alignItems:"center",
    justifyContent:"space-evenly",
    marginTop:30,
  },
  carName:{
    fontSize:20,
    fontWeight:"700",
  },
  chargingToggle:{
    backgroundColor:globals.primaryColor,
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:40,
  },
  toggles:{
    width:windowWidth,
    marginTop:30,
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  leftBox:{
    backgroundColor:"lightgreen",
    padding:30,
    borderRadius:20,
  },
  rightBox:{
    backgroundColor:"#f1e9e3",
    borderRadius:20,
  },
  rightBoxHeading:{
    alignSelf:"center",
    justifyContent:"center",
    width:"80%",
    textAlign:"center",
    marginTop:5,
  }
})