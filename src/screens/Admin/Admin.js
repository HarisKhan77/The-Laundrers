import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import {firebase} from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const Admin = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, height:"100%", width:"100%"}}>
      <View style={{flex: 1, backgroundColor: 'white',}}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft:"35%",
            }}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
             Admin
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Signout',
                'Wants to signout?',
                [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => navigation.navigate('Login')},
                ],
                {cancelable: false},
              );
            }}
            style={{
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#999',
              padding: 3,
              borderRadius: 3,
            }}>
            <Text style={{color: 'black'}}> signout</Text>
          </TouchableOpacity>
        </View>

        <ScrollView scrollEnabled={true} style={{ borderTopLeftRadius: 25,borderTopRightRadius: 25,backgroundColor:'#F2EFEF',height:"100%",paddingTop:20, padding:4, flexDirection:'column',}}>
        <View style={{width:"100%", height:"100%", alignItems:"center"}} >
        <View style={{width:"95%", height:140, borderWidth:1, borderColor:"black", marginBottom:20}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AllOrders");
            }}
            style={styles.item}>
            <Image  source={require('../assets/images/blueabstractBackground.jpg')} resizeMethod='auto' style={styles.image} />
            <View style={styles.overlay}>
            <Text style={{color: '#fff', fontSize: 18,fontWeight:'500', marginLeft: 20}}>
            Active Orders
            </Text>
            </View>
          </TouchableOpacity>
          
        </View>

        <View style={{width:"95%", height:140, borderWidth:1, borderColor:"black", marginBottom:20}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PickedupOrder");
            }}
            style={styles.item}>
            <Image  source={require('../assets/images/vintageblueBackground.jpg')} resizeMethod='auto' style={styles.image} />
            <View style={styles.overlay}>
            <Text style={{color: '#fff', fontSize: 18,fontWeight:'500', marginLeft: 20}}>
            PickedUp Orders
            </Text>
            </View>
          </TouchableOpacity>
          
        </View>

        <View style={{width:"95%", height:140, borderWidth:1, borderColor:"black", marginBottom:20}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CompletedOrders");
            }}
            style={styles.item}>
            <Image  source={require('../assets/images/navyblueBackground.jpg')} resizeMethod='auto' style={styles.image} />
            <View style={styles.overlay}>
            <Text style={{color: '#fff', fontSize: 18,fontWeight:'500', marginLeft: 20}}>
            Completed Orders
            </Text>
            </View>
          </TouchableOpacity>
          
        </View>

        <View style={{width:"95%", height:140, borderRadius:5,borderWidth:1, borderColor:"black", marginBottom:20}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Totalorders");
            }}
            style={styles.item}>
            <Image  source={require('../assets/images/greenBackground.jpg')} resizeMethod='auto' style={styles.image} />
            <View style={styles.overlay}>
            <Text style={{color: '#fff', fontSize: 18,fontWeight:'500', marginLeft: 20}}>
            Total Orders and Amount
            </Text>
            </View>
          </TouchableOpacity>
          
        </View>

        </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5,
  },
  item: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 6,
    height: "100%",
    width: "100%",
    justifyContent: 'center',
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default Admin;


