import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React,{useEffect} from 'react'
import LottieView from 'lottie-react-native';

import Globals from '../../styles/constants'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ChargingStartedScreen = ({route,navigation}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      navigation.navigate("MainTabs",{screen:"HomeScreen",started:route.params?.started})
    }, 3000);

    return () => clearInterval(interval);
  }, [])
  return (
    <View style={styles.container}>
      <LottieView
          autoPlay
          style={[{
          width:300,
          height:300,
          },styles.vector]}
          source={require("../../Assets/LottieFiles/success.json")}
          />
      <Text style={styles.message}>Charging Started</Text>
    </View>
  )
}

export default ChargingStartedScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:Globals.backgroundColor,
    backfaceVisibility:0,
  },
  vector:{
    bottom:20,
  },
  message:{
    fontSize:30,
    maxWidth:windowWidth-50,
    textAlign:'center',
    color:Globals.textColor,
    fontStyle:"italic",
  }
})