import {StyleSheet, Text, View} from 'react-native';
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
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <CustomIcon name="home" size={18} color={'#000'} />
          ),
        }}
      />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <CustomIcon name='search' size={20} color='#000'/>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
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
