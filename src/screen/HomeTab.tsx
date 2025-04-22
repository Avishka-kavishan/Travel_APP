import {Alert, StyleSheet} from 'react-native';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';



export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Health: undefined;
  Transport: undefined;
  Accommodate: undefined;
};


import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Transport from './Transport';
import Accommodation from './Accommodation';


function HomeScreen({ navigation }:any) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e:any) => {
      // Prevent default behavior
      e.preventDefault();

      Alert.alert('Default behavior prevented');
      // Do something manually
      // ...
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function TransportScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function HomeTab() {
  return (

      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Transport" component={Transport} />
        <Tab.Screen name="Accommodate" component={Accommodation} />
      </Tab.Navigator>
  
  );
}
