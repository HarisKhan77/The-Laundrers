import { View, Text , StyleSheet, Pressable} from 'react-native'
import React from 'react'


const AfterLoginButtonText = ({onPress ,firstText, linkText}) => {
  return (
    <Pressable onPress={onPress} style={styles.conatier}>
      <Text style={styles.OuterText}>{firstText} 
      <Text  style={styles.InerText}> {linkText}</Text></Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
    conatier:{
        width:'100%',
        marginTop:20,
        alignItems:'center',
    },
    OuterText:{
        color:'black',
        fontSize:12,
    },
    InerText:{
        color:'#EC7773',
    },
});

export default AfterLoginButtonText;