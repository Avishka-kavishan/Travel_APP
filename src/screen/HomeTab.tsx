import { StyleSheet } from 'react-native';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './Home';
import Transport from './Transport';
import Accommodation from './Accommodation';
import Health from './Health';
import Shopping from './Shopping';
import CustomBottomTab from '../components/CustomBottomTab';

export type BottomTabParamList = {
  Home: undefined;
  Shopping: undefined;
  Health: undefined;
  Transport: undefined;
  Accommodation: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomBottomTab {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Transport" component={Transport} />
      <Tab.Screen name="Accommodation" component={Accommodation} />
      <Tab.Screen name="Health" component={Health} />
      <Tab.Screen name="Shopping" component={Shopping} />
    </Tab.Navigator>
  );
}
