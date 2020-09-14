import React,{Component} from 'react';
import { Button, Text, View, Image, SafeAreaView, StyleSheet} from 'react-native';
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
//import Header from '../../screens/components/header'
function WellcomeScreen({navigation}, props){
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'black'  }}>
      <Text>Wellcome the Gestor Administrations bussines</Text>
         <View style={Styles.loge} >
           <Image style={{width:360, height:250, resizeMode: 'contain' } }
           source={require('../../images/Loge.png')}
           />
         </View>
      <Text style={Styles.message} >
                  WellCome to the Activity Gestor Comercial.
                  An aplication for manage the Activity group comercial to 
                  yours Bussiness                 
                </Text> 
      <Button
        title="Get Start"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
    )  
  
}
export default WellcomeScreen

const Styles = StyleSheet.create({
 
  container:{
    flexDirection: 'row',
   backgroundColor:'black',
    textAlign: 'center',
    justifyContent: 'center'
 },
 loge:{
  alignItems:'center',
  alignSelf:"center",
  height:200,
  marginBottom: 20
},
 
message:{    
        
  color: 'white',
  fontSize: 20,
  alignSelf: 'center',
  marginBottom: 30

},
  imag1:{
    width:300       
  },
  imag1:{
    width:300
  },
  imag1:{
    width:300
  },
  imag1:{
    width:300
  }
})