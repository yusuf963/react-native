import React from 'react'
import {Text, StyleSheet} from 'react-native'

const ComponentScreen =()=>{
    return <Text style={styles.testStyle}>this is a compeonent screen </Text>
}

const styles = StyleSheet.create({
    testStyle:{
        fontSize: 50
    }
})

export default ComponentScreen