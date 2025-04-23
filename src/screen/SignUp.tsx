import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import BackImg from '../components/BackImg'
import ButtonC from '../components/ButtonC'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/native'
import Header from '../components/Header'
import InputField from '../components/InputField'

type SignUpNavigationProp = NativeStackNavigationProp<ParamListBase,'SignUp'>

type Props = {
    navigation: SignUpNavigationProp
}
    
const SignUp = ({navigation}: Props) => {
  return (
    <BackImg>
        <View style={styles.container}>

          <Header title='Sign Up' />
          <View style={{marginTop:40}}>
          <Image source={require("../assets/Image/Logo.png")} style={styles.img} />
          </View>

          <InputField placeholder="User Name" keyboardType="default" secureTextEntry={false} maxLength={20} />
          <InputField placeholder="Email" keyboardType="email-address" secureTextEntry={false} maxLength={40} />
          <InputField placeholder="Password" keyboardType="default" secureTextEntry={true} maxLength={20} />

          <View>
            <ButtonC title={'Sign Up'} onPress={()=> navigation.navigate('HomeTab')} />
          </View>
        </View>
    </BackImg>
  )
}

const styles = StyleSheet.create({
  container:{
      alignItems:"center",
      marginTop:50
  },
  text:{
      textAlign:"center",
      fontWeight:"bold",
      fontSize:30,
      paddingBottom:20
  },
  img:{
      width:200,
      height:200,
      borderRadius:500,
      resizeMode: 'contain',
  },
  social:{
      textAlign:'center',
      marginTop:10,
      fontSize:15,
      fontWeight:'500',
  },
  login:{
      color:"black",
      textDecorationLine: 'underline'
  }
})

export default SignUp