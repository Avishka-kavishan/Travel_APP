import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import ButtonC from '../components/ButtonC';
import BackImg from '../components/BackImg';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ParamListBase } from '@react-navigation/native';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<ParamListBase, 'Welcome'>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const Welcome = ({ navigation }: Props) => {
  return (
    <BackImg>
      <View style={styles.container}>
        <Image source={require("../assets/Image/Logo.png")} style={styles.img} />
        <Text style={styles.text}>Journey Ceylon</Text>
        <Text style={styles.para}>
          Discover the world with ExploreEase, your all-in-one travel app for seamless and unforgettable journeys—whether it’s a quick getaway, 
          a grand adventure, or a spontaneous road trip!
        </Text>
      </View>

      <ButtonC title={'Get Start'} onPress={() => navigation.navigate('SignUp')} />
    </BackImg>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 500,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  para: {
    fontSize: 15,
    marginTop: 40,
    margin: 40,
    textAlign: "justify",
  },
  button: {},
});

export default Welcome;
