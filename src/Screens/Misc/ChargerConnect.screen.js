import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React,{useEffect} from 'react'
import LottieView from 'lottie-react-native';

import Globals from '../../styles/constants'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ResponseScreen = ({navigation}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      navigation.navigate("ChargingStartedScreen",{started:true})
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
          source={require("../../Assets/LottieFiles/loading.json")}
          />
      <Text style={styles.message}>wait while we try to connect to the Charger</Text>
    </View>
  )
}

export default ResponseScreen

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