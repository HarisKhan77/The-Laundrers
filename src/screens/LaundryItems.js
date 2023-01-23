import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 8,
    height: 50,
    width: 60,
    justifyContent: 'center',
  },
  image: {
    marginLeft: 10,
  },
});
export var isHomeIron = false;

export default function LaundryItems({laundryItems}) {
  // const [homeIron, setHomeIron] = useState(false);
  const dispatch = useDispatch();
  var selectItem = (item, checkboxValue) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: {...item, checkboxValue: checkboxValue},
    });

  const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

  const isItemsInCart = (laundryItem, cartItems) => {
    Boolean(cartItems.find(item => item.text == laundryItem.text));
  };

  const [quantity, setQuantity] = useState(0);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {laundryItems.map((laundryItem, index) => (
        <View style={{flexDirection: 'row'}} key={index}>
          <View
            style={{
              width: '100%',
              height: 70,
              backgroundColor: laundryItem.color,
              flexDirection: 'row',
            }}>
            <BouncyCheckbox
              style={{marginLeft: 10}}
              iconStyle={{borderColor: 'grey', borderRadius: 0}}
              fillColor="#EC7773"
              size={20}
              onPress={checkboxValue => selectItem(laundryItem, checkboxValue)}
              isChecked={isItemsInCart(laundryItem, cartItems)}
            />
            <View
              style={{
                marginTop: 10,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                margin: 6,
                backgroundColor: 'white',
                borderColor: 'white',
                borderWidth: 2,
                borderRadius: 5,
                height: 45,
                width: 45,
                justifyContent: 'center',
              }}>
              <Image source={laundryItem.image} style={styles.image} />
            </View>

            <View style={{flexDirection: 'column', width: 140}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 10,
                  marginLeft: 20,
                  marginTop: 20,
                  fontWeight: '500',
                  fontSize: 14,
                }}>
                {laundryItem.text}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 5,
                  marginLeft: 20,
                  marginTop: 3,
                  fontWeight: '400',
                  fontSize: 14,
                }}>
                Price: {laundryItem.price}
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  if (index == index) {
                    setQuantity(quantity + 1);
                    laundryItem.quantity = quantity; 
                  }      
                }}
                style={{
                  justifyContent: 'center',
                  marginTop: 20,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  margin: 7,
                  backgroundColor: 'white',
                  borderColor: 'white',
                  borderWidth: 2,
                  borderRadius: 5,
                  height: 30,
                  width: 30,
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'black', fontSize: 20, marginLeft: 8}}>
                  +
                </Text>
              </TouchableOpacity>
              <View>
                <Text style={{color: 'black', fontSize: 10, marginTop: 30}}>
                  {laundryItem.quantity}
                </Text>
              </View>
              <TouchableOpacity
                 onPress={() => {
                  if (index == index) {
                    if (quantity > 0) {
                      setQuantity(quantity - 1);
                      laundryItem.quantity = quantity;
                    }  
                  }   
                }}
                style={{
                  justifyContent: 'center',
                  marginTop: 20,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  margin: 7,
                  backgroundColor: 'white',
                  borderColor: 'white',
                  borderWidth: 2,
                  borderRadius: 5,
                  height: 30,
                  width: 30,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 20,
                    marginLeft: 10,
                    fontWeight: '500',
                  }}>
                  -
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
