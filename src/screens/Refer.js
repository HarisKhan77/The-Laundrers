import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
// import icons from '../components/icons'




function Refer({navigation}) {
    return (
        <View style={{ flex: 1, backgroundColor:"white"}}>
            <View style={{ flexDirection: 'row', width: "100%", marginTop:10, padding: 10 }}>
            
            <TouchableOpacity onPress={()=>{navigation.navigate("Home")}} style={{paddingLeft:'6%',width:50, justifyContent:'center'}}>
                    <Image source={require('../assets/icons/back.png')} resizeMethod='auto' 
                    style={{height:25, width:25}}/>
                </TouchableOpacity>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: '20%' }}>
                    <Text style={{color:'black',fontSize:15, fontWeight:'500'}}>
                        REFER & EARN
                    </Text>
                </View>


            </View>
            <View style={{ height: '100%', borderTopLeftRadius: 25, borderTopRightRadius: 25, backgroundColor: '#F4F4F4', padding: 20, marginTop: 80 }}>

                <View style={{ flexDirection: 'row', marginTop: -60, marginLeft: '35%' }}>
                    <Image
                        source={require("../assets/images/profile.png")}
                        style={{}}
                    />

                </View>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ marginLeft: 70, marginTop: 60 }}>
                        <Text style={{ color:'black',fontWeight: '800', fontSize: 18 }}>
                            Refer&Earn a Free Wash
                        </Text>
                    </View>
                    <View style={{ marginLeft: 120, marginTop: 20 }}>
                        <Text style={{color:'black',marginTop: 2, fontSize: 12 }}>lorem im the world </Text>
                        <Text style={{color:'black', marginTop: 2,color:'black', fontSize: 12 }}>lorem im the world  </Text>
                        <Text style={{color:'black', marginTop: 2, fontSize: 12,color:'black', marginLeft: 15 }}>lorem im the  </Text>
                    </View>
                </View>


                <View style={{ marginLeft: 70, marginTop: 60 }}>
                    <Image
                        source={require("../assets/images/refer.png")}
                        style={{
                            height: 55,
                            width: 200,

                        }}
                    />
                </View>

                <View style={{ marginLeft: 150, marginTop: 60 }}>
                    <Image
                        source={require("../assets/images/share.png")}
                        style={{
                            height: 55,
                            width: 55,

                        }}
                    />
                </View>
            </View>
        </View>
    )


}



export default Refer