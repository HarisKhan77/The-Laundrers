import { View, Text, Image,  } from 'react-native'
import React from 'react'

export default function OrderItem({item}) {
    const {text ,price ,image, quantity, type} = item;
  return (
    <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#999",
    }}
    > 
    <Image style={{width:26, height:26}} source={image}/>
    <Text style={{ fontWeight: "600", fontSize: 14, color:"black" }}>{quantity}</Text>
    <Text style={{ fontWeight: "600", fontSize: 14, color:"black" }}>{text}</Text>
    <Text style={{ fontWeight: "600", fontSize: 14, color:"black" }}>{type}</Text>
    <Text style={{ opacity: 0.7, fontSize: 14, color:"black"}}>{price }</Text>
    <Text style={{ fontWeight: "600", fontSize: 14, color:"black" }}>{price * quantity}</Text>
  </View>
  )
}