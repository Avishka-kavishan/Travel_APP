import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const BackImg = ({children}) => {
  return (
    <ImageBackground style={styles.img} source={require('../assets/image/BG.png')} resizeMode='cover'>
        <View>{children}</View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    img:{
        flex:1,
        width:"100%",
        height:"100%",
        justifyContent:"center"
    }
})
export default BackImg