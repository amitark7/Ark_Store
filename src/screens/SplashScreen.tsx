import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={styles.Container}> 
      <Image style={styles.image} source={require('../assets/FullLogo.png')}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center"
  },
  image:{
    width:180,
    height:180
  }
})