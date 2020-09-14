import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Router:

import WellcomeScreen from './src/screens/containers/WelcomeSceen'
import Home from './src/screens/containers/home'

//
import React, { Component } from 'react';
import {
  
    Button,
    Platform,
    StyleSheet,
    Text,
    View,
    SafeAreaView
  
  } from 'react-native';
  const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
///Use Stack-Navigation:


 
  function App(){
 
const Stack = createStackNavigator();
        return(
           <NavigationContainer independent={true}> 
             <Stack.Navigator>
                <Stack.Screen name="WellcomeScreen" component={WellcomeScreen}/>
                <Stack.Screen name="Main" component={Home}/> 
             </Stack.Navigator>
           </NavigationContainer>

            )      
           
          }
export default App
const styles = StyleSheet.create({
  nameNavigator:{
     flex: 1,
    alignItems: 'center',
    justifyContent: 'center' 
  },
 container: {
   flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
 
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 
 },
 welcome: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
 },
 instructions: {
   textAlign: 'center',
   color: '#333333',
   marginBottom: 5,
 },
});
