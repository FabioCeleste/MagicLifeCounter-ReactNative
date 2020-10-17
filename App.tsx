import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TwoTeams from './src/screens/TwoTeams';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TwoTeams" component={TwoTeams} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

