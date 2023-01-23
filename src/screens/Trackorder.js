import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/customButtons/CustomButton'

const Trackorder = ({navigation}) => {

  return (
    <View style={{backgroundColor:'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: 300, width: 400, padding: 20 }}>
        <Image
          source={require("../assets/images/Trackorder.png")}
          style={{}}
        />
      </View>
      <View style={{ width: 300, }}>
        <View style={{}}>
          <Text style={{ color: 'black', fontWeight: '800', fontSize: 25, justifyContent: 'center', alignSelf: 'center' }}>Success!Your Order  </Text>
          <Text style={{ color: 'black', fontSize: 11, justifyContent: 'center', alignSelf: 'center', marginTop: 10 }}>Your pickup has been confirmed </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <CustomButton onPress={()=>{navigation.navigate("Orderstatus")}} text={'Track your order'} />
        </View>
      </View>
    </View>
  )
}


export default Trackorder