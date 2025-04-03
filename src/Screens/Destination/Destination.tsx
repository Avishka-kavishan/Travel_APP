import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import BackImg from '../../Components/BackImg'
import TextCom from '../../Components/text'
import VectorIcon from '../../Components/VectorIcon'

const Destination = ({navigation}) => {
  return (
    <BackImg>
    <View style={styles.container}>
      <VectorIcon/>
      <TextCom lable={'Destination'} />
    </View>
    
    </BackImg>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        marginTop:-320
    },
})

export default Destination