import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BackImg from '../components/BackImg'
import LogoButt from '../components/LogoButt'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/native'
import Header from '../components/Header'

type TransportPros = NativeStackNavigationProp<ParamListBase,'Transport'>

type Props = {
  navigation: TransportPros
}

const Transport = ({navigation}:Props) => {
  return (
    <BackImg>
      <View style={styles.pButton}>
        <LogoButt onPress={() => navigation.navigate('Home')} />
        <LogoButt onPress={() => navigation.navigate('Home')} />
      </View>

      <View>
        <Header title='Transport' />
      </View>
    </BackImg>
  )
}
const styles = StyleSheet.create({
  pButton:{
    flexDirection:'row',
    gap:250,
    alignItems:'center',
    marginTop:20,
  },
})

export default Transport