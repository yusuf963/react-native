import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  console.log(props)
  return <View>
   <Text style={styles.text}>HomeScreen, Hi there</Text>
   <Button
   onPress={()=> navigation.navigate('List')}
    title="Go to list" />
    <TouchableOpacity 
       onPress={()=> navigation.navigate('Components')}>
      <Text>Go to Component Screen</Text>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
