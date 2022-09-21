import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChargerConnectScreen from '../Screens/Misc/ChargerConnect.screen';
import ChargingStartedScreen from "../Screens/Misc/ChargingStarted.screen"

const ChargingFlowStack = createStackNavigator();

export default function Navigation(){
  return(
    <ChargingFlowStack.Navigator
      initialRouteName='ChargingConnectScreen'
      screenOptions={{
        headerShown:false,
      }}
      >
          <ChargingFlowStack.Screen
            name="ChargingConnectedScreen"
            component={ChargerConnectScreen}
          />
          <ChargingFlowStack.Screen
            name="ChargingStartedScreen"
            component={ChargingStartedScreen}
          />

    </ChargingFlowStack.Navigator>
  )
}