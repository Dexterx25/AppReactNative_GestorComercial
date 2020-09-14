

//using Hooks:
import React,{useEffect, useState} from 'react' 
import {useFormik} from 'formik';
import {View, Text, Form, Item, Label, Input, Picker, Button} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Platform,
  StyleSheet,
 ScrollView,
  SafeAreaView

} from 'react-native';



function BusinePerson(){
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const {values, isSubmitting, setFieldValue, handleSubmit, errors} = useFormik({
      initialValues:{
        nameBusine: '', // the same "Title" but in my backend is nameBusine 
        description: '',
        identityPerson:'',
        valuebusine:'',
        dateClose:'',
        stateBusine: '',
        time:'',
     
      },
      onSubmit: values =>{
        if(!values.identityPerson||!values.nameBusine||!values.description||!values.valuebusine||!values.dateClose||!values.stateBusine) 
        {
          alert('Fields not fill complety')
        }else{
              alert('dates send correctly')
         }
      },
      
     
        validate:  values =>{
          const errors = {}; 
          
          console.log(values)
        
          if(!values.nameBusine) 
        {
          errors.nameBusine = "fill this flield";
        }        
         if(!values.description){
            errors.description = "fill this field";
           }  
         if(values.identityPerson.length >10){
            errors.identityPerson = "Invalid identity";
           }
            if(!values.stateBusine){
               errors.stateBusine = "select your state";
             }
             if(!values.valuebusine){
                errors.valuebusine = "fill This Field"
             }if(!values.dateClose || values.dateClose.length <6 || values.dateClose.length>6){
               errors.dateClose = "fill this field correctly"
             }
          
          return errors
        
       }
    
    })
    
        return(
     //navigation 5x.
    < ScrollView>
     <View style={styles.container}>
     <Form style={styles.nameNavigator}>
       <Text style={styles.welcome}>The Busine Register</Text>
         <Item  error={errors.nameBusine ? true : false}>
           <Label>Title Busine:</Label>  
           <Input value={values.nameBusine} onChangeText={text => setFieldValue('nameBusine', text)}/>
           <Text>{errors.nameBusine ? errors.nameBusine : ''}</Text>
         </Item>

         <Item  error={errors.description ? true : false}>
           <Label>Description:</Label>         
           <Input value={values.description} onChangeText={comment => setFieldValue('description', comment)}/>
           <Text>{errors.description ? errors.description : ''}</Text>
         </Item>
         
           
         <Item  error={errors.identityPerson ? true : false}>
           <Label>your Identity mumber:</Label>         
           <Input value={values.identityPerson} onChangeText={text => setFieldValue('identityPerson', text)}/>
           <Text>{errors.identityPerson ? errors.identityPerson : ''}</Text>
         </Item>
         
         <Item  error={errors.valuebusine ? true : false}>
           <Label>The value:</Label>         
           <Input value={values.valuebusine} onChangeText={text => setFieldValue('valuebusine', text)}/>
           <Text>{errors.valuebusine ? errors.valuebusine : ''}</Text>
         </Item>
         

           <Item  error={errors.dateClose ? true : false}>
           <Label>Date of close:</Label>  
             <Input value={values.dateClose} onChangeText={text => setFieldValue('dateClose', text)}/>
         
           </Item>
          
                  <Item  error={errors.stateBusine ? true : false}>
                    <Label>The State:</Label>  
                    <Picker onValueChange={value => setFieldValue('stateBusine', value)} selectedValue={values.stateBusine}>
                        <Picker.Item label="--Select--" value=""/>
                       <Picker.Item label="activo" value="activo"/>
                       <Picker.Item label="suspendido" value="suspendido"/>
                       <Picker.Item label="en pausa" value="pause"/>
                    </Picker>
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
 
export default BusinePerson

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

