import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ListScreen =(props)=>{
    console.log(props)
    const fruits =[
        {name: 'oranges', price: 1.99},
        {name: 'Banana', price: 1.55},
        {name: 'Mango', price: 0.99},
        {name: 'Appel', price: 1.50}, 
        {name: 'Carrot', price: 1.99}, 
        {name: 'Pinapple', price: 1.25}, 
        {name: 'onion', price: 1.56}, 
        {name: 'Garlic', price: 1.30}, 
    ]

    return<View >
        <Text>list of options</Text>
        <FlatList
        // horizontal
        showsHorizontalScrollIndicator = {false}
        showsVerticalScrollIndicator = {false}
         keyExtractor={fruits => fruits.name}
         data={fruits}
         renderItem={({item})=>{
            return <Text style={styles.listStyle}>Name: {item.name} - Price: {item.price}</Text>
        }}
         />
    </View>
}

const styles = StyleSheet.create({
    listStyle:{
        marginVertical:50,
        fontSize:12,
        color: 'green'
    }
})


export default ListScreen