// import {View, Text , ScrollView, FlatList, StyleSheet} from 'react-native';
// import React from 'react';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';


// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&types=establishment&location=37.76999%2C-122.44696&radius=500&key=AIzaSyCW4ymxTMqm7D8Sh2iTNPkMnnbA-Bbnlwc',
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

// // searchBox.addListener("places_changed", () => {
// //     const places = searchBox.getPlaces();
  
// //     if (places.length == 0) {
// //       return;
// //     }
  
// //     // Clear out the old markers.
// //     markers.forEach((marker) => {
// //       marker.setMap(null);
// //     });
// //     markers = [];
  
// //     // For each place, get the icon, name and location.
// //     const bounds = new google.maps.LatLngBounds();
  
// //     places.forEach((place) => {
// //       if (!place.geometry || !place.geometry.location) {
// //         console.log("Returned place contains no geometry");
// //         return;
// //       }
  
// //       const icon = {
// //         url: place.icon,
// //         size: new google.maps.Size(71, 71),
// //         origin: new google.maps.Point(0, 0),
// //         anchor: new google.maps.Point(17, 34),
// //         scaledSize: new google.maps.Size(25, 25),
// //       };
  
// //       // Create a marker for each place.
// //       markers.push(
// //         new google.maps.Marker({
// //           map,
// //           icon,
// //           title: place.name,
// //           position: place.geometry.location,
// //         })
// //       );
// //       if (place.geometry.viewport) {
// //         // Only geocodes have viewport.
// //         bounds.union(place.geometry.viewport);
// //       } else {
// //         bounds.extend(place.geometry.location);
// //       }
// //     });
// //     map.fitBounds(bounds);
// //   });
  

// const ChooseLocation = () => {
//   return (
//     <View style={{flex:1, height:"100%" , width:"100%"}}>
//         <Text style={{color: "black"}}>Haris</Text>
        
//         <GooglePlacesAutocomplete 
//         placeholder="Search"
//         onPress={(data, details) => {
//           // 'details' is provided when fetchDetails = true
//           console.log(data, details);
//         }}
//         query={{
//           key: 'AIzaSyCIE5HMX-x-ItTRSY1FwkcXm7HE05jfRRs',
//           language: 'en',
//         }}
//         fetchDetails={true}
//       />
//        <Text style={{color: "black"}}>Haris</Text>
//     </View>
    
//   );
// };

// export default ChooseLocation;
