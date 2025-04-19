import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import BackImg from '../../components/BackImg'
import LogoButt from '../../components/LogoButt'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/native'

export type HistoricalScreenProps = NativeStackNavigationProp<ParamListBase, 'Hostorical'>

type Props = {
  navigation: HistoricalScreenProps
}

const Hostorical = ({navigation}:Props) => {
  return (
    <BackImg>
      <View>
        <LogoButt onPress={()=> navigation.navigate('Profile')}/>
      </View>
      <View>
        <Text style={styles.header}>Places</Text>
      </View>
    </BackImg>
  )
}

const styles = StyleSheet.create({
  header:{
    fontSize:30,
    fontWeight:'bold',
    color:'white'
  },
})

export default Hostorical