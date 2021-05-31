import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const ComponentScreen =()=>{
    const test = <Text style={styles.secondText}>its text tag using variable</Text>
    const msg = 'hi, it great seeing you'
    return <View>
        <Text style={styles.testStyle}>this is a compeonent screen </Text>
        <Text style={styles.secondText}>Hi, its another test tag</Text>
        {test}
        <Text>{msg}</Text>
        </View>
}

const styles = StyleSheet.create({
    testStyle:{
        fontFamily:'sans-serif',
        fontSize: 50
    },
    secondText:{
        fontFamily: 'helvetica',
        fontSize: 20,
        color: 'red'
    }
})

export default ComponentScreen