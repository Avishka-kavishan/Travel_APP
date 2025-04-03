import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import BackImg from '../../Components/BackImg'
import TextCom from '../../Components/text'

const Destination = ({navigation}) => {
  return (
    <BackImg>
    <View style={styles.container}>
      <TextCom lable={"Destination"} />
    </View>
    <ScrollView>
        
    </ScrollView>
    </BackImg>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        marginTop:-500,
    },
})

export default Destination