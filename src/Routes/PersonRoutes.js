
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
//the icons for the navigation:
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


//The Component-State Other register:
import ScreenPerson from '../screens/containers/FormsPerson/ScreenPerson'
import ActivityPerson from '../screens/containers/FormsPerson/Activity'
import BusinePerson from '../screens/containers/FormsPerson/Busine'

//




import {
 
  Platform,
  StyleSheet,
 SafeAreaView

} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


 function PersonRoutes () {
    
        return(
        
    <NavigationContainer independent={true}>  
      <Tab.Navigator>
      <Tab.Screen name="Register" component={ScreenPerson} />
      <Tab.Screen name="Your Busine" component={BusinePerson} />
      <Tab.Screen name="Your Activity" component={ActivityPerson} />
    </Tab.Navigator>
    </NavigationContainer>
              )      
        }
    
  
  export default PersonRoutes
  



