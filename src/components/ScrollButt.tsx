import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export type ScrollButtProps = {
    title: string;
    onPress: () => void;
}

const ScrollButt = ({title,onPress} : ScrollButtProps) => {
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
        width:107,
        paddingVertical:15,
        borderRadius:10,
        backgroundColor:"#0A3B08",
        marginTop:20
    },
    text:{
        color:"white",
        fontWeight:"bold",
        textAlign:'center',
        fontSize:15
    }
})
export default ScrollButt