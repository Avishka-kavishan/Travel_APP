import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/native'

export type ProfileProps = NativeStackNavigationProp<ParamListBase,'Profile'>

type Props = {
  navigation: ProfileProps
}

const Profile = ({navigation}: Props) => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile