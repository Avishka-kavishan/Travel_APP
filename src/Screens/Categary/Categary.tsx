import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import BackImg from "../../Components/BackImg";

const Categary = ({ navigation }) => {
  const categarys = [
    { id: 1, title: "Destination", image: require("../../assets/image/Desti.png")},
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
    <View style={styles.container}>
    <FlatList
      data={categarys}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 20 }}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
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
    fontWeight: "500",
    textAlign: "center",
    color:"white",
    textShadowColor:"black",
    textShadowRadius:5,
    textShadowOffset:{width: -1, height:-1},
  },
});

export default Categary;
