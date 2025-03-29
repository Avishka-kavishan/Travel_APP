import { View, Text, StyleSheet, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import Button from '../../Components/Button'
import SignUp from '../SignUp/SignUp'

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/image/Logo.png")} style={styles.img} />
      <Text style={styles.text}>Welcome to US</Text>
      <Text style={styles.para}>Discover the world with ExploreEase, your all-in-one travel app for seamless and unforgettable journeys—whether it’s a quick getaway, 
        a grand adventure, or a spontaneous road trip!</Text>
        
        <Button lable={'Join Now'} onPress={()=> navigation.navigate(SignUp)} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:"#d9b596",
        flex:1
    },
    img:{
        width:200,
        height:200,
        borderRadius:20,
        resizeMode: 'contain',
        marginTop:100,
    },
    text:{
        fontSize:30,
        fontWeight:"bold",
        marginTop:20
    },
    para:{
        fontSize:15,
        marginTop:40,
        margin:40,
        textAlign:"justify",
        
    },
    button:{

    }
})

export default Welcome