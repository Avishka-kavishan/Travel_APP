import { View, Text,Image, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

export type LogoButtProps = {
    onPress: () => void;
}

const LogoButt = ({onPress}: LogoButtProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Image source={require('../assets/Image/Logo.png')} style={styles.logo} />
        </View>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    logo:{
        width:50,
        height:50,
        borderRadius:50
    },
    container:{
        borderRadius:20
    }
})

export default LogoButt