import { StyleSheet, Text, View ,Dimensions, TouchableOpacity,TextInput} from 'react-native'

import React, { useState ,useEffect} from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LottieView from 'lottie-react-native';

import Globals from "../../styles/constants"
import Line from "../../Assets/Vectors/line.svg"


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function SignUpScreen({navigation}){
  const [phone,setPhone]=useState("")
  const [password,setPassword]=useState("")
  const [secure,setSecure]=useState(false)

  useEffect(() => {
    AntDesign.loadFont();
    FontAwesome.loadFont();
    Feather.loadFont();
  }, []);

  return (
    <KeyboardAwareScrollView
      style={{backgroundColor:Globals.backgroundColor}}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.Screencontainer}
      scrollEnabled={false}
    >
      <LottieView
            autoPlay
            style={[{
            width:150,
            height:150,
            },styles.vector]}
            source={require("../../Assets/LottieFiles/SplashScreen.json")}
          />
      <Text style={styles.heading}>Create Account!</Text>
      <View style={styles.inputs}>
        <View style={styles.inputContainer}>
          <AntDesign
            name="phone"
            color={Globals.primaryColor}
            size={30}
            style={styles.inputContainer.prefix}
          />
          <TextInput
            style={styles.inputContainer.inputField}
            onChangeText={phone}
            value={setPhone}
            placeholder="Phone Number"
            keyboardType="numeric"
            placeholderTextColor={"gray"}
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign
            name="lock"
            color={Globals.primaryColor}
            size={30}
            style={styles.inputContainer.prefix}
          />
          <TextInput
            style={styles.inputContainer.inputField}
            onChangeText={password}
            value={setPassword}
            secureTextEntry={secure}
            placeholder="Password"
            keyboardType="numeric"
            placeholderTextColor={"gray"}
          />
          <TouchableOpacity
          style={styles.inputContainer.postfix}
          onPressOut={()=>setSecure(!secure)}
          >
            <Feather
              name={secure?"eye":"eye-off"}
              color={Globals.primaryColor}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.createButton}
        onPressOut={()=>navigation.navigate("OtpVerifyScreen")}
      >
        <Text style={styles.createText}>Create Account</Text>
      </TouchableOpacity>

      <View style={styles.loginOption}>
        <Text style={styles.loginText}>Already Have an Account? </Text>
        <TouchableOpacity
          onPressOut={()=>navigation.navigate("SignInScreen")}
        >
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.options}>
        <Line height={20} width={60}/>
        <Text style={styles.options.text}>Or Continue With</Text>
        <Line height={20} width={60}/>
      </View>

      <View style={styles.socials}>
        <TouchableOpacity
          onPressOut={()=>navigation.navigate("ChargingFlowStack",
          )}
          style={styles.socialIcon}>
          <AntDesign name='google' color={"white"} size={35}/>
        </TouchableOpacity>
        <View style={styles.socialIcon}>
          <FontAwesome name='facebook' color="white" size={35}/>
        </View>
      </View>
      <Text style={styles.bottomText}>Made with ❤️ in India</Text>
    </KeyboardAwareScrollView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  Screencontainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:Globals.backgroundColor,
    backfaceVisibility:0,
  },
  vector:{
    top:10,
  },
  heading:{
    fontSize:40,
    textAlign:"left",
    alignContent:"flex-start",
    marginTop:30,
    color:Globals.textColor,
  },
  inputs:{
    alignItems:"flex-start",
    paddingHorizontal:0,
    marginTop:0,
  },
  inputContainer:{
    paddingVertical:3,
    width:windowWidth-50,
    marginTop:25,
    flexDirection: 'row',
    backgroundColor:Globals.inputBackgroundColor,
    borderRadius:20,
    borderColor:Globals.borderColor,
    borderWidth:2,
    prefix:{
      padding: 10,
    },
    inputField:{
      flex: 1,
      fontSize:20,
      backgroundColor:Globals.inputBackgroundColor,
      borderRadius:20,
      color: '#424242',
    },
    postfix:{
      padding:10,
    },
  },
  createButton:{
    marginVertical:40,
    paddingVertical:15,
    paddingHorizontal:40,
    backgroundColor:Globals.primaryColor,
    borderRadius:10,
  },
  createText:{
    fontSize:20,
    color:"white",
  },
  loginOption:{
    flexDirection:"row",
    justifyContent:"center",
    marginBottom:20,
  },
  loginText:{
    fontSize:20,
    color:Globals.textColor,
  },
  login:{
    fontSize:20,
    fontWeight:"700",
    color:Globals.primaryColor,
  },
  options:{
    marginTop:30,
    flexDirection:"row",
    justifyContent:"space-around",
    text:{
      fontSize:20,
      color:Globals.textColor,
      textAlign:"center",
      alignItems:"center",
      paddingHorizontal:20,
      top:-10,
    }
  },
  socials:{
    flexDirection:"row",
    marginVertical:20,
    justifyContent:"space-evenly",
  },
  socialIcon:{
    height:70,
    width:70,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:Globals.primaryColor,
    marginHorizontal:20,
  },
  bottomText:{
    position:"absolute",
    color:Globals.textColor,
    bottom:10,
  }
})