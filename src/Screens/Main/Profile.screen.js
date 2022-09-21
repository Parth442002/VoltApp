import { StatusBar, StyleSheet, Text, View,TouchableOpacity, Image,Dimensions,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"

import CreditCard from '../../Components/ProfileComponents/ProfileCreditCard'
import ProfileCarIcon from '../../Components/ProfileComponents/ProfileCarIcon'
import ProfileOption from '../../Components/ProfileComponents/ProfileOption'
import Globals from "../../styles/constants"

AntDesign.loadFont()
EvilIcons.loadFont()
MaterialIcons.loadFont()
FontAwesome.loadFont()
Feather.loadFont()
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{flex:1}}
        contentContainerStyle={{alignItems:"center",justifyContent:"center"}}

      >
      <View style={styles.topBar}>
        <Text style={styles.heading}>Profile</Text>
        <TouchableOpacity
          style={styles.drawerIcon}
        >
          <AntDesign name="menufold" color={Globals.textColor} size={30}/>
        </TouchableOpacity>
      </View>
      <View style={styles.profile}>
        <View style={styles.left}>
          <Image
            style={styles.profileImage}
            source={require(`../../Assets/Images/UserImage.png`)}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.profileEdit}>
            <EvilIcons name="pencil" size={25} color={Globals.textColor}/>
          </TouchableOpacity>
        </View>
        <View style={styles.right}>
          <Text style={styles.name}>Parth Katiyar</Text>
          <View style={styles.primaryInfo}>
            <MaterialIcons name="alternate-email" size={15} color={Globals.primaryColor}/>
            <Text style={styles.primaryMail}>parthkatiyar04@gmail.com</Text>
          </View>
          <View style={styles.primaryInfo}>
            <FontAwesome name="tachometer" size={40} color={Globals.primaryColor}/>
            <Text style={styles.kmDriven}>0km Driven</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.CreditCard}
      >
        <CreditCard/>
      </TouchableOpacity>
      <Text style={styles.garageHeading}>My Garage</Text>
      <View style={styles.garageCars}>
        <ProfileCarIcon/>
        <ProfileCarIcon/>
        <TouchableOpacity style={styles.addCar}>
          <AntDesign name="plus" size={40} color={Globals.primaryColor}/>
        </TouchableOpacity>
      </View>
      <View style={styles.optionsMenu}>
        <ProfileOption/>
        <ProfileOption/>
        <ProfileOption/>
      </View>
      <TouchableOpacity
        style={styles.logout}
        onPressOut={()=>console.log("Logout")}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Globals.backgroundColor,
    justifyContent:"center",
    alignItems:"center",
  },
  topBar:{
    elevation:-50,
    zIndex:-500,
    paddingHorizontal:10,
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:20,
  },
  heading:{
    fontSize:30,
    fontWeight:"600",
    color:Globals.textColor,
  },
  drawerIcon:{
    position:"absolute",
    right:20,
  },
  profile:{
    position:"relative",
    flexDirection:"row",
    width:windowWidth-50,
    justifyContent:"space-between",
    alignItems:"center"
  },
  left:{
    position:"relative",
  },
  profileImage:{
    height:windowWidth/3.5,
    width:windowWidth/3.5,
  },
  profileEdit:{
    position:"absolute",
    top:80,
    right:0,
    backgroundColor:Globals.primaryColor,
    paddingVertical:5,
    paddingHorizontal:5,
    borderRadius:500,
  },
  right:{
  },
  name:{
    color:Globals.textColor,
    fontSize:25,
    fontWeight:"500",
  },
  primaryInfo:{
    flexDirection:"row",
    marginTop:7,
    alignItems:"baseline",
  },
  primaryMail:{
    color:Globals.textColor,
    marginLeft:5,
  },
  kmDriven:{
    marginLeft:10,
    fontSize:20,
    color:Globals.textColor,
  },
  CreditCard:{
    marginTop:30,
    padding:0,
  },
  garageHeading:{
    marginTop:20,
    color:Globals.textColor,
    fontSize:30,
    fontWeight:"600",
    width:"100%",
    left:30,
  },
  garageCars:{
    marginTop:15,
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-evenly",
    alignItems:"center",
    overflow:"scroll",
  },
  addCar:{
    bottom:10,
    borderRadius:50,
    padding:15,
    borderWidth:2,
    borderColor:Globals.primaryColor,
    backgroundColor:"white",
  },
  optionsMenu:{
    marginTop:10,
  },
  logout:{
    marginTop:15,
    width:windowWidth-150,
    textAlign:"center",
    paddingVertical:10,
    backgroundColor:Globals.primaryColor,
    borderRadius:10,
  },
  logoutText:{
    color:Globals.textColor,
    fontSize:20,
    fontWeight:"700",
    alignSelf:"center",
    textDecorationLine:true,
  }
})