/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import RegisterScreen from './src/Form Screen/RegisterScreen';
import LoginScreen from './src/Form Screen/LoginScreen';

function App() {
  const MainStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Register" component={RegisterScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
export default App;
