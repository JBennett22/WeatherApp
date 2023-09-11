//Root component (App.js) that is entry point for application
import React, { useState, useEffect } from "react"
import { View, ActivityIndicator, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Tabs from "./src/components/Tabs"
import { useGetWeather } from "./src/hooks/useGetWeather"
import ErrorItem from "./src/components/ErrorItem"

const App = () => {
  const [loading, error, weather] = useGetWeather()

  console.log(loading, error, weather)

  // If weather with data exists -> render weather
  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={Styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} color={'blue'} />
      ) : (
        <ErrorItem />
      )}
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
