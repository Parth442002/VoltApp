import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globals from '../../styles/constants'

const ProfileCarIcon = () => {
  return (
    <View style={styles.carContainer}>
      <Image
        source={require("../../Assets/Images/zsEv.png")}
        style={styles.image}
        resizeMode="contain"
        resizeMethod="scale"
      />
      <Text style={styles.carName}>ZS Ev</Text>
    </View>
  )
}

export default ProfileCarIcon

const styles = StyleSheet.create({
  carContainer:{
    alignItems:"center",
    justifyContent:"center",
    height:100,
  },
  image:{
    height:75,
    width:75,
    padding:0,
    borderRadius:50,
    backgroundColor:"white"
  },
  carName:{
    marginTop:5,
    color:globals.textColor,
    fontWeight:"500",
    fontSize:15,
    textAlign:"center",
  }
})