import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailsScreen from './screens/DetailsScreen';
import CustomIcon from './component/CustomIcon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Hometabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle:{
          height:80,
          position:'absolute',
        },
        tabBarHideOnKeyboard:true
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <CustomIcon
              name="home"
              size={32}
              color={focused ? '#2ecc72' : '#A4B0BD'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <CustomIcon
              name="shopping-bag"
              size={32}
              color={focused ? '#2ecc72' : '#A4B0BD'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <CustomIcon
              name="favorite"
              size={32}
              color={focused ? '#2ecc72' : '#A4B0BD'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <CustomIcon
              name="person"
              size={32}
              color={focused ? '#2ecc72' : '#A4B0BD'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="Hometabs"
          component={Hometabs}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
