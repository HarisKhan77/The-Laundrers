import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {firebase} from '@react-native-firebase/firestore';
import OrderItem from './OrderItem';
import { UserId } from './Login';



const OrdersFromDataBase = () => {
const [data, setData] = useState("");
const [order, setOrder] = useState("");

useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
    .collection("orders")
    .onSnapshot((snapshot) => {
        snapshot.docs.map((doc)=>{
            setData(doc.data());
        });
    });
    return () => unsubscribe();
} ,[]);

const getData =() =>{
    console.log(data);
    setOrder(data.items);
}
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          getData();
        }}>
        <Text style={{color: 'black'}}>OrdersFromDataBase</Text>
      </TouchableOpacity>
      { data.orderStatus == "active" || data.orderStatus == "pickedup"  && data.userID == UserId ? ( <>
          <View style={styles.modalContainer}>
            <View style={styles.modalCheckoutContainer}>
              <ScrollView scrollEnabled={true}>
                {Array.from(order).map((item, index) => (
                  <OrderItem key={index} item={item} />
                ))}
                <View style={styles.subtotalContainer}>
                  <View
                    style={{
                      borderRadius: 7,
                      width: '100%',
                    }}>
                    <View
                      style={{flexDirection: 'row', padding: 10, height: 48}}>
                      <Text style={{color: 'black'}}>Total</Text>
                      <Text style={{color: 'black', marginLeft: 190}}>
                        RS {data.total}
                      </Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </>) : (<Text style={{color:"black"}}> No Ongoing Order</Text>
       )}
    </View>
  );
};

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
    },
  
    modalCheckoutContainer: {
      backgroundColor: 'white',
      padding: 16,
      height: 700,
    },
  
    restaurantName: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 10,
    },
  
    subtotalContainer: {
      justifyContent: 'space-between',
      marginTop: 15,
    },
  
    subtotalText: {
      textAlign: 'left',
      fontWeight: '600',
      fontSize: 15,
      marginBottom: 10,
      color: 'black',
    },
  });
  
export default OrdersFromDataBase;
