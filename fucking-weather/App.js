import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start', //flex-start, flex-end, space-between, space-around, center
    alignItems: 'center',
    flexWrap: 'nowrap'
  },
  redView: {
    // flex: 1,
    width: 50,
    height: 50,
    backgroundColor: 'red',
    // alignSelf: 'flex-start'
  },
  yellowView: {
    // flex: 1,
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    // alignSelf: 'flex-end'
  }
});
