
//using Hooks:
import React,{useEffect, useState} from 'react' 
import {useFormik} from 'formik';
import {View, Text, Form, Item, Label, Input, Picker, Button} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


//The Component-State Other register:

//

import {
  Platform,
  StyleSheet,
 ScrollView,
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


//Using Hooks:
 function ActivityPerson(){
 const [fontsLoaded, setFontsLoaded] = useState(false);
const {values, isSubmitting, setFieldValue, handleSubmit, errors} = useFormik({
  initialValues:{
    description: '',
    typeActivity: '',
    identityPerson:'',
    date:'',
    time:'',
  },
  onSubmit: values =>{
    console.log(values)
      
      
      if(!values.description||!values.typeActivity||!values.identityPerson||!values.date||!values.time) 
      {alert('Fields not fill complety')}else{
            alert('dates send correctly')
      }
  },
  validate:  values =>{
     const errors = {}; 
     
     console.log(values)
   
     if(values.description.length<10||!values.description) 
   {
     errors.description = "description >30 letters required";
   }        
    if(!values.typeActivity){
       errors.typeActivity = "Select some type";
      }  
    if(values.identityPerson.length<10||!values.identityPerson){
       errors.identityPerson = "Invalid Date";
      }
       if(values.date.length <6){
          errors.date = "Ivalid date";
        }
     
     return errors
   
  }
})

  // createHomeStak = () =>
    
        return(
            //navigation 5x.
            <ScrollView >
            <View style={styles.container}>
              
              <Form  style={styles.nameNavigator}> 
              <Text style={styles.welcome}>The Activity Register</Text>
                  <Item  error={errors.description ? true : false}>
                    <Label>Description:</Label>  
                    <Input value={values.description} onChangeText={text => setFieldValue('description', text)}/>
                  </Item>

                  <Item >

                  <Label>Type Antivity:</Label>  
                    <Picker onValueChange={value => setFieldValue('typeActivity', value)} selectedValue={values.typeActivity}>
                    <Picker.Item label="--Select--" value=""/>
                       <Picker.Item label="Beauty Activity" value="Beauty Activity"/>
                       <Picker.Item label="Technology" value="Technology"/>
                       <Picker.Item label="Textil" value="Textil"/>
                       <Picker.Item label="Food" value="Food"/>
                    </Picker>
                  </Item>
 
                  <Item  error={errors.identityPerson ? true : false}>
                    <Label>Your identity user:</Label>         
                    <Input value={values.identityPerson} onChangeText={text => setFieldValue('identityPerson', text)}/>
                  </Item>
                  
                  <Item  error={errors.busineName ? true : false}>
                    <Label>The Name your Busine:</Label>         
                    <Input value={values.busineName} onChangeText={text => setFieldValue('busineName', text)}/>
                  </Item>
                  

                    <Item  error={errors.date ? true : false}>

                    <Label>Date:</Label>  
                      <Input value={values.date} onChangeText={text => setFieldValue('date', text)}/>
                    </Item>
                   
                  <Item >

                    <Label>Time:</Label>  
                      <Input value={values.time} onChangeText={text => setFieldValue('time', text)}/>
                    </Item>
                  <Item>
                  <Button style={styles.send} onPress={handleSubmit}>
                    <Text>Send</Text>
                  </Button>
                  </Item>
              </Form>
   
          </View>
          </ScrollView>


          )      
        }
     

export default ActivityPerson
const styles = StyleSheet.create({
  nameNavigator:{
     flex: 1,
     width: 300,
    alignItems: 'center',
    justifyContent: 'center', 
    marginBottom:140,
  },
  msg:{
      fontSize: 11,
      margin: 10,
  },
  send:{

      width: 200,
      margin: 5,
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
   fontSize: 22,
   textAlign: 'center',
   margin: 10,
   fontFamily: 'helvetica'
 },
});