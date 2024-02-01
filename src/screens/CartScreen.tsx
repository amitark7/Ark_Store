import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { contextStore } from '../store/StoreContext'

const CartScreen = () => {
  const {cartList}=useContext(contextStore)
  console.log(cartList[0].title);
  
  return (
    <View>
      <Text>Cart</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})