import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {firebase} from '@react-native-firebase/firestore';
import {Formik} from 'formik';
import {UserId} from './Login';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const UserDetail = () => {
  const [data, setData] = useState('');
  const [newdata, setNewData] = useState('');
  const [username, setuserName] = useState('');
  const [userContact, setuserContact] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('userdetail')
      .where('UserId', '==', UserId)
      .limit(1)
      .onSnapshot(snapshot => {
        snapshot.docs.map(doc => {
          setData(doc.data());
        });
      });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('userdetail')
      .where('UserId', '==', UserId)
      .get()
      .then(docs => {
        docs.forEach(doc => {
          setNewData(doc.id);
        });
      });
  }, []);

  async function updateData(value) {
    try {
      const {name, contact} = value;
      if(name == "" || contact == ""){
        Alert.alert("Fileds Empty", "Please Enter Name and Contact");
      }else{
        setuserName(name);
        setuserContact(contact);
      const db = firebase.firestore();
      db.collection('userdetail').doc(newdata).update({
        name: name,
        contact: contact,
      });
      };
    } catch (error) {
      alert(error.name, error.message);
    }

    // console.log(user);
  }
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  const [shouldShow, setShouldShow] = useState(true);

  return (
    <View style={{padding: 10}}>
      <View
          style={{
            flexDirection: 'row',
            height: 50,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{width: 50, justifyContent: 'center'}}>
            <Image
              source={require('../assets/icons/back.png')}
              resizeMethod="auto"
              style={{height: 20, width: 22}}
            />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: '500', marginRight:"40%"}}>
              User Details
            </Text>
          </View>
        </View>

      {shouldShow ? (
        <View>
          <ImageBackground style={{padding: 10, backgroundColor: '#F4F4F4'}}>
            <View
              style={{
                borderWidth: 0,
                borderRadius: 100,
                width: 130,
                height: 130,
                alignSelf: 'center',
              }}>
              <Image
                source={require('../assets/icons/profilepic.png')}
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 40,
                  marginBottom: 10,
                }}
              />
            </View>
          </ImageBackground>

          <View style={{marginTop: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '500',
                marginBottom: 5,
              }}>
              Name: {data.name}
            </Text>
            <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
              Contact: {data.contact}
            </Text>
            <TouchableOpacity
              onPress={()=>{ setShouldShow(false);}}
              style={[styles.container, styles['container_Primary']]}>
              <Text style={[styles.text, styles['text_Primary']]}>
                Edit details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Formik
          initialValues={{name: '', contact: ''}}
          onSubmit={values => {
            updateData(values);
            setShouldShow(true);
          }}>
          {props => (
            <View>
              <TextInput
                ref={textInput1}
                onChangeText={props.handleChange('name')}
                value={props.values.name}
                style={styles._Username_field}
                placeholderTextColor="#989191"
                placeholder={'Name'}
              />
              <TextInput
                ref={textInput2}
                onChangeText={props.handleChange('contact')}
                value={props.values.conatct}
                style={styles._Username_field}
                placeholderTextColor="#989191"
                placeholder={'Contact'}
              />
              <TouchableOpacity
                onPress={props.handleSubmit}
                style={[styles.container, styles['container_Primary']]}>
                <Text style={[styles.text, styles['text_Primary']]}>Update</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={()=> {setShouldShow(true);}}
                style={[styles.container, styles['container_Primary']]}>
                <Text style={[styles.text, styles['text_Primary']]}>Cancel</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity onPress={logInPress} style={[styles.container, styles["container_Primary"]]} >
        <Text style={[styles.text, styles["text_Primary"]]}>Login</Text>
        </TouchableOpacity> */}
            </View>
          )}
        </Formik>
      )}
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
export default UserDetail;
