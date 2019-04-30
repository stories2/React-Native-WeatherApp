import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from 'prop-types'

// https://openweathermap.org/weather-conditions
const weatherCases = {
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subTitle: "Actually outside of the house.",
        icon: "ios-thunderstorm"
    },
    Drizzle: {
        colors: ["#B9F7FE", "#66A6FF"],
        title: "Drizzle",
        subTitle: "Is like rain, but gay.",
        icon: "ios-rainy-outline"
    },
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subTitle: "For more info look outside.",
        icon: "ios-rainy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subTitle: "Do you want to build a snowman? Fuck no.",
        icon: "ios-snow"
    },
    Atmosphere: {
        colors: ["#91FE91", "#8B3CAC"],
        title: "Atmosphere",
        subTitle: "ETC.",
        icon: "ios-cloud-outline"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny as fuck",
        subTitle: "Go get your ass burnt.",
        icon: "ios-sunny"
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subTitle: "I know, fucking boring.",
        icon: "ios-cloudy"
    }
}

export default class Weather extends Component {

    static propTypes = {
        temp: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }

  render() {
    return (
        <WeatherStateless temp={this.props.temp} name={this.props.name}></WeatherStateless>
    );
  }
}

function WeatherStateless({temp, name}) {
  return (
    <LinearGradient colors={weatherCases[name] ? weatherCases[name].colors : weatherCases.Atmosphere.colors } style={styles.container}>
      <View style={styles.upper}>
        <Ionicons color="white" size={144} name={weatherCases[name] ? weatherCases[name].icon : weatherCases.Atmosphere.icon} />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{ weatherCases[name] ? weatherCases[name].title : name }</Text>
        <Text style={styles.subTitle}>{ weatherCases[name] ? weatherCases[name].subTitle : weatherCases.Atmosphere.subTitle }</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    fontSize: 38,
    color: "white",
    marginTop: 10
  },

  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subTitle: {
    fontSize: 24,
    color: "white",
    marginBottom: 24
  }
});
