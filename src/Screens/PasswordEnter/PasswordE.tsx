import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TextCom from '../../Components/text'
import InpunField from '../../Components/InpunField'
import Button from '../../Components/Button'
import SocialB from '../../Components/SocialB'
import BackImg from '../../Components/BackImg'
import LogIn from '../LogIn/LogIn'

const PasswordE = ({navigation}) => {
  return (
    <BackImg>
    <View style={styles.container}>
      <TextCom lable={'Create a Password'} />

      <InpunField placeholder={"E-mail"} keyboardType={'email'}  />
      <InpunField placeholder={"Password"} keyboardType={'password'} secureTextEntry={true}  />
      <InpunField placeholder={"Re-Enter Password"} keyboardType={'email'} secureTextEntry={true} />

      <Button lable={"Next"} onPress={() => navigation.navigate(LogIn)}/>

      <SocialB/>

    </View>
    </BackImg>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    Mtext:{
        textAlign:"center",
        fontWeight:'800',
    }
})

export default PasswordE