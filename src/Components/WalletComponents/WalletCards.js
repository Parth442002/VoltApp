import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import globals from '../../styles/constants';

Entypo.loadFont()

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const WalletCards = ({style}) => {
  return (
    <TouchableOpacity style={[styles.container,style]}>
        <Entypo style={styles.icon} name="paper-plane" size={30} color={"white"}/>
        <View style={styles.circle}></View>
      <Text>SEND</Text>
    </TouchableOpacity>
  )
}

export default WalletCards

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#f96d6d",
    height:windowWidth/3.88,
    width:windowWidth/3.88,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
    position:"relative",
  },
  icon:{
    marginBottom:10,
    padding:5,
  },
  circle:{
    position:"absolute",
    height:45,
    width:45,
    top:13,
    backgroundColor:globals.primaryColor,
    zIndex:-50,
    borderRadius:50,
  }
})