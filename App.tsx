import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Welcome from './src/Screens/WelcomPage/Welcome'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from './src/Screens/SignUp/SignUp'
import Verification from './src/Screens/Vrification/Verification'

const Stack = createStackNavigator ();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Welcome} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App