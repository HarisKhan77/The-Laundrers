import { View, Text } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home'
import CustomDrawer from './CustomDrawer';
import Refer from "./Refer"
import Orderstatus from './Orderstatus'
import Iron from './Iron';
import Shirts from './Shirts'
import Suits from './Suits'
import Dress from './Dress'
import Trouser from './Trouser'
import OutDoor from './OutDoor'
import HomeIron from './HomeIron';
import Orderdetail from './Orderdetail';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#EC7773',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
        //   drawerIcon: ({color}) => (
        //     <Ionicons name="home-outline" size={22} color={color} />
        //   ),
        }}
      />
      <Drawer.Screen
        name="Iron"
        component={Iron}
        options={{
        //   drawerIcon: ({color}) => (
        //     <Ionicons name="home-outline" size={22} color={color} />
        //   ),
        }}
      />
      <Drawer.Screen
        name="Shirts"
        component={Shirts}
        options={{
        //   drawerIcon: ({color}) => (
        //     <Ionicons name="home-outline" size={22} color={color} />
        //   ),
        }}
      />
      <Drawer.Screen
        name="Suits"
        component={Suits}
        options={{
        //   drawerIcon: ({color}) => (
        //     <Ionicons name="home-outline" size={22} color={color} />
        //   ),
        }}
      />
      <Drawer.Screen
        name="Dress"
        component={Dress}
        options={{
        //   drawerIcon: ({color}) => (
        //     <Ionicons name="home-outline" size={22} color={color} />
        //   ),
        }}
      />
      <Drawer.Screen
        name="Trouser"
        component={Trouser}
        options={{
        //   drawerIcon: ({color}) => (
        //     <Ionicons name="home-outline" size={22} color={color} />
        //   ),
        }}
      />
      <Drawer.Screen
        name="OutDoor"
        component={OutDoor}
        options={{
        //   drawerIcon: ({color}) => (
        //     <Ionicons name="home-outline" size={22} color={color} />
        //   ),
        }}
      />
      <Drawer.Screen
        name="HomeIron"
        component={HomeIron}
        options={{
        //   drawerIcon: ({color}) => (
        //     <Ionicons name="home-outline" size={22} color={color} />
        //   ),
        }}
      />
      {/* <Drawer.Screen
        name="Login"
        component={Login}
        options={{
        //   drawerIcon: ({color}) => (
        //     <Ionicons name="person-outline" size={22} color={color} />
        //   ),
        }}
      /> */}
      {/* <Drawer.Screen
        name="Payment"
        component={Payment}
        options={{
        //   drawerIcon: ({color}) => (
        //     <Ionicons name="person-outline" size={22} color={color} />
        //   ),
        }}
      /> */}
      
      {/* <Drawer.Screen
        name="Your Orders"
        component={Orderdetail}
        options={{
        //   drawerIcon: ({color}) => (
        //     <Ionicons name="person-outline" size={22} color={color} />
        //   ),
        }}
      /> */}
      {/* <Drawer.Screen
        name="Refer & Earn"
        component={Refer}
        options={{
        //   drawerIcon: ({color}) => (
        //     <Ionicons name="person-outline" size={22} color={color} />
        //   ),
        }}
      /> */}
      
      <Drawer.Screen
        name="Order Status"
        component={Orderstatus}
        options={{
        //   drawerIcon: ({color}) => (
        //     <Ionicons name="person-outline" size={22} color={color} />
        //   ),
        }}
      />
       <Drawer.Screen
        name="Order Details"
        component={Orderdetail}
        options={{
        //   drawerIcon: ({color}) => (
        //     <Ionicons name="person-outline" size={22} color={color} />
        //   ),
        }}
      />

    </Drawer.Navigator>
  )
}

export default AppStack