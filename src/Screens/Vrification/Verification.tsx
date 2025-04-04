import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'
import Button from '../../Components/Button'
import SocialB from '../../Components/SocialB'
import PasswordE from '../PasswordEnter/PasswordE'
import BackImg from '../../Components/BackImg'

const Verification = ({navigation}) => {
  return (
    <BackImg>
    <View style={styles.container}>
    <Image source={require("../../assets/image/Logo.jpg")} style={styles.img} />
      
      <Text style={styles.topic}>Verification Code</Text>
      <Text style={styles.title}>Please enter a four digit number</Text>

      <View style={styles.view}>
        <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
      </View>

      <View style={styles.btt}>
        <Button lable={"Conform"} onPress={() => navigation.navigate(PasswordE)} />
      </View>

      <SocialB/>


    </View>
    </BackImg>
  )
}

const styles =  StyleSheet.create({
    container:{
        alignItems:"center",
    },
    title:{
        fontSize:15,
        fontWeight:'400',
        marginTop:20
    },
    topic:{
        fontSize:30,
        fontWeight:'900'
    },
    input:{
        backgroundColor:"#C4BFBF",
        borderColor:"black",
        borderWidth:1,
        borderRadius:10,
        padding:15,
        color:"black",
        fontSize:16,
        width:"13%",
        height:50,
        alignItems:"center",
        
    },
    view:{
        justifyContent:"center",
        marginTop:20,
        flexDirection:"row",
        gap:20
    },
    btt:{
        alignItems:"center"
    },
    img:{
      width:200,
      height:200,
      borderRadius:500,
      resizeMode: 'contain',
      marginBottom:50,
      marginTop:-40,
  },
})

export default Verification