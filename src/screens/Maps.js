import {View, Text, useWindowDimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {useState} from 'react';
import RNLocation from 'react-native-location';
import Geocoder from 'react-native-geocoder';

export var UserLocation = '';

const Maps = ({toggleAddress}) => {

  const [state, setState] = useState({
    pickUpCords: {
      latitude: 24.8607,
      longitude: 67.0011,
      latitudeDelta: 0.0522,
      longitudeDelta: 0.0521,
    },
  });
  const [address, setAddress] = useState('');
  const {pickUpCords} = state;

  RNLocation.configure({
    distanceFilter: 5.0,
    desiredAccuracy: {
      ios: 'best',
      android: 'balancedPowerAccuracy',
    },
  });

  RNLocation.requestPermission({
    ios: 'whenInUse',
    android: {
      detail: 'coarse',
    },
  }).then(granted => {
    if (granted) {
        RNLocation.getLatestLocation({timeout: 60000}).then(latestLocation => {
        getAddress(latestLocation.latitude, latestLocation.longitude);
      });
    }
  });

  const getAddress = async (lat, lng) => {
    try {
      await Geocoder.fallbackToGoogle(
        'AIzaSyBCDZOplmoREhj1kzPs3waT2-Gl6MbCMQ0',
      );
      let ret = await Geocoder.geocodePosition({lat, lng});
      let addr = ret[0].formattedAddress;
      setAddress(addr);
      UserLocation = address;
    } catch (error) {
      alert(error);
    }
  };
  return (
    <View>
      <MapView
        style={{width: '100%', height: 580}}
        initialRegion={pickUpCords}
        showsUserLocation={true}
        followsUserLocation={true}
        optimizeWaypoints={true}></MapView>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 70,
          backgroundColor: '#ffff',
        }}>
        <View
          style={{
            flexDirection: 'column',
            width: '70%',
            height: 70,
            backgroundColor: '#fff',
          }}>
          <Text style={{color: 'black'}}> Your Loaction</Text>
          <View
            style={{
              height: 40,
              marginLeft: 5,
              width: '95%',
              borderRadius: 1,
              borderWidth: 2,
              borderColor: '#EEEEEE',
            }}>
            <Text style={{color: 'black'}}>{address}</Text>
          </View>
        </View>
        <View style={{width: '30%', height: 70, backgroundColor: '#fff'}}>
          <TouchableOpacity
            onPress={toggleAddress}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              height: '56%',
              width: '90%',
              backgroundColor: '#EC7773',
            }}>
            <Text style={{color: '#FFFF'}}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Maps;
