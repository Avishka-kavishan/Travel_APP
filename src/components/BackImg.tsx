import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const BackImg: React.FC<{children : React.ReactNode}> = ({children}) => {
  return (
    <ImageBackground source={require('../assets/Image/bg.png')} style={styles.background}>
        <View style={styles.overlay}>{children}</View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      flex: 1,
      alignItems: 'center',
    },
  });

export default BackImg