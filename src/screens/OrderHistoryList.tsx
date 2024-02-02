import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { contextStore } from '../store/StoreContext'

const FavoriteScreen = () => {
  const{OrderHistoryList}=useContext(contextStore)
 
  
  return (
    <View style={styles.ScreenContainer}>
      <ScrollView style={styles.ScrollViewFlex}>
        {
          OrderHistoryList.map((item,index)=>(
            <TouchableOpacity style={styles.OrderListContainer}>

            </TouchableOpacity>
          ))
        }

      </ScrollView>
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  ScreenContainer:{
    flex:1
  },
  ScrollViewFlex:{
    flexGrow:1
  },
  OrderListContainer:{
    
  }
})