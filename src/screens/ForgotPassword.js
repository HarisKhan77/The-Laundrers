import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useRef} from 'react';
import CustomButton from '../components/customButtons/CustomButton.js';
import Logo from '../components/logo/logo.js';
import HeadingAfterLogo from '../components/headingAfterLogo/HeadingAfterLogo.js';
import TextAfterLogo from '../components/TextAfterLogo/TextAfterLogo.js';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';

const ForgotPassword = ({navigation}) => {
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  async function changePassword(data) {
    try {
      const {username} = data;
      if(username == ""){
        Alert.alert("please Enter Email");
      }else{
      await auth().sendPasswordResetEmail(username);
      Alert.alert(
        "Success",
        "Reset Email has sent to your email",
        [
          { text: "OK", onPress: () => navigation.navigate("Login")}
        ]
      );
    };
    } catch (error) {
      Alert.alert(error);
    }
  }

  const returnToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', height: 50}}>
        <TouchableOpacity
          onPress={returnToLogin}
          style={{paddingLeft: 20, width: 50, justifyContent: 'center'}}>
          <Image
            source={require('../assets/icons/back.png')}
            resizeMethod="auto"
            style={{height: 25, width: 25}}
          />
        </TouchableOpacity>
      </View>
      <View style={{padding: 20}}>
        <Logo />
        <HeadingAfterLogo text={'Forgot Password? Change It'} />
        <TextAfterLogo text={'PLease login to continue using our app'} />
        <Formik
          initialValues={{username: ''}}
          onSubmit={values => {
            try{
            changePassword(values);
            }catch(error){
              Alert.alert(error);
            };
          }}>
          {props => (
            <View>
              <View>
                <TextInput
                  ref={textInput1}
                  onChangeText={props.handleChange('username')}
                  value={props.values.username}
                  style={styles._Username_field}
                  placeholderTextColor="#989191"
                  placeholder={'Username'}
                />
                {/* <TextInput ref={textInput2} onChangeText={props.handleChange('password')} value={props.values.password} style={styles._Username_field} placeholderTextColor='#989191' placeholder= {"Password"} secureTextEntry={true}/> */}
              </View>
              <CustomButton onPress={props.handleSubmit} text="Submit" />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  colBlack: {
    color: 'black',
  },
  _Username_field: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#EC7773',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: '5%',
    padding: 10,
    color: 'black',
  },
});

export default ForgotPassword;
