import { View, Text , StyleSheet,Image} from 'react-native'
import React, {useState,useEffect}from 'react'
import icons from '../components/icons'




function Accountinfo(){
    return(
        <View style={{flex:1, backgroundColor:"white"}}>
            <View style={{flexDirection:'row' ,height:200,width:"100%"}}>
            <View style={{justifyContent:'center',marginTop:-150}}>
                    <Image
                    source={icons.nearby}
                    style={{
                        height:30,
                        width:30
                    }}
                    />
                    
                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginLeft:'30%',marginTop:-150}}>
                    <Text>
                        Accountinfo
                    </Text>
                </View>
                
                
        </View>
        <View style={{borderWidth:1,height:'100%',borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'white',padding:20}}>
      
        <View style={{flexDirection:'row',marginTop:-50,marginLeft:'40%'}}>
        <Image
                    source={icons.nearby}
                    style={{
                        height:55,
                        width:55,
                        
                    }}
                    />    
                    
        </View>
        <View style={{flexDirection:'column'}}>
                     <View style={{marginLeft:120}}>
                        <Text style={{fontWeight:'600',fontSize:15}}>
                            CONFORMED
                        </Text>
                        </View> 
                        <View style={{marginLeft:100}}>
                        <Text style={{marginTop:2}}>KARACHI,PAKISTAN</Text>
                        </View>
                        </View>   

            <View>
            </View>
        </View>     
        </View>
    )
    

}



export default Accountinfo