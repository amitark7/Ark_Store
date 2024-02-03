import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBar from '../component/HeaderBar'

const ProfileScreen = () => {
  return (
    <View style={styles.ScreenContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollViewFlex}>
          <HeaderBar title='Profile'/>
          <View style={styles.ScrollInnerContainer}>
              <View style={styles.TopContainer}>
                  <Image style={styles.Image} source={require('../assets/Amit.jpeg')}/>
                  <View style={styles.TitleContainer}>
                    <Text style={styles.title}>Amit Ark</Text>
                    <Text style={styles.subTitle}>amit@ark.com</Text>
                  </View>
              </View>
          </View>
      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  ScreenContainer:{
    flex:1
  },
  ScrollViewFlex:{
    flexGrow:1,
    paddingHorizontal:10
  },
  ScrollInnerContainer:{
    marginTop:20
  },
  TopContainer:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10
  },
  Image:{
    width:100,
    height:100,
    borderRadius:60
  },
  TitleContainer:{
    marginLeft:40
  },
  title:{
    fontSize:28,
    color:'#000',
    fontWeight:'bold'
  },
  subTitle:{

  }
})