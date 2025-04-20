import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export type HeaderProps ={
    title:string;
}
const Header = ({title}:HeaderProps) => {
  return (
    <View>
        <Text style={styles.header}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        fontSize:30,
        fontWeight:'bold',
        color:'white'
      },
})

export default Header