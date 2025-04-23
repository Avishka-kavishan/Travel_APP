import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

type Props = { 
  placeholder: string; 
  keyboardType: 'default' | 'email-address' | 'numeric' | 'phone-pad'; 
  secureTextEntry: boolean; 
  maxLength: number; 
}

const InputField = ({ placeholder, keyboardType , secureTextEntry, maxLength }:Props) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder}
      keyboardType={keyboardType} 
      secureTextEntry={secureTextEntry} 
      style={styles.input}
      placeholderTextColor={"white"} 
      maxLength={maxLength}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      width:380,
      marginTop:20,
    },
    input:{
      backgroundColor:"#C4BFBF",
      borderColor:"black",
      borderWidth:1,
      borderRadius:30,
      padding:15,
      color:"black",
      fontSize:16,
    }
  })

export default InputField