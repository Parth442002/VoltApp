import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from "../Screens/Auth/SignUpScreen"
import OtpVerifyScreen from "../Screens/Auth/OtpVerify.screen"
import ResponseScreen from '../Screens/Auth/Response.screen';
const AuthStack = createStackNavigator();

export default function Navigation(){
  return(
    <AuthStack.Navigator
      initialRouteName='SignUpScreen'
      screenOptions={{
        headerShown:false,
      }}
      >
          <AuthStack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
          />
          <AuthStack.Screen
            name="OtpVerifyScreen"
            component={OtpVerifyScreen}
          />
          <AuthStack.Screen
            name="ResponseScreen"
            component={ResponseScreen}
          />


    </AuthStack.Navigator>
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