import { Pressable, StyleSheet, Text, View,TextInput,Animated,Dimensions, TouchableOpacity} from 'react-native'
import React,{useRef,useState,useEffect} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AntDesign from "react-native-vector-icons/AntDesign"

import Globals from '../../styles/constants'
import Vector from "../../Assets/Vectors/OtpVerify.svg"


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OtpVerficationScreen = ({navigation}) => {

  useEffect(() => {
    AntDesign.loadFont()
  }, [])

  const [otp,setOtp]=useState([])
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const box4 = useRef();
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
        <TouchableOpacity style={styles.previousArrow}>
          <AntDesign name="left" size={35} color="white"/>
        </TouchableOpacity>
        <Vector
          height={windowHeight/4}
          width={windowWidth-50}
          style={styles.vector}
        />
        <View style={styles.topContainer}>
          <Text style={styles.topContainer.heading}>Verify Account</Text>
          <Text style={styles.topContainer.text}>Otp Sent Successfully to </Text>
          <Text style={styles.topContainer.contact}>+91 9026971112</Text>
        </View>

      <View style={styles.OtpContainer}>
          <TextInput
            maxLength={1}
            style={styles.OtpContainer.otpBox}
            keyboardType="number-pad"
            autoFocus={true}
            ref={box1}
            onChangeText={text => {
              setOtp({...otp, 1: text});
              text && box2.current.focus();
            }}
          />
          <TextInput
            maxLength={1}
            style={styles.OtpContainer.otpBox}
            ref={box2}
            keyboardType="number-pad"
            onChangeText={text=>{
              setOtp({...otp, 2: text});
              text ? box3.current.focus() : box1.current.focus();
            }}
          />
          <TextInput
            maxLength={1}
            style={styles.OtpContainer.otpBox}
            ref={box3}
            keyboardType="number-pad"
            onChangeText={text=>{
              setOtp({...otp, 3: text});
              text ? box4.current.focus() : box2.current.focus();
            }}
          />
          <TextInput
            maxLength={1}
            style={styles.OtpContainer.otpBox}
            ref={box4}
            keyboardType="number-pad"
            onChangeText={text => {
              setOtp({...otp, 4: text});
              !text && box3.current.focus();
            }}
            onEndEditing={()=>console.log("Submitted")}
          />
      </View>

      <Text style={styles.receiveCode}>{"Didn’t receive code?"}</Text>
      <TouchableOpacity>
        <Text style={styles.requestAgain}>Request Again</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPressOut={()=>navigation.navigate("ResponseScreen")}
        >
        <Text style={styles.button.text}>Verify</Text>
      </TouchableOpacity>

    </KeyboardAwareScrollView>
  )
}

export default OtpVerficationScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:Globals.backgroundColor,
    backfaceVisibility:0,
  },
  previousArrow:{
    position:"absolute",
    top:50,
    left:10,
  },
  vector:{
    position:"absolute",
    top:20,
  },
  topContainer:{
    alignItems:"center",
    heading:{
      fontSize:30,
      color:Globals.textColor,
      fontWeight:"700",
      margintTop:-10,
    },
    text:{
      marginTop:10,
      fontSize:20,
      color:Globals.textColor,
      fontWeight:"500",
    },
    contact:{
      marginTop:15,
      fontSize:20,
      color:Globals.primaryColor,
      fontStyle:"italic",
      fontWeight:"400",
      textDecorationLine:"underline",
    }
  },
  heading:{
    fontSize:40,
    textAlign:"left",
    alignContent:"flex-start",
    marginTop:40,
    color:Globals.textColor,
  },
  OtpContainer:{
    flexDirection:"row",
    marginTop:20,
    otpBox:{
      height:60,
      width:60,
      alignItems:"center",
      textAlign:"center",
      marginHorizontal:10,
      backgroundColor:Globals.inputBackgroundColor,
      borderWidth:1,
      borderColor:Globals.borderColor,
      fontSize:40,
      borderRadius:10,
    }
  },
  receiveCode:{
    marginTop:20,
    fontSize:20,
    color:Globals.textColor,
  },
  requestAgain:{
    fontSize:20,
    margintTop:60,
    fontWeight:"600",
    fontStyle:"italic",
    color:Globals.primaryColor,
  },
  button:{
    backgroundColor:Globals.primaryColor,
    alignItems:"center",
    marginTop:20,
    borderRadius:10,
    text:{
      fontSize:20,
      fontWeight:"800",
      color:"white",
      paddingVertical:15,
      paddingHorizontal:75,
    }
  }
})