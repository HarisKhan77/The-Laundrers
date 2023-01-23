import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TextAfterLogo = ({text}) => {
  return (
    <View>
      <Text style={styles._text_after}> {text} </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    _text_after:{
      color:'black',
      paddingTop:"4%",
      fontSize:12,
    },
});
export default TextAfterLogo