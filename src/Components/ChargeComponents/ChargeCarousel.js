import { StyleSheet, Text, View,Dimensions,Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import globals from '../../styles/constants';

AntDesign.loadFont()
Entypo.loadFont()
MaterialCommunityIcons.loadFont()
const windowWidth = Dimensions.get('window').width;

const data = [
  'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200'
  ];

const ChargeCarousel = () => {
  return (
    <FlatList
      data={data}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{overflow:"hidden",}}
      keyExtractor={(_,index)=>index.toString()}
      renderItem={(item)=>{
        return(
          <CarouselCard/>
        )
      }}
    />
  )
}

export const CarouselCard=()=>{
  return(
    <TouchableOpacity style={styles.cardContaner}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri:"https://cdn.iconscout.com/icon/free/png-256/tata-3441218-2874323.png"}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.right}>
          <Text style={styles.chargerName}>Charger Name</Text>
          <Text style={styles.location}>Charger Location</Text>
          <View style={styles.subRight}>
            <AntDesign name="star" color={globals.primaryColor} size={12}/>
            <Text style={styles.star}>5</Text>
            <Text style={styles.distance}>250km Away</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.available}>Available</Text>
            <Entypo name="dot-single" size={40} color={"green"}/>
          </View>
        </View>
        <TouchableOpacity
        style={styles.directions}
        >
          <MaterialCommunityIcons
            name="directions"
            size={40}
            color={globals.primaryColor}
          />
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default ChargeCarousel

const styles = StyleSheet.create({
  cardContaner:{
    backgroundColor:"white",
    width:windowWidth*.6,
    height:windowWidth/2,
    height:"100%",
    flexDirection:"row",
    borderRadius:10,
    marginHorizontal:10,
    justifyContent:"flex-start",
  },
  imageContainer:{
    marginLeft:10,
    alignSelf:"center",
    backgroundColor:"transparent",
    borderRadius:1000,
  },
  image:{
    height:40,
    width:40,
  },
  right:{
    marginLeft:10,
  },
  chargerName:{
    fontSize:18,
    fontWeight:"700"
  },
  location:{
    marginVertical:5,
    fontSize:15,
    fontWeight:"500",
  },
  subRight:{
    marginTop:10,
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
  },
  star:{
    marginHorizontal:2,
  },
  distance:{
    marginLeft:10,
  },
  bottomContainer:{
    marginTop:5,
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
  },
  available:{
    marginHorizontal:2,
  },
  directions:{
    position:"absolute",
    bottom:7,
    right:7,
  }
})