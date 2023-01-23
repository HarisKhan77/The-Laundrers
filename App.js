import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Modal,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import Login from './src/screens/Login.js';
import SignUp from './src/screens/SignUp.js';
import ForgotPassword from './src/screens/ForgotPassword.js';
import Home from './src/screens/Home.js';
import Pyament from './src/screens/Pyament.js';
import AuthStack from './src/screens/AuthStack.js';
import AppStack from './src/screens/AppStack.js';
import AccountInfo from './src/screens/Accountinfo';
import Conformorder from './src/screens/Conformorder';
import Orderdetail from './src/screens/Orderdetail.js';
import Refer from './src/screens/Refer.js';
import Trackorder from './src/screens/Trackorder.js';
import Orderstatus from './src/screens/Orderstatus.js';
import Navigation from './src/screens/Navigation';
import AppNevigator from './src/screens/AppNevigator.js';
import SplashScreen1 from './src/screens/SplashScreen1.js';
import Iron from './src/screens/Iron.js';
import {SignInContextProvider} from './src/context/authContext.js';
import Maps from './src/screens/Maps.js';
import ChooseLocation from './src/screens/ChooseLocation.js';
import OrdersFromDataBase from './src/screens/OrdersFromDataBase.js';
import Admin from './src/screens/Admin.js';
import ShowOrders from './src/screens/ShowOrders.js';
import {createStackNavigator} from '@react-navigation/stack';
import UpdateOrderStatus from './src/screens/UpdateOrderStatus.js';

const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  return (
        <SignInContextProvider>
        <SafeAreaView style={styles.root}>
          <AppNevigator/>
          {/* <UpdateOrderStatus/> */}
          {/* <Admin/> */}
          {/* <Maps/> */}
          {/* <ChooseLocation/> */}
          {/* <Iron /> */}
         {/* <Login /> */}
         {/* <SignUp /> */}
         {/* <ForgotPassword /> */}
         {/* <Home /> */}
         {/* <Pyament /> */}
         {/* <Navigation /> */}
         {/* <NavigationContainer> */}
           {/* <AuthStack /> */}
           {/* <AppStack /> */}
         {/* </NavigationContainer> */}
         {/* <AccountInfo/> */}
         {/* <Conformorder/> */}
         {/* <Orderdetail/> */}
         {/* <Refer/> */}
         {/* <Trackorder/> */}
         {/* <Orderstatus/> */}
         {/* <OrdersFromDataBase /> */}
        </SafeAreaView>
    </SignInContextProvider>
    // <SafeAreaView style={styles.root}>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Admin" component={Admin} />
    //       <Stack.Screen name="ShowOrders" component={ShowOrders} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    width: windowWidth,
    height: windowHeight,
  },
});

export default App;

