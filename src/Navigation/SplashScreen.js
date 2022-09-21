import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import LottieView from 'lottie-react-native';

function SplashScreen({navigation}){
  useEffect(() => {
    const interval = setInterval(() => {
      navigation.navigate("OnBoardingStack")
    }, 3000);

    return () => clearInterval(interval);
  }, [])
  return (
    <View style={styles.container}>
      <LottieView
            autoPlay
            style={{
            width:200,
            height:200,
            }}
            source={require("../Assets/LottieFiles/SplashScreen.json")}
          />
      <Text style={styles.text}>Volt</Text>
      <Text style={styles.bottomText}>@Volt2022 Inc.</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white",
  },
  text:{
    position:"absolute",
    bottom:200,
    elevation:50,
    fontSize:40,
    fontStyle:"italic",
    fontWeight:"600",
    shadowRadius:50,
    shadowOpacity:1,
    color:"black"
  },
  bottomText:{
    position:"absolute",
    bottom:15,
    elevation:50,
    color:"gray",
    fontSize:15,
  }
})