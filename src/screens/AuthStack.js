
import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Login';
import SignUp from './SignUp';
import SplashScreen1 from './SplashScreen1';
 
const Stack = createStackNavigator();



const AuthStack = (props) => {
    return (
    <View style={{flex:1 , backgroundColor:"white"}}>
      <Stack.Navigator initialRouteName="SplashScreen1" screenOptions={{headerShown:false}}>
          <Stack.Screen name='Login' component={Login}></Stack.Screen>
          <Stack.Screen name='SignUp' component={SignUp}></Stack.Screen>
          <Stack.Screen name='SplashScreen1' component={SplashScreen1}></Stack.Screen>
      </Stack.Navigator>
  </View>
    )
}

export default AuthStack