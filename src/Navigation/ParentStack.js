import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

//Individual Stacks
import SplashScreen from './SplashScreen';
import AuthStack from "./AuthStack"
import OnBoardingStack from "./OnBoardingStack"
import CarCreateStack from "./CarCreateStack"
import MainTabs from "./MainTabs"

//Misc Stacks
import ChargingFlowStack from "./ChargingFlowStack"

const ParentStack = createStackNavigator();

export default function Navigation(){
  return(
    <ParentStack.Navigator
      initialRouteName='SplashScreen'
      screenOptions={{
        headerShown:false,
      }}
      >
          <ParentStack.Screen
            name="SplashScreen"
            component={SplashScreen}
          />

          <ParentStack.Screen
            name='OnBoardingStack'
            component={OnBoardingStack}
          />
          <ParentStack.Screen
            name="AuthStack"
            component={AuthStack}
          />
          <ParentStack.Screen
            name='CarCreateStack'
            component={CarCreateStack}
          />
          <ParentStack.Screen
            name='MainTabs'
            component={MainTabs}
          />
          <ParentStack.Screen
            name='ChargingFlowStack'
            component={ChargingFlowStack}
          />

    </ParentStack.Navigator>
  )
}

{/*
<ParentStack.Screen
            name="OnBoardingStack"
            component={OnboardingStack}
          />
          <ParentStack.Screen
            name='Auth'
            component={AuthStack}
          />

*/}