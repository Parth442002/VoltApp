import { StatusBar, StyleSheet, Text, View ,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import CarCarousel from '../../Components/CarCarousel'
import Globals from '../../styles/constants'


AntDesign.loadFont()
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const data=[
  {
    uri:"https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854",
    title:"Audi",
    id:1,
  },
  {
    uri:"https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854",
    title:"Bmw",
    id:2,
  },
  {
    uri:"https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854",
    title:"Porsche",
    id:3,
  },
  {},

]
const CarSelect = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Text style={styles.heading}>Select Car</Text>
      <CarCarousel data={data} style={styles.companyCarousel} />
      <Text style={{textAlign:"center",marginTop:20}}>Random Car Data</Text>
      <Text style={{textAlign:"center",marginTop:20}}>Random Car Stats</Text>
      <TouchableOpacity
        style={styles.button}
        onPressOut={()=>navigation.navigate("CarLoadingScreen")}
      >
        <View style={styles.button.buttonContent}>
          <Text style={styles.button.buttonText}>Continue</Text>
          <AntDesign name="arrowright" color={Globals.textColor} size={30}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CarSelect

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
  },
  companyCarousel:{
    backgroundColor:"transparent",
    marginTop:20,
    height:windowWidth,
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