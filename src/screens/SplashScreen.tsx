import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Hometabs');
    }, 2000);
  }, []);
  return (
    <View style={styles.Container}>
      <Image style={styles.image} source={require('../assets/FullLogo.png')} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    objectFit:'contain'
  },
});
