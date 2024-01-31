import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator()

export const Hometabs=()=>{
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name='Cart' component={CartScreen}/>
      <Tab.Screen name='Favorite' component={FavoriteScreen}/>
      <Tab.Screen name='Profile' component={ProfileScreen}/>
    </Tab.Navigator>
  )
}
const App = () => {
  return (
   <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen
  name='Hometabs'
  component={Hometabs}
  />
  <Stack.Screen
  name='Details'
  component={DetailsScreen}
  />
</Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})