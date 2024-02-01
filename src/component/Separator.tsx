import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Separator = () => {
  return (
    <View style={styles.container}>
    </View>
  )
}

export default Separator

const styles = StyleSheet.create({
  container:{
    height:2,
    backgroundColor:'#DAE0E2',
    marginHorizontal:20
  }
})