import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export type Props = {
    name : string;
    onPress: () => void;
}

const MenuTextB = ({name,onPress}:Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text>{name}</Text>
    </TouchableOpacity>
  )
}

export default MenuTextB