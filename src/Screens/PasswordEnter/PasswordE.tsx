import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TextCom from '../../Components/text'

const PasswordE = ({navigation}) => {
  return (
    <View>
      <TextCom lable={'Create a Password'} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    Mtext:{
        textAlign:"center",
        fontWeight:'800',
    }
})

export default PasswordE