import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TextCom = ({lable}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.topic}>{lable}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        marginTop:150
    },
    topic:{
        fontSize:30,
        fontWeight:'900'
    },
})
export default TextCom