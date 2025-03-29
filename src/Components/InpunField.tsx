import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const InpunField = ({placeholder, keyboardType = 'default',secureTextEntry=false, maxLength}) => {
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
    width:"90%",
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

export default InpunField