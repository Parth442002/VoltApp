import { SafeAreaView, StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Vector from "../../Assets/Vectors/savedChargers.svg"
import globals from '../../styles/constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
FontAwesome.loadFont()

const SavedScreen = () => {
  return (
   <SafeAreaView style={styles.container}>
    <View style={styles.topBar}>
      <Text style={styles.heading}>Saved Chargers</Text>
    </View>
    <Vector
      height={windowWidth/1.5}
      width={windowWidth/1.5}
    />
    <Text style={styles.main}>You haven't saved any chargers</Text>
    <View style={styles.info}>
      <Text style={styles.one}>Click On  </Text>
      <FontAwesome  style={styles.two} name="bookmark-o" size={20} color={globals.textColor}/>
      <Text style={styles.three}>  to save and prebook </Text>
    </View>
    <Text style={styles.four}>your favourite chargers</Text>
   </SafeAreaView>
  )
}

export default SavedScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:globals.backgroundColor,
  },
  topBar:{
    position:"absolute",
    textAlign:"center",
    top:50,
  },
  heading:{
    fontSize:25,
    color:globals.textColor,
    fontWeight:"500",
  },
  main:{
    fontSize:25,
    color:globals.textColor,
    marginVertical:10,
    fontWeight:"700"
  },
  info:{
    flexDirection:"row",
    justifyContent:"center",
    width:"80%",
    alignItems:"stretch",
  },
  one:{
    color:globals.textColor,
    fontSize:20,
  },
  two:{
    backgroundColor:globals.primaryColor,
    padding:4,
    borderRadius:500,
  },
  three:{
    color:globals.textColor,
    fontSize:20,
  },
  four:{
    color:globals.textColor,
    fontSize:20,
  }
})