//Root component (App.js) that is entry point for application
import React, { useState, useEffect } from "react"
import { View, ActivityIndicator, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Tabs from "./src/components/Tabs"
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env';
import { useGetWeather } from "./src/hooks/useGetWeather"

const App = () => {
  const [loading, error, weather] = useGetWeather()

  console.log(loading, error, weather)

  if (loading) {
    return (
      <View style={Styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
