import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {firebase} from '@react-native-firebase/firestore';
import {Picker} from '@react-native-picker/picker';

const UpdateOrderStatus = ({orderId, orderStatus}) => {
  const [status, setStatus] = useState(orderStatus);

  const updateStatus = () => {
    firebase.firestore().collection('orders').doc(orderId).update({
      orderStatus: status,
    });
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black'}}>Change Status:</Text>
        <View
          style={{
            width: '40%',
            borderWidth: 1,
            borderColor: '#999',
            borderRadius: 1,
          }}>
          <Picker
            style={{color: 'black', width: '100%', padding: 0, margin: 0}}
            mode={'dropdown'}
            dropdownIconColor={'black'}
            dropdownIconRippleColor={'black'}
            selectedValue={status}
            onValueChange={itemValue => setStatus(itemValue)}>
            <Picker.Item label="active" value="active" />
            <Picker.Item label="pickedup" value="pickedup" />
            <Picker.Item label="completed" value="completed" />
          </Picker>
        </View>
        <TouchableOpacity onPress={() => {
          updateStatus();
          Alert.alert("Status","Status Updated");
        }} style={styles.container}>
          <Text style={styles.text}>Save Status</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "25%",
    paddingVertical: 10,
    marginTop: 11,
    borderRadius: 5,
    backgroundColor: '#EC7773',
    justifyContent:"center",
    alignItems:"center",
  },
  text: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'right',
    fontSize: 12,
  },
});

export default UpdateOrderStatus;
