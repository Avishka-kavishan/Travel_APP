import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import BackImg from '../components/BackImg'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import ScrollButt from '../components/ScrollButt'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/native'
import LogoButt from '../components/LogoButt'
import Header from '../components/Header'


type HomeScreenNavigationProp = NativeStackNavigationProp<ParamListBase, 'Home'>

type Props = {
  navigation: HomeScreenNavigationProp;
}


const Home = ({navigation}:Props) => {

  const Places = [
    {id:1, title:'Sigiriya', image:require('../assets/Image/sigiri.jpg')},
    {id:2, title:'The Tooth Relic', image:require('../assets/Image/tooth.jpg')},
    {id:3, title:'Mirissa', image:require('../assets/Image/mirissa.jpg')},
    {id:4, title:'Alle', image:require('../assets/Image/alle.jpg')},
    {id:5, title:'Galle', image:require('../assets/Image/galle.jpg')},
    {id:6, title:'Yala', image:require('../assets/Image/yala.jpg')},
    {id:7, title:'Hikkaduva', image:require('../assets/Image/hikkadu.jpg')},
  ];

  return (
    <BackImg>
      <View style={styles.pButton}>
        <LogoButt onPress={()=> navigation.navigate('Profile')}/>
        <LogoButt onPress={()=> navigation.navigate('Setting')}/>
      </View>
        
      <View>
        <Header title='Places'/>
      </View>

      <ScrollView style={styles.scrool}>
        <View style={styles.scrool}>
        <ScrollButt title='Popular' onPress={() => navigation.navigate('Home')} />
        <ScrollButt title='Historicla' onPress={() => navigation.navigate('Historical')} />
        <ScrollButt title='Natural' onPress={() => navigation.navigate('Natural')} />
        <ScrollButt title='Beaches' onPress={() => navigation.navigate('Beaches')} />
        <ScrollButt title='Other' onPress={() => navigation.navigate('Other')} />
        </View>
      </ScrollView>
        
      
      <FlatList 
        data={Places}
        keyExtractor={(item)=> item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{justifyContent:'space-between',gap:15, marginBottom:20}}
        renderItem={({item})=>(
          <TouchableOpacity> 
            <View style={styles.viewBack}>
            <Image source={item.image} style={styles.image}/>
            <Text style={styles.title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        />
   
    </BackImg>
  )
}

const styles = StyleSheet.create({
  
  scrool:{
    flexDirection:'row',
    gap:20,
    marginLeft:10,
    height:130
  },
  pButton:{
    flexDirection:'row',
    gap:250,
    alignItems:'center',
    marginTop:20,
  },
  image:{
    width:160,
    height:140,
    marginTop:10,
    borderRadius:10
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    color:'#497C1C'
  },
  viewBack:{
    backgroundColor:'white',
    width:180,
    alignItems:'center',
    borderRadius:10,
    borderColor:'#295206',
    borderWidth:1
  },
})
export default Home