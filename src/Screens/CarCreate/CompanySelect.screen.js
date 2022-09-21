import { StatusBar, StyleSheet, Text, View ,Dimensions, TouchableOpacity, TextInput} from 'react-native'
import React,{useState,useEffect} from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import ImageCarousel from "../../Components/CompanyCarousel"
import Globals from '../../styles/constants'



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const data=[
  {
    image:require("../../Assets/Images/Companies/HyundaiLogo.jpeg"),
    title:"Audi",
    id:1,
  },
  {
    uri:require("../../Assets/Images/Companies/HyundaiLogo.jpeg"),
    title:"Bmw",
    id:2,
  },
  {
    uri:require("../../Assets/Images/Companies/HyundaiLogo.jpeg"),
    title:"Porsche",
    id:3,
  },
  {},

]
const CompanySelect = ({navigation}) => {
  const [carPlate,setCarPlate]=useState()
  useEffect(() => {
    AntDesign.loadFont()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar/>
      <Text style={styles.heading}>Select Brand</Text>
      <ImageCarousel data={data} style={styles.companyCarousel} />

      <Text style={styles.headingText}>Enter License Plate</Text>
      <View style={styles.inputContainer}>
          <AntDesign
            name="car"
            color={Globals.primaryColor}
            size={30}
            style={styles.inputContainer.prefix}
          />
          <TextInput
            style={styles.inputContainer.inputField}
            onChangeText={carPlate}
            value={setCarPlate}
            secureTextEntry={false}
            placeholder="UP32MB2588"
            keyboardType="default"
            placeholderTextColor={"gray"}
          />
          <TouchableOpacity
          style={styles.inputContainer.postfix}
          onPressOut={()=>console.log("Render")}
          >
            <AntDesign
              name={"right"}
              color={Globals.textColor}
              size={30}
            />
          </TouchableOpacity>
        </View>
      <TouchableOpacity
        style={styles.button}
        onPressOut={()=>navigation.navigate("CarSelectScreen")}
      >
        <View style={styles.button.buttonContent}>
          <Text style={styles.button.buttonText}>Continue</Text>
          <AntDesign name="arrowright" color={Globals.textColor} size={30}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CompanySelect

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Globals.backgroundColor,
  },
  heading:{
    fontSize:30,
    marginTop:80,
    fontWeight:"700",
    alignSelf:"center",
    color:Globals.textColor,
  },
  companyCarousel:{
    backgroundColor:"transparent",
    marginTop:50,
    height:windowWidth,
  },
  headingText:{
    textAlign:"center",
    marginTop:20,
    fontSize:20,
    fontWeight:"500",
  },
  inputContainer:{
    paddingVertical:3,
    width:windowWidth-100,
    marginTop:25,
    flexDirection: 'row',
    backgroundColor:"white",
    alignSelf:"center",
    position:"relative",
    borderRadius:10,
    prefix:{
      padding: 10,
    },
    inputField:{
      flex: 1,
      marginLeft:10,
      fontSize:20,
      backgroundColor:"white",
      borderRadius:10,
      color: '#424242',
    },
    postfix:{
      padding:12,
      justifyContent:"center",
      backgroundColor:Globals.primaryColor,
      position:"absolute",
      right:0,
      alignSelf:"center",
      height:"115%",
      borderTopEndRadius:10,
      borderBottomEndRadius:10,
    },
  },
  button:{
    backgroundColor:Globals.primaryColor,
    width:windowWidth/1.2,
    position:"absolute",
    bottom:50,
    alignSelf:"center",
    paddingVertical:10,
    borderRadius:20,
    buttonContent:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
    },
    buttonText:{
      fontSize:30,
      color:Globals.textColor,
      marginRight:10,
    }
  }
})