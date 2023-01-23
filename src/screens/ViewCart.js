import {View, Text, TouchableOpacity, Modal, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import OrderItem from './OrderItem'
import { firebase } from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export var Total = "";

export default function ViewCart() {
  const navigation = useNavigation(); 

  const SchedualePress = () =>{
    navigation.navigate("Pyament") ;
   }
  const [modalVisible, setModalVisible] = useState(false);
  const {items,} = useSelector(state => state.cartReducer.selectedItems);

  const total = items.map(item => Number(item.price * item.quantity)).reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en-us', {
    style: 'currency',
    currency: 'USD',
  });
  
  Total = totalUSD;

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },

    restaurantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },

    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
      color:"black"
    },
  });

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
          <View
              style={{
                padding: 10,
                borderRadius: 1,
                borderWidth: 1,
                borderColor: '#999',
                flexDirection: 'row',
                width: '100%',
                height: '10%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
                Item
              </Text>
              <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
                Qt.
              </Text>
              <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
                Name
              </Text>
              <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
                Type
              </Text>
              <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
                price
              </Text>
              <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
                Total
              </Text>
            </View>
          <ScrollView scrollEnabled={true}>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text style={{color:"black"}}>Rs: {totalUSD}</Text>
            </View>
            </ScrollView>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "#EC7773",
                  alignItems: "center",
                  padding: 9,
                  borderRadius: 30,
                  width: 280,
                  position: "relative",
                }}
                onPress={() => {
                  // addOrderToFireBase();
                  setModalVisible(false);
                  SchedualePress();
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Schedule Laundry</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  
  return (
    <>
     <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              height: 46,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              backgroundColor: '#EC7773',
            }}
            onPress={() => setModalVisible(true)}
            >
            <Text style={{paddingTop: 10, paddingLeft: 20}}>Your Basket</Text>
            <Text style={{paddingTop: 10, paddingLeft: 180}}>Rs:{totalUSD}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
