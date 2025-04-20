import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/native'
import LogoButt from '../components/LogoButt'
import BackImg from '../components/BackImg'
import Header from '../components/Header'

type MenuProps = NativeStackNavigationProp<ParamListBase,'Menu'>

type Props = {
  navigation: MenuProps
}

const Menu = ({navigation}:Props) => {
  return (
    <BackImg>
      <View style={styles.container}>
      <View style={styles.pButton}>
        <LogoButt onPress={()=> navigation.navigate('Profile')}/>
        <LogoButt onPress={()=> navigation.navigate('Menu')}/>
      </View>

      <View>
          <Header title='Menu' />
      </View>

      <View>
        
      </View>
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
  header:{
    fontSize:30,
    fontWeight:'bold',
    color:'white'
  },
  container:{
    alignItems:'center'
  }
})

export default Menu