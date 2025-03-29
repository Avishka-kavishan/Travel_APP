import { View, Text, StyleSheet } from 'react-native'
import RoundButton from './RoundButton'
import React from 'react'

const SocialB = () => {
  return (
    <View style={styles.sociaMediaBut}>
        <RoundButton image={require('../assets/image/google.png')} />
        <RoundButton image={require('../assets/image/facebook.png')} />
        <RoundButton image={require('../assets/image/apple.png')} />
    </View>
  )
}

const styles= StyleSheet.create ({
    sociaMediaBut:{
        flexDirection:"row",
        marginTop:20,
        alignItems:'center',
        marginRight:20
    }
})

export default SocialB