/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './components/BottomTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtherScreen from './components/NavigateOtherScreen';
import Navbar from './components/NavBar';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Root'>
        <Stack.Screen name="Other" component={OtherScreen} />
        <Stack.Screen name="Root" component={BottomTab} options={{
          headerTransparent: true,
          header: (navigation) => <Navbar />
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
