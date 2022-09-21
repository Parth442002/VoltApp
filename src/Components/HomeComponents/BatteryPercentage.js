import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native"
import globals from '../../styles/constants'

const BatteryPercentage = () => {
  return (
    <View style={styles.container}>
      <LottieView
            autoPlay
            style={styles.animation}
            source={require("../../Assets/LottieFiles/batteryLoading.json")}
          />
      <Text style={styles.text}>55%</Text>
    </View>
  )
}

export default BatteryPercentage

const styles = StyleSheet.create({
  container:{
    position:"relative",
    marginTop:0,
    padding:0,
    margin:0,
  },
  animation:{
    height:100,
    width:50,
    padding:0,
    margin:0,
    resizeMode:"cover",
    color:"transparent",
    backgroundColor:"transparent",
    transform:[{scaleX:2},{scaleY:1.4}]
  },
  text:{
    position:"absolute",
    color:globals.textColor,
    fontSize:20,
  }
})