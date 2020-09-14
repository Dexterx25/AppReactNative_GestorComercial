import React, {Component} from 'react';
import {View, Text, Button, Image, StyleSheet, SafeAreaView, ScrollView} from 'react-native'


//import Header from '../../screens/components/header'
function HomeScreen ({navigation}, props){
  
        return( 
        <ScrollView style={Styles.container}>
            
             
                <View style={Styles.loge}>

                  <Image  style={{width:360, height:100}}
                   source={require('../../images/Loge.png')}
                   
                  />
                </View>
                
               
            
           
            
             
                <View style={{height:1000}}>
                <SafeAreaView>     
                   <Text style={{color:'white', padding:10}}>You can register like a idependent person</Text>
            <Image style={{width:310, height:150, alignSelf:'center', alignItems:'center'}}
             source={require('../../images/BussinessMan.jpeg')}
            />
            
                <Text style={{color:'white', padding:10}} >You can register like an Organization</Text>
            <Image style={{width:310, height:150, alignSelf:'center',}}
             source={require('../../images/organization.jpg')}
            />
             
             <Text style={{color:'white', padding:10}} >You can register your activity like an idependent Person, a Busine or a Organization</Text>
             <Image style={{width:310, height:150, alignSelf:'center',}}
             source={require('../../images/Activity.png')}
            /> 

            <Text style={{color:'white', padding:10}}>You can register your Busine how an idependent Person or an Organization</Text>
          <View style={{flexDirection: "column"}}>  
            <Image style={{width:310, height:150, alignSelf:'center',}}
             source={require('../../images/BussinessMan.jpeg')}
            />
            <Image style={{width:310, height:150, alignSelf:'center',}}
             source={require('../../images/OrganizationTwo.png')}
            />
          </View> 
          
           </SafeAreaView>
      </View>
      <Text style={{color:'white', padding:10}}> You can do all this things in the next buttons:</Text>
             <View style={{flexDirection:'column'}}>
            <View style={Styles.containerButtons}>
             
                <Button 
                 title='Register  Person'
                  onPress={() => navigation.navigate("Person")}
                  style={{width:130}}
                />
                <Button
                 title= 'Register your Organization'
                  
                  style={{width:130}}
                 onPress={() => navigation.navigate("Organization")}
                />
                </View> 
                <Button 
                 title="record your business activity"

                  onPress={ ()=>navigation.navigate("ActivityBusine")}
                />
               </View>
        
            
         </ScrollView>
        )
    
} 
export default HomeScreen
const Styles = StyleSheet.create({
    container:{
       flexDirection:'column',
      backgroundColor:'black',
       textAlign: 'center',
  
      
    },
    loge:{
        alignItems:'center',
        alignSelf:"center",
        height:100,
        marginBottom: 20
    },
    containerImages:{
 
        flex: 1,  
       alignContent:"center",
       alignSelf:'center',
        backgroundColor: 'black',
     
    },
    message:{    
        
      color: 'white',
      fontSize: 20,
      alignSelf: 'center',
    
    },
    containerButtons :{
       color: "red",
       flex: 1,
       flexDirection:"row",
        width:360
    },
    
  imag1:{
      flex: 3,
    width:2,
    resizeMode: 'contain'      
 }

})