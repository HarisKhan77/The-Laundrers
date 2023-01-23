// import React, {useRef} from 'react'
// import { Dimensions, View, Animated , StyleSheet} from 'react-native'
// import { Portal } from 'react-native-paper'

// const BottomSheet = () => {
//     const bottomSheetHeight = Dimensions.get("window").height * 0.5;
//     const deviceWidth = Dimensions.get("window").width;
//     const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;
//   return (
//     <Portal>
//     <Animated.View style={[styles.root,{height:bottomSheetHeight, bottom: 0}]}>

//     </Animated.View>
//     </Portal>
//   )
// }

// const styles = StyleSheet.create({
//     root:{ 
//         position:'absolute',
//         left:0,
//         right:0,
//         zIndex:100,
//         backgroundColor: '#fff',
//         borderTopLeftRadius: 16,
//         borderTopRightRadius:16,
//         shadowColor: '#000',
//         shadowOffset:{
//             height:-3,
//             width:0,
//         },
//         shadowOpacity: 0.24,
//         shadowRadius: 4,
//         elevation: 3,
//     },
  
//   })

// export default BottomSheet

import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheets from 'reanimated-bottom-sheet';

const BottomSheet = () => {
  return (
    <div>BottomSheet</div>
  )
}

export default BottomSheet