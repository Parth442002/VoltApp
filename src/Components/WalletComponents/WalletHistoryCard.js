import { StyleSheet, Text, View,Dimensions, Image } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"

FontAwesome.loadFont()


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const WalletHistoryCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          source={{uri:"https://cdn.iconscout.com/icon/free/png-256/tata-3441218-2874323.png"}}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.text}>
          <Text style={styles.chargerName}>Charger Name</Text>
          <Text style={styles.chargerDate}>08 Jan,2022</Text>
        </View>
      </View>
      <View style={styles.right}>
        <FontAwesome name="rupee" size={20} color={"black"}/>
        <Text style={styles.rupee}>3000</Text>
      </View>
    </View>
  )
}

export default WalletHistoryCard

const styles = StyleSheet.create({
  container:{
    width:windowWidth*.9,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical:5,
    marginVertical:6,
    backgroundColor:"white",
    borderRadius:10,
  },
  left:{
    flexDirection:"row",
    justifyContent:"center",
    marginLeft:5,
  },
  image:{
    height:50,
    marginVertical:5,
    width:50,
    padding:10,
    backgroundColor:"lightgray",
    borderRadius:100,
  },
  text:{
    marginLeft:10,
  },
  chargerName:{
    fontSize:15,
    marginTop:10,
    fontWeight:"600"
  },
  chargerDate:{
    fontSize:12,
    fontWeight:"500",
    color:"gray",
    marginTop:5,
  },
  right:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginRight:20,
  },
  rupee:{
    marginLeft:3,
  }
})