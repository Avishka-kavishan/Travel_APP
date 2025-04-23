import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BackImg from '../components/BackImg'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/native'
import LogoButt from '../components/LogoButt'
import Header from '../components/Header'

type AccommodationProps = NativeStackNavigationProp<ParamListBase,'Accommodation'>

type Props ={
  navigation:AccommodationProps
}


const Accommodation = ({navigation}:Props) => {
  return (
    <BackImg>
      <View style={styles.pButton}>
        <LogoButt onPress={()=> navigation.navigate('Profile')}/>
        <LogoButt onPress={()=> navigation.navigate('Setting')}/>
      </View>

      <View>
        <Header title="Accommodation" />
      </View>
      
    </BackImg>
  )
}

const styles = StyleSheet.create ({
  pButton:{
    flexDirection:'row',
    gap:250,
    alignItems:'center',
    marginTop:20,
  },
})

export default Accommodation