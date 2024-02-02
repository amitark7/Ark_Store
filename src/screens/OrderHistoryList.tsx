import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {contextStore} from '../store/StoreContext';
import HeaderBar from '../component/HeaderBar';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const OrderHistoryList = ({navigation}:any) => {
  const {OrderHistoryList} = useContext(contextStore);
  const TabHeight=useBottomTabBarHeight()  
  
  return (
    <View style={styles.ScreenContainer}>
      <ScrollView style={[styles.ScrollViewFlex]} showsVerticalScrollIndicator={false}>
        <HeaderBar title="Order History" />
        {OrderHistoryList.map((item: any, index) => (
          <View style={styles.OrderListContainer} key={index}>
            <View style={styles.TopContainer}>
              <View>
                <Text style={styles.subTitle}>Order Time</Text>
                <Text style={styles.titleTxt}>{item.OrderDate}</Text>
              </View>
              <View>
                <Text style={styles.subTitle}>Total Amount</Text>
                <Text style={styles.PriceTxt}>${item.CartListPrice}</Text>
              </View>
            </View>
            <View>
              {item.CartList.map((item: any, index: any) => (
                <TouchableOpacity
                key={index}
                  style={styles.ListContainer}
                  onPress={() => {
                    navigation.push('Details', {item});
                  }}>
                  <View>
                    <Image
                      style={styles.image}
                      source={{uri: item.thumbnail}}
                    />
                  </View>
                  <View style={styles.innerContainer}>
                    <Text style={styles.title}>
                      {item.title?.substring(0, 11)}
                    </Text>
                    <Text style={styles.brand}>{item.brand}</Text>
                    <Text style={styles.price}>
                      $
                      {Math.round(
                        item.price -
                          (item.price * Math.round(item.discountPercentage)) /
                            100,
                      )}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={[styles.bottomContainer,{marginBottom:TabHeight}]}>
        <Text style={styles.cartPrice}>$320</Text>
        <TouchableOpacity
          style={styles.buyBtn}
          onPress={() => {
            // OrderListFromCartList();
            // navigation.navigate('History');
          }}>
          <Text style={styles.BuyTxt}>Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderHistoryList;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    paddingHorizontal:10
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  OrderListContainer: {
    paddingHorizontal:1,
    paddingVertical:10
  },
  TopContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10
  },
  subTitle: {
    fontSize:18,
    color:'#000',
    fontWeight:'bold'
  },
  titleTxt: {
    fontSize:14,
    color:'#000'
  },
  PriceTxt:{
    fontSize:17,
    color:'#2ecc72',
    fontWeight:'500'
  },
  ListContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 8,
    objectFit: 'fill',
  },
  innerContainer: {
    marginLeft: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  brand: {
    fontSize: 16,
    marginTop: 8,
  },
  price: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 8,
  },
  bottomContainer: {
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buyBtn: {
    width: '50%',
    borderWidth: 2,
    paddingVertical: 12,
    backgroundColor: '#2ecc72',
    borderColor: '#2ecc72',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  BuyTxt: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
  },
  cartPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});
