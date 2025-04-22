import { View, Text } from 'react-native'
import React from 'react'
import BackImg from '../components/BackImg'
import ButtonC from '../components/ButtonC'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/native'

type SignUpNavigationProp = NativeStackNavigationProp<ParamListBase,'SignUp'>

type Props = {
    navigation: SignUpNavigationProp
}
    
const SignUp = ({navigation}: Props) => {
  return (
    <BackImg>
        <View>
            <ButtonC title={'Sign Up'} onPress={()=> navigation.navigate('HomeTab')} />
        </View>
    </BackImg>
  )
}

export default SignUp