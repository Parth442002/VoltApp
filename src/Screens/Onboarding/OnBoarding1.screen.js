import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"

import Vector from "../../Assets/Vectors/onboarding1.svg"
import Globals from "../../styles/constants"

//Super Important for its working
AntDesign.loadFont()
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function OnBoarding1Screen({navigation}) {
  return (
    <View style={styles.container}>
      <Vector
        height={windowHeight/3}
        style={styles.vector}
      />
      <TouchableOpacity
        style={styles.skipButton}
        onPress={()=>navigation.navigate("AuthStack")}
      >
        <Text
          style={styles.skipText}
        >Skip</Text>
        <AntDesign name="right" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}>OnBoarding Screen 1</Text>
      <Text
        style={styles.subheading}>
          This is the SubHeading Text explaining what is happening
          This is the SubHeading Text explaining what is happening
      </Text>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={()=>navigation.navigate("OnBoarding2Screen")}
      >
        <AntDesign name='rightcircle' size={70} color={Globals.textColor}/>
      </TouchableOpacity>
    </View>
  )
}
export default OnBoarding1Screen
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:Globals.backgroundColor
  },
  vector:{
    position:"relative",
    marginVertical:0,
    marginTop:-50,
  },
  skipButton:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"lightblue",
    paddingHorizontal:15,
    paddingVertical:5,
    borderRadius:50,
    position:"absolute",
    top:60,
    right:20,
  },
  skipText:{
    fontSize:20,
  },
  heading:{
    fontSize:35,
    fontWeight:"700",
    padding:10,
    marginBottom:10,
    color:Globals.textColor,
  },
  subheading:{
    fontSize:20,
    fontWeight:"400",
    textAlign:"center",
    maxWidth:windowWidth-30,
    color:Globals.textColor,
  },
  nextButton:{
    bottom:-100,
    color:Globals.textColor,
  }

})