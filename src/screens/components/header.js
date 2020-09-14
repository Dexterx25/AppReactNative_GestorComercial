import React from 'react'
import{
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native'

function Header(props){
return(
 <View style={styles.contentHeader}>
     <SafeAreaView>
       <View style={styles.contentLoge}>
      <Image 
      source={require('../../images/Loge.png')}
      style={styles.logo}
      />
       </View>
       <View>
           {props.children}
       </View>
     </SafeAreaView>
    
 </View>
)
}
const styles = StyleSheet.create({
    logo:{
        width:370,
        height:100,
        resizeMode: 'contain'

    },
     contentLoge:{
      padding:100,
      height: 300,


  },
   
})

export default Header