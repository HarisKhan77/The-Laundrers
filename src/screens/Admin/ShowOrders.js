import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import UpdateOrderStatus from './UpdateOrderStatus';
import OrderItem from './OrderItem';
import {useNavigation} from '@react-navigation/native';

const ShowOrders = ({route}) => {
  const navigation = useNavigation();
  const {order} = route.params;

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{width: 50, justifyContent: 'center'}}>
            <Image
              source={require('../assets/icons/back.png')}
              resizeMethod="auto"
              style={{height: 20, width: 22}}
            />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '30%',
            }}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
              Orders
            </Text>
          </View>
        </View>

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
            <ScrollView scrollEnabled={true} style={{marginBottom: '3%'}}>
              {order.items.map((item, index) => (
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
                  <Text style={{color: 'black'}}>{order.userName}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Phone</Text>
                  <Text style={{color: 'black'}}>{order.contactNumber}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 70,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black', marginRight: 10}}>Address</Text>
                  <View style={{width: '90%'}}>
                    <Text style={{color: 'black'}}>RS {order.userAddress}</Text>
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
                  <Text style={{color: 'black'}}>{order.pickupDate}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Delivery Date</Text>
                  <Text style={{color: 'black'}}>{order.deliveryDate}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Pickup Time</Text>
                  <Text style={{color: 'black'}}>{order.pickUpTime}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Delivery Time</Text>
                  <Text style={{color: 'black'}}>{order.delieveryTime}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    height: 38,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>Total</Text>
                  <Text style={{color: 'black'}}>RS {order.grandTotal}</Text>
                </View>

                <UpdateOrderStatus
                  orderId={order.id}
                  orderStatus={order.orderStatus}
                />
                <View style={{marginTop: 20,}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}
                    style={[styles.container, styles['container_Primary']]}>
                    <Text style={[styles.text, styles['text_Primary']]}>
                      Go Back
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
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
    marginBottom: 30,
    width: '100%',
  },

  subtotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
    color: 'black',
  },
  custButton: {
    marginTop: 10,
  },
  _Username_field: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#EC7773',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: '10%',
    padding: 10,
    color: 'black',
  },
  container: {
    width: '100%',
    paddingVertical: 10,
    marginTop: 11,
    borderRadius: 5,
  },
  container_Primary: {
    alignItems: 'center',
    backgroundColor: '#EC7773',
  },
  text_Primary: {
    color: 'white',
    fontWeight: '500',
  },
  text_Tertiary: {
    color: 'grey',
    fontWeight: '500',
    textAlign: 'right',
    fontSize: 12,
  },
});

export default ShowOrders;
