import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState, useContext, useEffect} from 'react';
import CustomButton from '../components/customButtons/CustomButton.js';
import Logo from '../components/logo/logo.js';
import HeadingAfterLogo from '../components/headingAfterLogo/HeadingAfterLogo.js';
import TextAfterLogo from '../components/TextAfterLogo/TextAfterLogo.js';
import AfterLoginButtonText from '../components/AfterLoginButtonText/AfterLoginButtonText.js';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {SignInContext} from '../context/authContext.js';
import {firebase} from '@react-native-firebase/firestore';
export var UserId = '';

const Login = ({navigation}) => {
  
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  const {dispatchSignedIn} = useContext(SignInContext);

  async function loginFunc(data) {
    try {
      const {username, password} = data;
      if (username == '' || password == '') {
        alert('please Enter username and password!');
      } else {
        const user = await auth().signInWithEmailAndPassword(
          username,
          password,
        );
        UserId = user.user.uid;
        if (user) {
          dispatchSignedIn({
            type: 'UPDATE_SIGN_IN',
            payload: {userToken: 'signed-in'},
          });
          if (user.user.uid == '0kRAxKKBcjVmcT7tFzu3Y5APp5r1') {
            navigation.navigate('Admin');
            
          } else if(user.user.uid == "1lmi6at4wrQ574Brtqsf7HabHLq2") {
            navigation.navigate('Rider');
          }else{
            navigation.navigate('Home');
          }
        } else {
        }
      }
    } catch (error) {
      alert(error);
    }
  }
  const logInPress = () => {
    navigation.navigate('Home');
  };
  const signUpPress = () => {
    navigation.navigate('SignUp');
  };
  const forgotPass = () => {
    navigation.navigate('ForgotPassword');
  };
  return (
    <View
      style={{flex: 1, padding: 20, paddingTop: 60, backgroundColor: 'white'}}>
      <Logo />
      <HeadingAfterLogo text={'Hey, Login Now'} />
      <TextAfterLogo text={'PLease login to continue using our app'} />
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={values => {
          try {
            loginFunc(values);
          } catch (error) {
            Alert.alert(error);
          }
        }}>
        {props => (
          <View>
            <TextInput
              ref={textInput1}
              onChangeText={props.handleChange('username')}
              value={props.values.username}
              style={styles._Username_field}
              placeholderTextColor="#989191"
              placeholder={'Username'}
            />
            <TextInput
              ref={textInput2}
              onChangeText={props.handleChange('password')}
              value={props.values.password}
              style={styles._Username_field}
              placeholderTextColor="#989191"
              placeholder={'Password'}
              secureTextEntry={true}
            />
            <CustomButton
              text="Forgot Password?"
              type="Tertiary"
              onPress={forgotPass}
            />
            <TouchableOpacity
              onPress={props.handleSubmit}
              style={[styles.container, styles['container_Primary']]}>
              <Text style={[styles.text, styles['text_Primary']]}>Login</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
              onPress={() => {
                logInPress();
              }}
              style={[styles.container, styles['container_Primary']]}>
              <Text style={[styles.text, styles['text_Primary']]}>Login</Text>
            </TouchableOpacity> */}
          </View>
        )}
      </Formik>
      <AfterLoginButtonText
        onPress={signUpPress}
        firstText={'Don’t have an account?'}
        linkText={'Sign up now'}
      />
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

export default Login;
