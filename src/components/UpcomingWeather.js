import React from "react"
import { SafeAreaView, StyleSheet, Text } from "react-native"

const UpcomingWeather = () => {
    return (
        <SafeAreaView styles={styles.container}>
            <Text>Upcoming Weather</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default UpcomingWeather