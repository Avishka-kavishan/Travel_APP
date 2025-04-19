/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Welcome from './src/screen/Welcome';
import SignUp from './src/screen/SignUp';
import LogIn from './src/screen/LogIn';
import Home from './src/screen/Home';
import Hostorical from './src/screen/Places/Hostorical';
import Beaches from './src/screen/Places/Beaches';
import Other from './src/screen/Places/Other';
import Natural from './src/screen/Places/Natural';
import Profile from './src/screen/Profile';
import Menu from './src/screen/Menu';

const Stack = createStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Historical" component={Hostorical} />
        <Stack.Screen name="Beaches" component={Beaches} />
        <Stack.Screen name="Other" component={Other} />
        <Stack.Screen name="Natural" component={Natural} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Menu' component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
