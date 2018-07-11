/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
coordinates = [
  [
    -122.40181,
    37.768249
  ],
  [
    -122.40181,
    37.768249
  ],
  [
    -122.458705,
    37.763935
  ],
  [
    -122.4767259,
    37.7283771
  ],
  [
    -122.4766695,
    37.7283728
  ],
  [
    -122.393775,
    37.768299
  ],
  [
    -122.3922545,
    37.765967
  ],
  [
    -122.47598965,
    37.7266635
  ],
  [
    -122.3897115,
    37.768046
  ],
  [
    -122.476339666667,
    37.727876
  ],
  [
    -122.4494492,
    37.8060998
  ],
]

export default class App extends Component {

  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    markers: [
      {
        key: 1,
        latlng:  {
          longitude: -122.4494492,
          latitude: 37.8060998,
        },
      }
    ],
  }

  render() {
    let markers = []
    coordinates.forEach( ( coord, index) => {
      markers.push({
        key: index,
        latlng: {
          longitude: coord[0],
          latitude: coord[1],
        }
      })
    })

    console.log(markers)

    return (
        <MapView
          style={styles.map}
        >
          {markers.map(marker => (
            <Marker
              coordinate={marker.latlng}
            />
          ))}
        </MapView>
    );
  }
}
