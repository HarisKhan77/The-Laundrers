import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const logo = () => {
  return (
    <View>
    <Text style={styles._TheLaundrers}>The Laundrers</Text>
    </View>
  )
}

const styles = StyleSheet.create({
     _TheLaundrers:{
        fontFamily: "Pacifico",
        fontWeight: "400",
        fontSize:30,
        color:"rgba(236, 119, 115, 1)",
    },
});

export default logo