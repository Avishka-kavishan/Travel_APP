import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import BackImg from '../../Components/BackImg'
import TextCom from '../../Components/text'
import VectorIcon from '../../Components/VectorIcon'
import { FlatList } from 'react-native-gesture-handler'

const Destination = ({navigation}) => {

  const items = [
    {id:1, title:'Nature', image:require("../../assets/image/Destination/D1.png")},
    {id:2, title:'Adventure', image:require("../../assets/image/Destination/D2.png")},
    {id:3, title:'Cultural', image:require("../../assets/image/Destination/D3.png")},
    {id:4, title:'Beach', image:require("../../assets/image/Destination/D4.png")},
    {id:5, title:'Agro', image:require("../../assets/image/Destination/D5.png")},
    {id:6, title:'Wellness', image:require("../../assets/image/Destination/D6.png")},
    {id:7, title:'Urban', image:require("../../assets/image/Destination/D7.png")},
  ]

  return (
    <BackImg>
    <View style={styles.container}>
      <VectorIcon/>
      <TextCom lable={'Destination'} />
    </View>
    <ScrollView>
      <FlatList
        data={items}
        keyExtractor={(item)=> item.id.toString()}
        numColumns={1}
        renderItem={({item})=>(
          <TouchableOpacity onPress={() => navigation.navigate()}>
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
    </BackImg>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        marginTop:270,
        marginBottom:20
    },
    image:{
      width: 300,
      height: 120,
      borderRadius: 10,
      marginBottom:20,
      marginLeft:60,
    },
})

export default Destination