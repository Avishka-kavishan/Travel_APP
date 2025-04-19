import { View, Text } from 'react-native'
import React from 'react'
import BackImg from '../components/BackImg'
import ButtonC from '../components/ButtonC'

const SignUp = ({navigation}) => {
  return (
    <BackImg>
        <View>
            <ButtonC title={'Sign Up'} onPress={()=> navigation.navigate('Home')} />
        </View>
    </BackImg>
  )
}

export default SignUp