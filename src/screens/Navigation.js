import { View, Text , SafeAreaView, StyleSheet} from 'react-native'
import React,{ useContext} from 'react'
import AppStack from '../screens/AppStack'
import { SignInContext } from '../context/authContext'

const Navigation = () => {
  const {signedIn,} = useContext(SignInContext);
  return (
    <SafeAreaView style={styles.root}>
      {/* {
        signedIn.userToken !== 'signed-in'?(
          <AuthStack />
        ):(
          <> 
          <AppStack />
          
          </>
        )
      } */}
      <AppStack />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    root:{ 
      flex:1,
      backgroundColor:"white",
    },
  
  })

export default Navigation