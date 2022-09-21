import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Individual Stacks
import CompanySelectScreen from "../Screens/CarCreate/CompanySelect.screen"
import CarSelectScreen from '../Screens/CarCreate/CarSelect.screen';
import CarLoadingScreen from "../Screens/CarCreate/carLoading.screen"
import CarSetupScreen from "../Screens/CarCreate/CarSetup.screen"

const CarCreateStack = createStackNavigator();

export default function Navigation(){
  return(
    <CarCreateStack.Navigator
      initialRouteName='CarSetupScreen'
      screenOptions={{
        headerShown:false,
      }}
      >

          <CarCreateStack.Screen
            name="CarSetupScreen"
            component={CarSetupScreen}
          />
          <CarCreateStack.Screen
            name="CarLoadingScreen"
            component={CarLoadingScreen}
          />

    </CarCreateStack.Navigator>
  )
}


{/*
<CarCreateStack.Screen
            name="CompanySelectScreen"
            component={CompanySelectScreen}
          />
          <CarCreateStack.Screen
            name="CarSelectScreen"
            component={CarSelectScreen}
          />

*/}