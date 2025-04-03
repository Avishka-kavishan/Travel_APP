import { View, Text } from 'react-native'
import React from 'react'
import BackImg from '../../Components/BackImg'
import TextCom from '../../Components/text'
import VectorIcon from '../../Components/VectorIcon'

const Transportation = ({navigation}) => {

    const items = [
        {}
    ]

  return (
    <BackImg>
    <View>
      <TextCom lable={'Transportation'} />
      <VectorIcon/>
    </View>
    <View>

    </View>
    </BackImg>
  )
}

export default Transportation