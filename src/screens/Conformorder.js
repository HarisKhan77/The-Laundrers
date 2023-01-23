import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/customButtons/CustomButton'

const Conformorder = () => {

  return (
    <View style={{ backgroundColor:"white",flex:1, justifyContent: 'center', padding:80,
    alignItems: 'center', }}>
    <View style={{height:400, width:400, justifyContent:'center', alignItems:'center'}}>
      <Image
        source={require("../assets/images/Conformorder.png")}
        style={{}}
      />
      </View>
      <View style={{ width: 300, marginTop: 10 ,flex:1}}>
        <View style={{}}>
          <Text style={{color:"black", fontWeight: '800', fontSize: 20, justifyContent: 'center', alignSelf: 'center' }}>Your Order Successfully </Text>
          <Text style={{ color:"black",fontWeight: '800', fontSize: 20, justifyContent: 'center', alignSelf: 'center' }}>Placed</Text>
        </View>
        <View style={{}}>
          <CustomButton text={'Thank You'} />
        </View>
      </View>
    
    </View>
  )
}


export default Conformorder