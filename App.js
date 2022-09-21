import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ParentStack from "./src/Navigation/ParentStack"

export default function App() {
  return (
      <NavigationContainer>
        <ParentStack/>
      </NavigationContainer>
  );
}