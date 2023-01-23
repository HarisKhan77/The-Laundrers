import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import Pyament from './Pyament';
import Orderstatus from './Orderstatus';
import Conformorder from "./Conformorder"
import Trackorder from './Trackorder';
import SplashScreen1 from './SplashScreen1';
import ViewCart from './ViewCart';
import Admin from './Admin';
import Iron from './Iron'
import Shirts from './Shirts'
import Suits from './Suits'
import Dress from './Dress'
import Trouser from './Trouser'
import OutDoor from './OutDoor'
import UserDetail from './UserDetail';
import {Provider as ReduxProvider} from 'react-redux'
import configureStore from '../redux/store';
import ShowOrders from './ShowOrders';
import UpdateOrderStatus from './UpdateOrderStatus';
import AllOrders from './AllOrders'
import PickedupOrder from './PickedupOrder';
import CompletedOrders from './CompletedOrders';
import Totalorders from './Totalorders';
import Rider from './Rider';
import HomeIron from './HomeIron';
import Orderdetail from './Orderdetail';
import UserOrders from './UserOrders';
  
const Stack = createStackNavigator();
const store = configureStore();

const AppNevigator = (props) => {
  return (
    <View style={{flex:1 , backgroundColor:"white"}}>
    <ReduxProvider store={store}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="SplashScreen1" screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
          <Stack.Screen name='SignUp' component={SignUp}></Stack.Screen>
          <Stack.Screen name='SplashScreen1' component={SplashScreen1}></Stack.Screen>
            <Stack.Screen name='Home' component={Navigation}></Stack.Screen>
            <Stack.Screen name='ForgotPassword' component={ForgotPassword}></Stack.Screen>
            <Stack.Screen name='Pyament' component={Pyament}></Stack.Screen>
            <Stack.Screen name='Orderstatus' component={Orderstatus}></Stack.Screen>
            <Stack.Screen name='Trackorder' component={Trackorder}></Stack.Screen>
            <Stack.Screen name='Conformorder' component={Conformorder}></Stack.Screen>
            <Stack.Screen name='ViewCart' component={ViewCart}></Stack.Screen>
            <Stack.Screen name='Admin' component={Admin}></Stack.Screen>
            <Stack.Screen name='Iron' component={Iron}></Stack.Screen>
            <Stack.Screen name='Shirts' component={Shirts}></Stack.Screen>
            <Stack.Screen name='Suits' component={Suits}></Stack.Screen>
            <Stack.Screen name='Dress' component={Dress}></Stack.Screen>
            <Stack.Screen name='Trouser' component={Trouser}></Stack.Screen>
            <Stack.Screen name='OutDoor' component={OutDoor}></Stack.Screen>
            <Stack.Screen name='UserDetail' component={UserDetail}></Stack.Screen>
            <Stack.Screen name='ShowOrders' component={ShowOrders}></Stack.Screen>
            <Stack.Screen name='UpdateOrderStatus' component={UpdateOrderStatus}></Stack.Screen>
            <Stack.Screen name='AllOrders' component={AllOrders}></Stack.Screen>
            <Stack.Screen name='PickedupOrder' component={PickedupOrder}></Stack.Screen>
            <Stack.Screen name='CompletedOrders' component={CompletedOrders}></Stack.Screen>
            <Stack.Screen name='Totalorders' component={Totalorders}></Stack.Screen>
            <Stack.Screen name='Rider' component={Rider}></Stack.Screen>
            <Stack.Screen name='HomeIron' component={HomeIron}></Stack.Screen>
            <Stack.Screen name='Orderdetail' component={Orderdetail}></Stack.Screen>
            <Stack.Screen name='UserOrders' component={UserOrders}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      </ReduxProvider>
    </View>
  )
}

export default AppNevigator