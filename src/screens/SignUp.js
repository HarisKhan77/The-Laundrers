import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Logo from '../components/logo/logo';
import HeadingAfterLogo from '../components/headingAfterLogo/HeadingAfterLogo';
import TextAfterLogo from '../components/TextAfterLogo/TextAfterLogo';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';

const SignUp = ({navigation}) => {
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  const textInput3 = useRef(3);
  const textInput4 = useRef(4);

  async function SignUpFunc(values) {
    const {username, password, phone, name} = values;
    try {
      if(username == "" || password == "" || phone == "" || name == ""){
        Alert.alert("Please Fill all the fields");
      }else{
      await auth().createUserWithEmailAndPassword(username, password);
      const db = firebase.firestore();
      db.collection('userdetail').add({
        UserId: auth().currentUser.uid,
        name: name,
        contact: phone,
      });
        Alert.alert(
          "Success",
          "Signup Successfully",
          [
            { text: "OK", onPress: () => navigation.navigate("Login")}
          ]
        );
      console.log('User Account Created');
      };
    } catch (error) {
      if (error.code === 'auth/email-alrady in use') {
        Alert.alert('That email is already in use');
      }
      if (error.code === 'auth/invalid-email in use') {
        Alert.alert('Sorry! the email is inavlid');
      } else {
        Alert.alert(error.code);
      }
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
        <HeadingAfterLogo text={'Hey, Sign Up'} />
        <TextAfterLogo text={'signup to use the features'} />
        <Formik
          initialValues={{username: '', password: '', phone: '', name: ''}}
          onSubmit={values => {
            try {
              SignUpFunc(values);
            } catch (error) {
              Alert.alert(error);
            }
           
          }}>
          {props => (
            <View>
              <TextInput
                ref={textInput1}
                onChangeText={props.handleChange('phone')}
                value={props.values.phone}
                style={styles._Username_field}
                placeholderTextColor="#989191"
                placeholder={'Phone Number'}
              />
              <TextInput
                ref={textInput4}
                onChangeText={props.handleChange('name')}
                value={props.values.name}
                style={styles._Username_field}
                placeholderTextColor="#989191"
                placeholder={'Name'}
              />
              <TextInput
                ref={textInput2}
                onChangeText={props.handleChange('username')}
                value={props.values.username}
                style={styles._Username_field}
                placeholderTextColor="#989191"
                placeholder={'Email'}
              />
              <TextInput
                ref={textInput3}
                onChangeText={props.handleChange('password')}
                value={props.values.password}
                style={styles._Username_field}
                placeholderTextColor="#989191"
                placeholder={'Password'}
                secureTextEntry={true}
              />
              <TouchableOpacity
                onPress={props.handleSubmit}
                style={[styles.container, styles['container_Primary']]}>
                <Text style={[styles.text, styles['text_Primary']]}>
                  SignUP
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  custButton: {
    marginTop: 10,
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
  container: {
    width: '100%',
    paddingVertical: 10,
    marginTop: 11,
    borderRadius: 5,
  },
  container_Tertiary: {},
  container_Primary: {
    alignItems: 'center',
    backgroundColor: '#EC7773',
  },
  text_Primary: {
    color: 'white',
    fontWeight: '500',
  },
  text_Tertiary: {
    color: 'grey',
    fontWeight: '500',
    textAlign: 'right',
    fontSize: 12,
  },
});
export default SignUp;
