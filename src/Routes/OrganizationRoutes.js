
//using Hooks:
import React,{useEffect, useState} from 'react' 
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



//The Component-State Other register:
import ActivityOrganization from '../screens/containers/FormsOrganization/Activity'
import BusineOrganization from '../screens/containers/FormsOrganization/Busine'
import ScreenOrganization from '../screens/containers/FormsOrganization/ScreenOrganization'
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

// const Drawer = createDrawerNavigator ()
const Stack = createStackNavigator();
// const MaterialBottomTabs = createMaterialBottomTabNavigator()
// const MaterialTopTabs = createMaterialTopTabNavigator ()

const Tab = createMaterialTopTabNavigator();
//Using Hooks:
 function Organization(){
 
  // createHomeStak = () =>
    
        return(
            //navigation 5x.
        <NavigationContainer independent={true}>  
            <Tab.Navigator>
            <Tab.Screen name="Organization" component={ScreenOrganization} />
            <Tab.Screen name="your Activity" component={ActivityOrganization} /> 
            <Tab.Screen name="your Busine " component={BusineOrganization} />
            </Tab.Navigator>
        </NavigationContainer>
    


// {/*     
//           //   <NavigationContainer>
//           //     <Drawer.Navigator>
//           //       <Drawer.Screen name="Home" children={createHomeStak} />
//           //       <Drawer.Screen name= 'Organization' component={OrganizationDraw}/>
//           //       <Drawer.Screen name= 'Organitation' component={OrganitaionDraw}/>
//           //     </Drawer.Navigator>      
//           //  </NavigationContainer>
//      */}
          )      
        }
     
  
  export default Organization



