import { View, Text, StyleSheet, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
const CustomButton = ({onPress, text, type="Primary"}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, styles[`container_${type}`]]} >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingVertical: 10,
        marginTop:11,
        borderRadius:5,
    },
    container_Tertiary:{ 
    },
    container_Primary:{
      alignItems:'center',
      backgroundColor:'#EC7773',
    },
    text_Primary:{
        color:'white',
        fontWeight:'500',
    },
    text_Tertiary:{
      color:'grey',
      fontWeight:'500',
      textAlign:'right',
      fontSize:12,
  },
});
export default CustomButton