import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import InpunField from '../../Components/InpunField'
import Button from '../../Components/Button'
import RoundButton from '../../Components/RoundButton'
import Verification from '../Vrification/Verification'
import SocialB from '../../Components/SocialB'
import LogIn from '../LogIn/LogIn'
import BackImg from '../../Components/BackImg'

const SignUp = ({navigation}) => {
  return (
    <BackImg>
    <View style={styles.container}>
        <Text style={styles.text}>SignUp</Text>
        <Image source={require("../../assets/image/Logo.png")} style={styles.img} />

        <InpunField placeholder={'User Name' } keyboardType={'User Name'}/>
        <InpunField placeholder={'User Email' } keyboardType={'User email'}/>
        <InpunField placeholder={'Tel-No' } keyboardType="numeric" maxLength={10}/>

        <Text style={styles.social}>You have an account <Text style={styles.login} onPress={()=> navigation.navigate(LogIn)}>LogIn</Text> </Text>

        <Button lable={'Register'} onPress={()=> navigation.navigate(Verification)} />

        <Text style={styles.social}>Or Via Social Media Account</Text>
        
        <SocialB/>
        
    </View>
    </BackImg>
  )
}
const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    text:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:20,
    },
    img:{
        width:200,
        height:200,
        borderRadius:20,
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