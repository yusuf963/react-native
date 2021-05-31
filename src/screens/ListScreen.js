import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ListScreen =()=>{
    const fruits =[
        {name: 'oranges'},
        {name: 'Banana'},
        {name: 'Mango'},
        {name: 'Grapes'}, 

    ]
    return<View style={style.listStyle}>
        <Text>list of options</Text>
        <FlatList
         data={fruits}
          renderItem={({item,index})=>{
              return <Text key={index}>{item.name}</Text>
        }}
         />
    </View>
}

const style = StyleSheet.create({
    listStyle:{
        fontSize:12,
        color: 'blue'
    }
})


export default ListScreen