import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const items = [
  {
    id: '1',
    image: require('../assets/icons/laundry.png'),
    text: 'Home',
  },
  {id: '2', image: require('../assets/icons/Iron.png'), text: 'Iron'},
  {id: '3', image: require('../assets/icons/shirt.png'), text: 'Shirts'},
  {id: '4', image: require('../assets/icons/suits.png'), text: 'Suits'},
  {id: '5', image: require('../assets/icons/dress.png'), text: 'Dress'},
  {id: '6', image: require('../assets/icons/trouser.png'), text: 'Trouser'},
  {id: '7', image: require('../assets/icons/outdoor.png'), text: 'OutDoor'},
  {id: '8', image: require('../assets/icons/HomeIron.png'), text: 'HomeIron'},
];

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

export default function categories() {
  const navigation = useNavigation();
  // const [color, setColor] = useState("white");
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item.text);
            }}
            style={{
              backgroundColor: 'white',
              borderColor: "white",
              borderWidth: 2,
              borderRadius: 5,
              padding: 5,
              marginVertical: 5,
              marginHorizontal: 8,
              height: 50,
              width: 60,
              justifyContent: 'center',
            }}>
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
          <Text style={{color: 'black', fontSize: 12, marginLeft: 20}}>
            {item.text}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
