import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoarding1Screen from "../Screens/Onboarding/OnBoarding1.screen"
import OnBoarding2Screen from '../Screens/Onboarding/OnBoarding2.screen';
import OnBoarding3Screen from "../Screens/Onboarding/OnBoarding3.screen"
const OnBoardingStack = createStackNavigator();

export default function Navigation(){
  return(
    <OnBoardingStack.Navigator
      initialRouteName='OnBoarding1Screen'
      screenOptions={{
        headerShown:false,
      }}
      >
          <OnBoardingStack.Screen
            name="OnBoarding1Screen"
            component={OnBoarding1Screen}
          />
          <OnBoardingStack.Screen
            name="OnBoarding2Screen"
            component={OnBoarding2Screen}
          />
          <OnBoardingStack.Screen
            name="OnBoarding3Screen"
            component={OnBoarding3Screen}
          />

    </OnBoardingStack.Navigator>
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