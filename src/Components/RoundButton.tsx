import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const RoundButton = ({image, onPress}) => {
  return (
    <TouchableOpacity onPress={()=> onPress}>
        <View style={{
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        marginLeft:20,
    }}>
            <Image source={image} style={{
        width:30,height:30}}/>
        </View>
    </TouchableOpacity>
  )
}

export default RoundButton