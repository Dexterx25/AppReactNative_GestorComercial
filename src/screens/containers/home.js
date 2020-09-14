import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Router:
import Person from '../../Routes/PersonRoutes'
import Organization from '../../Routes/OrganizationRoutes'
import HomeScreen from './HomeScreen'
//
//Activity Busine:
import ActivityBusine from '../containers/ActivityBusine'
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


 
  function Home(){
 
const tabs = createBottomTabNavigator();
        return(
           <NavigationContainer independent={true}> 
             <tabs.Navigator>
               <tabs.Screen name="HomeScreen" component={HomeScreen}/>
                <tabs.Screen name="Person" component={Person}/>
                <tabs.Screen name="Organization" component={Organization}/>
                <tabs.Screen name="ActivityBusine" component={ActivityBusine}/>
             </tabs.Navigator>
           </NavigationContainer>

            )      
           
          }
export default Home
const styles = StyleSheet.create({
 
});
