import { View, Text , StyleSheet, TextInput} from 'react-native'
import React from 'react'

const CustomeInputs = ({value, setValue, placeholder ,secureTextEntry}) => {
  return (
    <View>
      <TextInput value={value} onChange={setValue} style={styles._Username_field} placeholderTextColor='#989191' placeholder= {placeholder}  secureTextEntry={secureTextEntry}/>
    </View>
  )
}

const styles = StyleSheet.create({
  root:{ 
    flex:1,
  },
  colBlack:{
    color:'black',
    
  },
  _Username_field:{
    backgroundColor:'white',
    width:'100%',
    borderColor:"#EC7773",
    borderWidth:1,
    borderRadius:5,
    marginTop:'5%',
    padding:10,
    color:'black'
  },
})

export default CustomeInputs