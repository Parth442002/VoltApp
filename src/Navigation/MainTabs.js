import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet} from "react-native";
import TabBarIcon, { CustomTabBarButton, CustomTabBarIcon } from "../Components/Navigation/TabBarIcon";
import HomeScreen from "../Screens/Main/HomeScreen";
import ProfileScreen from "../Screens/Main/Profile.screen";
import SavedScreen from "../Screens/Main/Saved.screen";
import WalletScreen from "../Screens/Main/Wallet.screen";
import ChargeScreen from "../Screens/Main/Charge.screen"
import HomePrototypeScreen from "../Screens/Main/HomePrototype.screen";
import globals from "../styles/constants";


const Tab=createBottomTabNavigator();

const MainTabs=()=>{
  return(
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle:{
          position:"absolute",
          bottom:15,
          left:20,
          right:20,
          elevation:20,
          backgroundColor:"white",
          borderRadius:15,
          height:60,
          alignItems:"center",
          justifyContent:"center",
          ...styles.shadow
        }
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomePrototypeScreen}
        options={{
          tabBarIcon:({ focused}) =>
          (<TabBarIcon name="home" labelName="Home" focused={focused}/>),
        }}
      />
      <Tab.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{
          tabBarIcon:({ focused}) =>
          (<TabBarIcon name="wallet" labelName="Wallet" focused={focused}/>),
        }}
      />
      <Tab.Screen
        name="ChargeScreen"
        component={ChargeScreen}
        options={{
          tabBarIcon:(focused)=>(
            <CustomTabBarIcon focused={focused}/>
          ),
          tabBarButton:(props)=>(
            <CustomTabBarButton {...props} />
          )
        }}
      />
      <Tab.Screen
        name="SavedScreen"
        component={SavedScreen}
        options={{
          tabBarIcon:({ focused}) =>
          (<TabBarIcon name="bookmark-o" labelName="Saved" focused={focused}/>),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon:({ focused}) =>
          (<TabBarIcon name="user" labelName="Profile" focused={focused}/>),
        }}
      />

    </Tab.Navigator>
  )
}

export default MainTabs


const styles =StyleSheet.create({
  shadow:{
    elevation:5,
    shadowColor: globals.primaryColor,
    shadowOffset: {width: 8, height: 8},
    shadowOpacity: 1,
    shadowRadius:2,
  }
})