import React,{useContext, useState, useEffect} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth'
import { SignInContext } from '../context/authContext';
import {firebase} from '@react-native-firebase/firestore';
import {UserId} from './Login';



const CustomDrawer = (props) => {
  const [data, setData] = useState('');



  const {dispatchSignedIn, } = useContext(SignInContext);
  
  async function signOut() {
   
    try {
      auth()
      .signOut()
      .then(
        () => {
          console.log("USER SUCCESSFULLY SIGNOUT")
          dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
          props.navigation.navigate("Login")
        }
      )
      
    } catch (error) {
      Alert.alert(error.code)
    }
  };

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('userdetail')
      .where('UserId', '==', UserId)
      .limit(1)
      .onSnapshot(snapshot => {
        snapshot.docs.map(doc => {
          setData(doc.data());
        });
      });
  }, []);

  return (
    <View style={{flex: 1,  backgroundColor:"white"}}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={true}
        contentContainerStyle={{backgroundColor: 'white',}}>
        <ImageBackground
          style={{padding: 10 , backgroundColor:"#F4F4F4"}}>
         <View style={{borderWidth:0, borderRadius:100, width: 80, height:80, alignSelf:'center'}}>
          <Image
            source={require('../assets/icons/profilepic.png')}
            style={{height: '100%', width: "100%", borderRadius: 40, marginBottom: 10,}}
          />
          </View>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
              color:'black',
              alignSelf:'center'
            }}>
           {data.name}
          </Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 10, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={signOut} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <Ionicons name="exit-outline" size={22} /> */}
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
                color:'black'
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDrawer;