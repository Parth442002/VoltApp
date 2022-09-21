import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MainCreditCardScreen = () => {
  return (
    <View>
      <LinearGradient
        start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
        style={styles.card2}
        colors={["#a044ff", "#6a3093"]}
      >
      </LinearGradient>
      <LinearGradient
        start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
        style={styles.card1}
        colors={["#C02425", "#F0CB35"]}
      >
      </LinearGradient>
      <View style={styles.container}>
      <View style={styles.LottieContainer}>
        <LottieView
            autoPlay
            source={require("../../Assets/LottieFiles/cardGradient.json")}
          />
        <Text style={styles.cardHolderName}>PARTH KATIYAR</Text>
        <Text style={styles.validFrom}>FROM- <Text>4 April 22</Text></Text>
        <Text style={styles.validTill}>TO- <Text>12 Jan 26</Text></Text>
        <Image
          style={styles.masterCard}
          source={{uri:"https://toppng.com/uploads/preview/visa-us-vector-logo-free-download-11574017219rwlbxkijxr.png"}}
        />
      </View>
    </View>
    </View>
  )
}

export default MainCreditCardScreen

const styles = StyleSheet.create({
  card1:{
    width:windowWidth/1.24,
    justifyContent:"center",
    alignSelf:"center",
    height:40,
    top:10,
    backgroundColor:"green",
    borderTopEndRadius:10,
    borderTopStartRadius:10,
    overflow:"hidden",
    position:"relative",
  },
  card2:{
    width:windowWidth/1.28,
    justifyContent:"center",
    alignSelf:"center",
    height:40,
    top:20,
    backgroundColor:"red",
    borderTopEndRadius:10,
    borderTopStartRadius:10,
    backgroundColor:"red",
    overflow:"hidden",
    position:"relative",
  },
  LottieContainer:{
    width:windowWidth/1.2,
    height:windowWidth/2.2,
    borderRadius:10,
    backgroundColor:"red",
    overflow:"hidden",
    position:"relative",
  },
  cardHolderName:{
    position:'relative',
    top:10,
    left:10,
    fontSize:20,
    color:"white",
    fontWeight:"700",
  },
  validFrom:{
    position:"relative",
    top:30,
    left:10,
    fontWeight:"700",
    color:"white"
  },
  validTill:{
    position:"relative",
    top:60,
    left:10,
    fontWeight:"700",
    color:"white"
  },
  masterCard:{
    height:60,
    position:"absolute",
    width:60,
    backgroundColor:"transparent",
    top:60,
    right:25,
    borderRadius:10,
  }
})