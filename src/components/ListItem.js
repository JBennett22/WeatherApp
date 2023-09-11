import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons'
import { weatherType } from "../utilities/weatherType"
// import moment from 'moment'

//Component for item to be rendered
const ListItem = (props) => {
    const { dt_txt, min, max, condition, dateTextWrapper } = props
    const { item, temp, date } = styles
    return (
        <View style={item}>
            <Feather name={weatherType[condition].icon} size={50} color={'white'} />
            {/* <View style={dateTextWrapper}> */}
                <Text style={date}>{dt_txt}</Text>
                <Text style={date}>{dt_txt}</Text>
            {/* </View> */}
            <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    // dateTextWrapper: {
    //     flexDirection: 'column'
    // }
})

export default ListItem
