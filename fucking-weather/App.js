import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';

import Weather from './Weather';

const WEATHER_API_KEY = "70c844fdcfeb46b7f41aa7b47278e97e"

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
    id: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log("geo", position)
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        console.log("geo", error)
        this.setState({
          error: error
        })
      })
  }

  _getWeather = (lat, long) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${WEATHER_API_KEY}`)
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log("weather", json)
      if(json.cod !== 200) {
        this.setState({
          error: json
        })
      }
      else {
        let model = {
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true,
          id: json.weather[0].id
        }
        this.setState(model)
        console.log("state", model)
      }
    })
    .catch(error => {
      this.setState({
        error: error
      })
    })
  }

  render() {
    const { isLoaded, error, temperature, name, id } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar />
        {/* <StatusBar hidden={true} barStyle="light-content"/> */}
        {/* https://facebook.github.io/react-native/docs/statusbar */}
        { isLoaded ? 
        <Weather temp={Math.floor(temperature - 273.15)} name={name} id={id}></Weather>
         : 
        <View style={styles.loading}>          
          {error ? <Text style={styles.errorText}>{error.message}</Text> : <Text style={styles.loadingText}>Getting the fucking weather.</Text>}
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
    marginBottom: 24
  },
  errorText: {
    color: 'red',
    marginBottom: 40
  }
});
