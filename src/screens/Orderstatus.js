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
import {useSelector} from 'react-redux';
import OrderItem from './OrderItem';
import {firebase} from '@react-native-firebase/firestore';
import {UserId} from './Login';

function Orderstatus({navigation}) {
  const [data, setData] = useState('');
  const [newdata, setNewData] = useState('');

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('orders')
      .where('orderStatus', '==', 'active')
      .where('userId','==', UserId)
      .limit(1)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setData(documentSnapshot.data());
        });
      });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('orders')
      .where('orderStatus', '==', 'pickedup')
      .where('userId','==', UserId)
      .limit(1)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setNewData(documentSnapshot.data());
        });
      });
  }, []);

  
  return (
    <View style={{flex: 1, backgroundColor: 'white', width:"100%"}}>
      <View style={{flexDirection: 'row', height: 50, width: '100%'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '33%',
          }}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
            Order Status
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{paddingLeft: 100, width: 50, justifyContent: 'center'}}>
          <Image
            source={require('../assets/images/x.png')}
            resizeMethod="auto"
            style={{width: 20}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: '100%',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: '#F4F4F4',
          padding: 15,
        }}>
        <View
          style={{
            marginTop: 20,
            width: '100%',
            height: 180,
            backgroundColor: 'white',
            borderRadius: 4,
            height: 80,
          }}>
          <View style={{flexDirection: 'row', marginTop: 12, marginLeft: 10}}>
            <Image
              source={require('../assets/images/dl.png')}
              style={{
                height: 50,
                width: 50,
              }}
            />
            <View style={{flexDirection: 'column', marginLeft: 20, marginTop:15}}>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 15}}>
               Order Status : {data.orderStatus}{newdata.orderStatus}
              </Text>
            </View>
          </View>
        </View>
        <ScrollView scrollEnabled={true}>
        {data.userId == UserId ? (
          <>
            <View style={styles.modalContainer}>
              <View style={styles.modalCheckoutContainer}>
              <View
              style={{
                padding: 12,
                borderRadius: 1,
                borderWidth: 1,
                borderColor: '#999',
                flexDirection: 'row',
                width: '100%',
                height: '7%',
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
                <ScrollView scrollEnabled= {true}>
                  {Array.from(data.items).map((item, index) => (
                    <OrderItem key={index} item={item} />
                  ))}
                  <View style={styles.subtotalContainer}>

                   <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Name</Text>
                  <Text style={{color: 'black'}}>{data.userName}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Phone</Text>
                  <Text style={{color: 'black'}}>{data.contactNumber}</Text>
                </View>

              <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 70,
                    justifyContent: 'space-between',

                  }}>
                  <Text style={{color: 'black', marginRight:10}}>Address</Text>
                  <View style={{width:"90%"}}>
                     <Text style={{color: 'black'}}>{data.userAddress}</Text> 
                  </View>
                </View>


                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Pickup Date</Text>
                  <Text style={{color: 'black'}}>{data.pickupDate}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Delivery Date</Text>
                  <Text style={{color: 'black'}}>{data.deliveryDate}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Pickup Time</Text>
                  <Text style={{color: 'black'}}>{data.pickUpTime}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Delivery Time</Text>
                  <Text style={{color: 'black'}}>{data.delieveryTime}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Urgent Laundry</Text>
                  <Text style={{color: 'black'}}>RS {data.urgentLaundry}</Text>
                </View>  

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                    borderWidth:1,
                    borderColor:"black",
                    borderRadius:3,
                  }}>
                  <Text style={{color: 'black'}}>Total</Text>
                  <Text style={{color: 'black'}}>RS {data.grandTotal}</Text>
                </View>              
      
                  </View>
                </ScrollView>
              </View>
            </View>
          </>
        ) : (
          <View></View>
        )}
        </ScrollView>
        <ScrollView scrollEnabled={true}>
        {newdata.userId == UserId ? (
          <>
            <View style={styles.modalContainer}>
              <View style={styles.modalCheckoutContainer}>
                <ScrollView scrollEnabled={true}>
                  {Array.from(newdata.items).map((item, index) => (
                    <OrderItem key={index} item={item} />
                  ))}
                  <View style={styles.subtotalContainer}>

                   <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Name</Text>
                  <Text style={{color: 'black'}}>{newdata.userName}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Phone</Text>
                  <Text style={{color: 'black'}}>{newdata.contactNumber}</Text>
                </View>

              <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 70,
                    justifyContent: 'space-between',

                  }}>
                  <Text style={{color: 'black', marginRight:10}}>Address</Text>
                  <View style={{width:"90%"}}>
                     <Text style={{color: 'black'}}> {newdata.userAddress}</Text> 
                  </View>
                </View>


                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Pickup Date</Text>
                  <Text style={{color: 'black'}}>{newdata.pickupDate}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Delivery Date</Text>
                  <Text style={{color: 'black'}}>{newdata.deliveryDate}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Pickup Time</Text>
                  <Text style={{color: 'black'}}>{newdata.pickUpTime}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Delivery Time</Text>
                  <Text style={{color: 'black'}}>{newdata.delieveryTime}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Urgent Laundry</Text>
                  <Text style={{color: 'black'}}>RS {newdata.urgentLaundry}</Text>
                </View>  

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                    borderWidth:1,
                    borderColor:"black",
                    borderRadius:3,
                  }}>
                  <Text style={{color: 'black'}}>Total</Text>
                  <Text style={{color: 'black'}}>RS {newdata.grandTotal}</Text>
                </View>              
      
                  </View>
                </ScrollView>
              </View>
            </View>
          </>
        ) : (
          <Text style={{color: 'black'}}> No Ongoing Order</Text>
        )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    width:"100%",
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

export default Orderstatus;
