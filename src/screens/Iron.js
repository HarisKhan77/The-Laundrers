import { View, Text, SafeAreaView,StyleSheet,TouchableOpacity,Image,FlatList } from 'react-native'
import React from 'react'
import Categories from './categories';
import LaundryItems from './LaundryItems';
import ViewCart from './ViewCart';

import { useNavigation } from '@react-navigation/native';

const laundryItems = [
    {
      image: require('../assets/icons/dress.png'),
      text: 'Dress',
      color: 'white',
      price: 120,
      quantity: 0,
      type: "Iron",
    },
    {
      image: require('../assets/icons/trouser.png'),
      text: 'trouser',
      color: '#F4F4F4',
      price: 150,
      quantity: 0,
      type: "Iron",
    },
    {
      image: require('../assets/icons/outdoor.png'),
      text: 'Outdoor',
      color: 'white',
      price: 160,
      quantity: 0,
      type: "Iron",
    },
    {
      image: require('../assets/icons/suits.png'),
      text: 'suits',
      color: '#F4F4F4',
      price: 170,
      quantity: 0,
      type: "Iron",
    },
    {
      image: require('../assets/icons/shirt.png'),
      text: 'shirt',
      color: 'white',
      price: 180,
      quantity: 0,
      type: "Iron",
    },
  ];
  
const Iron = (props) => {
  const navigation = useNavigation();
    function header() {
        return(
            <View style={{flexDirection: 'row', height: 50, justifyContent:"space-between"}}>
                <TouchableOpacity onPress={()=> props.navigation.openDrawer()} style={{paddingLeft:'6%',width:50, justifyContent:'center'}}>
                    <Image source={require('../assets/images/menu.png')} resizeMethod='auto' 
                    style={{height:18, width:18}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('UserDetail');}} style={{width:50, justifyContent:'center'}}>
                    <Image source={require('../assets/icons/profileSm.png')} resizeMethod='auto' 
                    style={{height:25, width:25}}/>
                </TouchableOpacity>
            </View>
        )
    }

    function categories(){
        return(
            <View style={{flex:1, borderColor: '#F4F4F4',
            borderWidth: 2,borderTopLeftRadius: 25, borderTopRightRadius:25, backgroundColor:'#F2EFEF'}}>
               
               {/* <View style={{flexDirection: 'row',paddingLeft:'6%', paddingTop:5}}>
                <Text style={{color:'black', fontSize:13}}>Today, 15,March,2022</Text>
                
                <TouchableOpacity style={{paddingLeft:160,width:50, justifyContent:'center'}}>
                    <Image source={require('../assets/icons/search.png')} resizeMethod='auto' 
                    style={{height:20, width:20}}/>
                </TouchableOpacity>
                
                </View> */}
                <View>
                    <Text style={{color:'black',fontSize:20, paddingLeft:'6%', fontWeight:'500'}}>What services do you</Text>
                    <Text style={{color:'black',fontSize:20, paddingLeft:'6%', fontWeight:'500'}}>need today</Text>
                   <View style={{height:80}}>
                   <Categories />
                   </View>
                      <View style={{height:150,borderTopLeftRadius: 25, borderTopRightRadius:25, width:"100%"}}>
                      <Image source={require('../assets/images/Iron.png')} resizeMethod='auto'
                       style={{height:'100%', width:'100%',borderTopLeftRadius: 25, borderTopRightRadius:25}}/>
                      </View>
                      <View style={{height:390}}>
                      <LaundryItems laundryItems={laundryItems}/>
                      <ViewCart/>
                      </View>
                    
                </View>
              
            </View>
            
        )
    }
    return (
    <SafeAreaView style={styles.container}>
        {header()}
        {categories()}
        
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",},
    item: {
        backgroundColor: 'white',
        borderColor:'white',
        borderWidth:2,
        borderRadius:5,
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 8,
        height:50,
        width:60,
        justifyContent:'center'
      },
      image: {
       marginLeft:10,
      },
  });

export default Iron