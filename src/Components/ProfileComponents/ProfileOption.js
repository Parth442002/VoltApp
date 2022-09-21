import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AntDesign from "react-native-vector-icons/AntDesign"
import Globals from "../../styles/constants"

FontAwesome.loadFont()
AntDesign.loadFont()
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ProfileOption = () => {
  return (
    <TouchableOpacity style={styles.option}>
          <View style={styles.grouped}>
            <FontAwesome name="battery" size={30} color={Globals.primaryColor}/>
            <Text style={styles.optionText}>Charging Sessions</Text>
          </View>
          <AntDesign name="right" size={30} color={Globals.primaryColor}/>
        </TouchableOpacity>
  )
}

export default ProfileOption

const styles = StyleSheet.create({
  option:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"white",
    justifyContent:"space-between",
    marginVertical:10,
    paddingVertical:5,
    borderRadius:10,
    width:windowWidth-100
  },
  grouped:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:10,
  },
  optionText:{
    marginLeft:10,
    fontSize:15,
  }
})