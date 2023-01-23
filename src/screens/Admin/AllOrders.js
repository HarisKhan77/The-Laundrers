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

const AllOrders = () => {

  const [orders, setOrders] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('orders')
      .where('orderStatus','==', 'active')
      .onSnapshot(querySnapshot => {
        const data = [];
        querySnapshot.forEach(doc => {
          data.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setOrders(data);
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
              navigation.navigate('Admin');
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
              Active Orders
            </Text>
          </View>
        </View>
        {orders.length == 0 ? ( 
          <View style={{alignItems:"center", justifyContent:'center', width:"100%"}}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: '500', marginRight:"50%"}}> No avtive Orders</Text>
          </View>):( 
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
              Status
            </Text>
            <Text style={{fontSize: 14, fontWeight: '400', color: 'black', marginLeft:-27}}>
              Total
            </Text>
            <Text
              style={{fontSize: 14, fontWeight: '400', color: 'black'}}></Text>
          </View>

          <View style={{}}>
            <FlatList
              data={orders}
              renderItem={({item}) => (
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
                   <Text style={{color: 'black'}}>{item.userName}</Text>
                   </View>
                   <View style={{width:"22%"}}>
                     <Text style={{color: 'black'}}>{item.orderStatus}</Text>
                   </View>
                     
                   <View style={{width:"20%", marginLeft:17}}>
                    <Text style={{color: 'black'}}>{item.total}</Text>
                   </View>
                   <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ShowOrders', {order: item})
                    }
                    style={{
                      borderWidth: 1,
                      borderColor: '#999',
                      padding:3,
                      borderRadius:3,
                      width:"15%",
                      alignItems:"center",
                      marginLeft:4,
                    }}>
                    <Text style={{color:"black"}}>view</Text>
                  </TouchableOpacity>                 
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
          
        </View>
        ) }
        <View style={{marginTop:20, padding:10}}>
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


export default AllOrders;


