import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';

import Weather from './Weather';

export default class App extends Component {
  state = {
    isLoaded: true
  }
  render() {
    const { isLoaded } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar />
        {/* <StatusBar hidden={true} barStyle="light-content"/> */}
        {/* https://facebook.github.io/react-native/docs/statusbar */}
        { isLoaded ? 
        <Weather ></Weather>
         : 
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the fucking weather.</Text>
        </View>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: "flex-end",
    // paddingRight: 25,
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  }
});
