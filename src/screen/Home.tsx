import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BackImg from '../components/BackImg'
import { ScrollView } from 'react-native-gesture-handler'
import ScrollButt from '../components/ScrollButt'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/native'

type HomeScreenNavigationProp = NativeStackNavigationProp<ParamListBase, 'Home'>

type Props = {
  navigation: HomeScreenNavigationProp
}


const Home = ({navigation}:Props) => {
  return (
    <BackImg>
      <View>
        <Text style={styles.header}>Places</Text>
      </View>

      <ScrollView style={styles.scrool}>
        <View style={styles.scrool}>
        <ScrollButt title='Popular' onPress={() => navigation.navigate('Popular')} />
        <ScrollButt title='Historicla' onPress={() => navigation.navigate('Popular')} />
        <ScrollButt title='Natural' onPress={() => navigation.navigate('Popular')} />
        <ScrollButt title='Beaches' onPress={() => navigation.navigate('Popular')} />
        <ScrollButt title='Other' onPress={() => navigation.navigate('Popular')} />
        </View>
      </ScrollView>

      <ScrollView>
        
      </ScrollView>
    </BackImg>
  )
}

const styles = StyleSheet.create({
  header:{
    fontSize:30,
    fontWeight:'bold',
    color:'white'
  },
  scrool:{
    flexDirection:'row',
    gap:20,
    marginLeft:10,
  }
})
export default Home