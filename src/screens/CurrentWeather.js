import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

//CurrentWeather component. Returns some JSX code that is turned into javascript under the hood by babel. It is then exported and rendered to the user.
const CurrentWeather = ({ weatherData }) => {
  const { main: { temp, feels_like, temp_max, temp_min }, weather} = weatherData
  const weatherCondition = weather[0]?.main

  return (
    <SafeAreaView style={[styles.wrapper, { backgroundColor: weatherType[weatherCondition]?.backgroundColor }]}>
      <View style={styles.container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color='white'></Feather>
        <Text style={styles.tempStyles}>{`${temp}°`}</Text>
        <Text style={styles.feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText 
          messageOne={`High: ${temp_max}° `} 
          messageTwo={`Low: ${temp_min}°`} 
          containerStyles={styles.highLowWrapper} 
          messageOneStyles={styles.highLow} 
          messageTwoStyles={styles.highLow} 
        />
      </View>
      <RowText 
        messageOne={weather[0]?.description} 
        messageTwo={weatherType[weatherCondition]?.message} 
        containerStyles={styles.bodyWrapper} 
        messageOneStyles={styles.description} 
        messageTwoStyles={styles.message} 
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
})

export default CurrentWeather
