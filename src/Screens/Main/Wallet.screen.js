import { SafeAreaView, StyleSheet, Text, View,Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import globals from '../../styles/constants'
import MainCreditCardScreen from '../../Components/WalletComponents/MainCreditCard'
import WalletCards from "../../Components/WalletComponents/WalletCards"
import WalletHistoryCard from '../../Components/WalletComponents/WalletHistoryCard'

FontAwesome.loadFont()


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const WalletScreen = () => {
  return (
   <SafeAreaView style={styles.container}>
    <ScrollView
      style={{flex:1}}
      contentContainerStyle={styles.container}
    >
    <View style={styles.topBar}>
      <Text style={styles.heading}>Online Card</Text>
    </View>

    <View>
      <MainCreditCardScreen/>
    </View>
    <View style={styles.monthlySpending}>
      <Text style={styles.spending}>Monthly Spending</Text>
      <View style={styles.totalSpending}>
        <FontAwesome name="rupee" size={30} color={"black"}/>
        <Text style={styles.rupee}>3000</Text>
      </View>
    </View>
    <View style={styles.cards}>
      <WalletCards/>
      <WalletCards/>
      <WalletCards/>
    </View>
    <View style={styles.historyHeading}>
      <Text style={styles.primaryHeading}>Recent Activity</Text>
      <TouchableOpacity>
        <Text style={styles.secondaryHeading}>See All</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.history}>
      <WalletHistoryCard/>
      <WalletHistoryCard/>
      <WalletHistoryCard/>
    </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default WalletScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:globals.backgroundColor,
  },
  topBar:{
    top:20,
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    zIndex:500,
  },
  heading:{
    fontSize:25,
    color:globals.textColor,
    fontWeight:"500",
  },
  monthlySpending:{
    marginVertical:10,
  },
  spending:{
    marginTop:10,
    color:"black",
    fontSize:20,
    fontWeight:"400",
  },
  totalSpending:{
    flexDirection:"row",
    marginTop:7,
    justifyContent:"flex-start",
    width:windowWidth/1.2,
    alignItems:"center",
  },
  rupee:{
    fontSize:30,
    color:"black",
    marginLeft:5,
  },
  cards:{
    marginTop:10,
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-evenly"
  },
  historyHeading:{
    marginTop:20,
    flexDirection:"row",
    width:windowWidth*.8,
    justifyContent:"space-between",
    alignItems:"center",
  },
  primaryHeading:{
    fontSize:25,
    color:globals.textColor,
    color:"black",
    fontWeight:"500"
  },
  secondaryHeading:{
    fontSize:15,
    color:"black",
    fontWeight:"400",
    textDecorationLine:true,
  },
  history:{
    marginTop:10,
  }
})