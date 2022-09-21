import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


AntDesign.loadFont()
FontAwesome.loadFont()
MaterialCommunityIcons.loadFont()
const TabBarIcon = ({name,labelName,focused,color}) => {
  return (
    <View style={styles.parent}>
      {name=="bookmark-o"?
      <FontAwesome
        name={name}
        size={30}
        color={focused?`blue`:`gray`}
      />
    :
    <AntDesign
        name={name}
        size={30}
        color={focused?`blue`:`gray`}/>
    }
    </View>
  )
}

{/*
<Text
        style={[styles.label,{color:focused?`blue`:`gray`},]}
        >{labelName}</Text>
*/}

export const CustomTabBarIcon=({focused})=>{
  return(
    <View style={styles.customParent}>
      <MaterialCommunityIcons
        name={"lightning-bolt"}
        size={35}
        color="white"/>
    </View>
  )
}

export const CustomTabBarButton=({children,onPress})=>{
  return(
  <TouchableOpacity
    style={styles.customTab}
    onPress={onPress}
  >
      <View style={styles.customView}>
        {children}
      </View>
  </TouchableOpacity>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
  parent:{
    top:"50%",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  label:{
    marginTop:2,
  },
  customTab:{
    top:-10,
    alignItems:"center",
    justifyContent:"center",
    elevation:20,
    zIndex:100,
  },
  customView:{
    width:60,
    height:60,
    borderRadius:35,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"blue",
  },
})