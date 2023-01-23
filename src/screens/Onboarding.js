import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

const Onboarding = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontWeight: 'bold',
            fontSize: 30,
            color: '#20315f',
          }}>
          GAMEON
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <Text style={{color:'Black'}}> Not at all </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        // onPress={() => navigation.navigate('Home')}
        >
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Roboto-MediumItalic',
          }}>
          Let's Begin
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Onboarding