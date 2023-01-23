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

const Totalorders = () => {

  const navigation = useNavigation();

  const [activeOrders, setActiveOrders] = useState(0);
  const [activeTotal, setActiveTotal] = useState(0);
  const [pickedUpOrders, setpickedUpOrders] = useState(0);
  const [pickedUpOrdersTotal, setapickedUpOrdersTotal] = useState(0);
  const [completedOrders, setcompletedOrders] = useState(0);
  const [completedOrdersTotal, setcompletedOrdersTotal] = useState(0);
  const [totalOrders, settotalOrders] = useState(0);
  const [totalOrdersAmount, settotalOrdersAmount] = useState(0);


  useEffect(() => {
    const unsubscribe = firebase.firestore()
      .collection('orders')
      .where("orderStatus","==","active")
      .onSnapshot(querySnapshot => {
        let newTotal = 0;
        let allOrders = 0
        querySnapshot.forEach(doc => {
          const data = doc.data();
          newTotal += data.grandTotal;
          allOrders++;
        });
        setActiveTotal(newTotal);
        setActiveOrders(allOrders);
      });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = firebase.firestore()
      .collection('orders')
      .where("orderStatus","==","pickedup")
      .onSnapshot(querySnapshot => {
        let newTotal = 0;
        let allOrders = 0
        querySnapshot.forEach(doc => {
          const data = doc.data();
          newTotal += data.grandTotal;
          allOrders++;
        });
        setapickedUpOrdersTotal(newTotal);
        setpickedUpOrders(allOrders);
      });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = firebase.firestore()
      .collection('orders')
      .where("orderStatus","==","completed")
      .onSnapshot(querySnapshot => {
        let newTotal = 0;
        let allOrders = 0
        querySnapshot.forEach(doc => {
          const data = doc.data();
          newTotal += data.grandTotal;
          allOrders++;
        });
        setcompletedOrdersTotal(newTotal);
        setcompletedOrders(allOrders);
      });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = firebase.firestore()
      .collection('orders')
      .onSnapshot(querySnapshot => {
        let newTotal = 0;
        let allOrders = 0
        querySnapshot.forEach(doc => {
          const data = doc.data();
          newTotal += data.grandTotal;
          allOrders++;
        });
        settotalOrdersAmount(newTotal);
        settotalOrders(allOrders);
      });

    return () => unsubscribe();
  }, []);

 
  // console.log(orders);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
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
            }}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: '500', marginRight:"50%"}}>
              Total Orders
            </Text>
          </View>
        </View>

       
        <View
          style={{
            height: '100%',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: '#F4F4F4',
            padding: 10,
          }}>
          <View
            style={{
              padding: 10,
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
              Name
            </Text>
            <Text style={{marginLeft:10,fontSize: 14, fontWeight: '400', color: 'black'}}>
              Total Orders
            </Text>
            <Text style={{fontSize: 14, fontWeight: '400', color: 'black', marginLeft:-27}}>
              Total Amount
            </Text>
            <Text
              style={{fontSize: 14, fontWeight: '400', color: 'black'}}></Text>
          </View>

          <View style={{ marginTop:10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems:'center',
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#999',
                    width: '100%',
                  }}>

                   <View style={{width:"39%"}}>
                   <Text style={{color: 'black'}}>Active Orders</Text>
                   </View>
                   <View style={{width:"22%"}}>
                     <Text style={{color: 'black'}}>{activeOrders}</Text>
                   </View>
                     
                   <View style={{width:"20%", marginLeft:17}}>
                    <Text style={{color: 'black'}}>{activeTotal}</Text>
                   </View>     
                </View>
          </View>

          <View style={{marginTop:10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems:'center',
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#999',
                    width: '100%',
                  }}>

                   <View style={{width:"39%"}}>
                   <Text style={{color: 'black'}}>Orders PickedUp</Text>
                   </View>
                   <View style={{width:"22%"}}>
                     <Text style={{color: 'black'}}>{pickedUpOrders}</Text>
                   </View>
                     
                   <View style={{width:"20%", marginLeft:17}}>
                    <Text style={{color: 'black'}}>{pickedUpOrdersTotal}</Text>
                   </View>     
                </View>
          </View>

          <View style={{marginTop:10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems:'center',
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#999',
                    width: '100%',
                  }}>

                   <View style={{width:"39%"}}>
                   <Text style={{color: 'black'}}>Completed Orders</Text>
                   </View>
                   <View style={{width:"22%"}}>
                     <Text style={{color: 'black'}}>{completedOrders}</Text>
                   </View>
                     
                   <View style={{width:"20%", marginLeft:17}}>
                    <Text style={{color: 'black'}}>{completedOrdersTotal}</Text>
                   </View>     
                </View>
          </View>

          <View style={{justifyContent:'space-between', flexDirection:'row', marginTop:20, padding:15}}>
          <Text style={{color: 'black'}}>Total Orders</Text>
          <Text style={{color: 'black'}}>{totalOrders}</Text>
          </View>

          <View style={{justifyContent:'space-between', flexDirection:'row', padding:15}}>
          <Text style={{color: 'black'}}>Total Amount</Text>
          <Text style={{color: 'black'}}>{totalOrdersAmount}</Text>
          </View>

          <TouchableOpacity
              onPress={()=>{navigation.goBack()}}
              style={[styles.container, styles['container_Primary']]}>
              <Text style={[styles.text, styles['text_Primary']]}>Back to Admin</Text>
            </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    custButton: {
      marginTop: 10,
    },
    _Username_field: {
      backgroundColor: 'white',
      width: '100%',
      borderColor: '#EC7773',
      borderWidth: 1,
      borderRadius: 5,
      marginTop: '5%',
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

export default Totalorders;


