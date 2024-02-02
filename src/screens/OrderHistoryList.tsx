import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { contextStore } from '../store/StoreContext'

const OrderHistoryList = () => {
  const{OrderHistoryList}=useContext(contextStore)
 
  
  return (
    <View style={styles.ScreenContainer}>
      <ScrollView style={styles.ScrollViewFlex}>
        {
          OrderHistoryList.map((item:any,index)=>(
            <TouchableOpacity style={styles.OrderListContainer}>
              <View style={styles.TopContainer}>
                  <View>
                    <Text style={styles.subTitle}>Order Time</Text>
                    <Text style={styles.title}>{item.OrderDate}</Text>
                  </View>
                  <View>
                    <Text style={styles.subTitle}>Total Amount</Text>
                    <Text style={styles.title}>{item.CartListPrice}</Text>
                  </View>
              </View>
            </TouchableOpacity>
          ))
        }

      </ScrollView>
    </View>
  )
}

export default OrderHistoryList

const styles = StyleSheet.create({
  ScreenContainer:{
    flex:1
  },
  ScrollViewFlex:{
    flexGrow:1
  },
  OrderListContainer:{
    
  },
  TopContainer:{

  },
  subTitle:{

  },
  title:{
    
  }
})