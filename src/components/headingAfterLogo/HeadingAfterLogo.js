import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const HeadingAfterLogo = ({text}) => {
  return (
    <View>
     <Text style={styles._Heading}> {text} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    _Heading:{
      color:'black',
      paddingTop:"10%",
      fontSize:16,
      fontWeight:"400",
    },
});
export default HeadingAfterLogo