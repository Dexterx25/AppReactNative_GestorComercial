
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


//using Hooks:
import React,{useEffect, useState} from 'react' 
import {useFormik} from 'formik';
import {View, Text, Form, Item, Label, Input, Picker, Button} from 'native-base';



import {
 
  Platform,
  StyleSheet,
 SafeAreaView,
 ScrollView

} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});





 function ScreenPerson ({navigation}) {

    
  const [fontsLoaded, setFontsLoaded] = useState(false);
const {values, isSubmitting, setFieldValue, handleSubmit, errors} = useFormik({
  initialValues:{
     namePerson: '',
     phonePerson: '',
     emailPerson: '',
     identityPerson: '', 
     typeidentity: ''
  },
  onSubmit: values =>{
    console.log(values)
      
      
      if(!values.namePerson||!values.phonePerson||!values.emailPerson||!values.identityPerson||!values.typeidentity) 
      {alert('Fields not fill complety')}else{
            alert('dates send correctly')
      }
  },
  validate:  values =>{
     const errors = {}; 
     
     console.log(values)
   
     if(values.phonePerson.length < 10 || values.phonePerson.length >10 ) 
   {
     errors.phonePerson = "Invalid phone";
   }        
    if(values.identityPerson.length < 10|| values.identityPerson.length > 10 ){
       errors.identityPerson = "Invalid Identity";
      }  
    if(values.emailPerson.length >60){
       errors.emailPerson = "Invalid Email";
      }
       if(values.namePerson.length <9){
          errors.namePerson = "Ivalid FullName";
        }
     
     return errors
   
  }

})

  // createHomeStak = () =>
    
        return(
          <ScrollView>
           
   <View style={styles.container}>
                  
              <Form style={styles.nameNavigator}>
                 <Text style={styles.welcome}>Person Registration</Text>
                  <Item error={errors.namePerson ? true : false}> 
                    <Label>FullName:</Label>  
                    <Input value={values.namePerson} onChangeText={text => setFieldValue('namePerson', text)}/>
                    <Text>{errors.namePerson ? errors.namePerson : ''}</Text>
                  </Item>

                  <Item error={errors.phonePerson ? true : false}>
                    <Label>CellPhone:</Label>         
                    <Input value={values.phonePerson} onChangeText={text => setFieldValue('phonePerson', text)}/>
                    <Text>{errors.phonePerson ? errors.phonePerson : ''}</Text>
                  </Item>
                  
                  <Item >
                    <Label>Type of Identity</Label>  
                    <Picker onValueChange={value => setFieldValue('typeidentity', value)} selectedValue={values.typeidentity}>
                       <Picker.Item label="--Select--" value=""/>
                       <Picker.Item label="Cedula" value="cedula"/>
                       <Picker.Item label="Nit" value="nit"/>
                       <Picker.Item label="Passport" value="passport"/>
                       <Picker.Item label="MilitaryLibrary" value="militarylibrary"/>
                    </Picker>
                    </Item>

                  <Item error={errors.identityPerson ? true : false}>
                    <Label >Identity:</Label>  
                      <Input value={values.identityPerson} onChangeText={text => setFieldValue('identityPerson', text)}/>
                      <Text>{errors.identityPerson ? errors.identityPerson : ''}</Text>
                    </Item>
                  
                  <Item error={errors.emailPerson ? true : false}>
                    <Label>Email:</Label>  
                    <Input value={values.emailPerson} onChangeText={text => setFieldValue('emailPerson', text)}/>
                    <Text>{errors.emailPerson ? errors.emailPerson : ''}</Text>
                  </Item>
                  <Item> 
                  <Button style={styles.send} onPress={handleSubmit}>
                    <Text>Send</Text>
                  </Button>
                  </Item>
              </Form>
     
              <Text style={styles.msg}>If you want Register {"\n"} your Activity
                      or your Busine, you can do it.{"\n"} Just entry 
                      in the BusinePerson or the ActivityPerson
                  </Text>
        <View>
            <View>                
                <Item error={errors.onSubmit ? true : false}>
                <Button
                 title='Register your Activity'
                  onPress={() => navigation.navigate("Your Activity")}
                ></Button>
                </Item>
                <Item>
                <Button
                 title= 'Register your Busine'
                 onPress={() => navigation.navigate("Your Busine")}
                ></Button>
                </Item>
                </View>

        </View>   
        
    </View>
    </ScrollView>
              )      
        }
export default ScreenPerson
const styles = StyleSheet.create({
    nameNavigator:{
       flex: 1,
       width: 300,
      alignItems: 'center',
      justifyContent: 'center' 
    },
    msg:{
        fontSize: 11,
        margin: 10,
    },
    tabs:{
        fontSize: 300
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