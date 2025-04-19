import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

export type ButtonCProps = {
  title: string;
  onPress: () => void;
}

const ButtonC = ({title, onPress}: ButtonCProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.view}>
            <Text style={styles.text}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    view:{
        paddingHorizontal:10,
        width:150,
        paddingVertical:15,
        borderRadius:50,
        borderColor:"black",
        borderWidth:2,
        backgroundColor:"#2c1d1b",
        marginTop:60
    },
    text:{
        color:"white",
        fontWeight:"bold",
        textAlign:'center',
        fontSize:20
    }
})

export default ButtonC