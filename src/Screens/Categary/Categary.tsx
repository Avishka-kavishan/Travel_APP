import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import BackImg from "../../Components/BackImg";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Screen } from "react-native-screens";
import VectorIcon from "../../Components/VectorIcon";

const Categary = ({ navigation }) => {
  const categarys = [
    { id: 1, title: "Destination", image: require("../../assets/image/Desti.png"), screen:"Destination"},
    { id: 2, title: "Transportation", image: require("../../assets/image/trans.png") },
    { id: 3, title: "Accommodation", image: require("../../assets/image/acco.png") },
    { id: 4, title: "Guidance", image: require("../../assets/image/guid.png") },
    { id: 5, title: "Healthcare", image: require("../../assets/image/health.png") },
    { id: 6, title: "Shopping", image: require("../../assets/image/shopping.png") },
    { id: 7, title: "Information", image: require("../../assets/image/infor.png") },
    { id: 8, title: "Banking", image: require("../../assets/image/bank.png") },
  ];

  return (
    <BackImg>
    <VectorIcon/>
    <View>
    <FlatList
      data={categarys}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 20 }}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => item.screen && navigation.navigate(item.screen)}>
          <Image source={item.image} style={styles.image} />
          <View><Text style={styles.text}>{item.title}</Text></View>
        </TouchableOpacity>
      )}
    />
    </View>
    </BackImg>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    marginBottom: 20,
    flex: 1,
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 10,
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color:"white",
    textShadowColor:"black",
    textShadowRadius:9,
    textShadowOffset:{width: 1, height:1},
    marginBottom:10
  },
  menu:{
    marginTop:-50,
    paddingLeft:30,
    paddingBottom:20
  }
});

export default Categary;
