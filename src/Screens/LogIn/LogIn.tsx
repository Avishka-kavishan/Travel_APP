import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TextCom from '../../Components/text'
import InpunField from '../../Components/InpunField'
import Button from '../../Components/Button'
import SocialB from '../../Components/SocialB'
import BackImg from '../../Components/BackImg'
import Categary from '../Categary/Categary'

const LogIn = ({navigation}) => {
  return (
    <BackImg>
        <View style={styles.container}>
      <TextCom lable={'Log In'} />

      <InpunField placeholder={"E-mail"} keyboardType={"email"} />
      <InpunField placeholder={'Password'} secureTextEntry={true} />

      <Button lable={'Login'} onPress={() => navigation.navigate(Categary)}/>

      <SocialB/>

    </View>
    </BackImg>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    }
})

export default LogIn