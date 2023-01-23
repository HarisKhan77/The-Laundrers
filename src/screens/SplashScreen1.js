import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'

const SplashScreen1 = ({navigation}) => {
  return (
    <Pressable onPress={()=>{navigation.navigate("Login")}} style={{flex:1, backgroundColor:"white",paddingTop:80}}>
     <View style={{}}>
        <Text style={{color:'#EC7773', fontSize:35, paddingLeft:80, fontWeight:"500"}}>The</Text>
        <Text style={{color:'#EC7773',alignSelf:'center', fontSize:35, fontWeight:"500"}}>Laundrers</Text>
     </View>
     <View style={{width:500, paddingTop:50}}>
     <Image source={require('../assets/images/mainPage.png')} resizeMethod='auto' 
     style={{width:370, height:500}}/>
     </View>
    </Pressable>
  )
}

export default SplashScreen1;