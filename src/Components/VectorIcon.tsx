import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const VectorIcon = () => {
  return (
    <View style={styles.menu} > <Icon name="menu" size={40} color="black"/> </View>
  )
}

const styles = StyleSheet.create({
    menu:{
        marginTop:-50,
        paddingLeft:30,
        paddingBottom:20,
        marginRight:350
      }
})

export default VectorIcon