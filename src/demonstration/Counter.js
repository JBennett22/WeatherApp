import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
    /* Declare new state variable called count initialized with 0 with the useState hook. If any values used with useState hook are updated, 
        the component will also be updated by React (makes component dynamic). */
    const [count, setCount] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`count: ${count}`}</Text>
            <Button 
                color={'green'} 
                title={'Increse the count'} 
                // Get the value of count and add 1 with setCount
                onPress={() => setCount(count + 1)}
            />
            <Button 
                color={'red'} 
                title={'Decrease the count'} 
                onPress={() =>setCount(count - 1)} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 50
    }
})

export default Counter