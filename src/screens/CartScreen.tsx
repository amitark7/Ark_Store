import {
  FlatList,
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
import Separator from '../component/Separator';
import CustomIcon from '../component/CustomIcon';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const CartScreen = ({navigation}: any) => {
  const {cartList} = useContext(contextStore);
  const TabHeight=useBottomTabBarHeight()
  return (
    <>
      <ScrollView style={styles.Container}>
        <HeaderBar title="Cart" />
        <FlatList
          data={cartList}
          scrollEnabled={false}
          ItemSeparatorComponent={Separator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}: any) => (
            <TouchableOpacity style={styles.ListContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: item.thumbnail}} />
              </View>
              <View style={styles.innerContainer}>
                <Text style={styles.title}>{item.title?.substring(0, 11)}</Text>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.price}>
                  $
                  {Math.round(
                    item.price -
                      (item.price * Math.round(item.discountPercentage)) / 100,
                  )}
                </Text>
                <Text style={styles.stock}>{item.stock} Items left</Text>
              </View>
              <TouchableOpacity style={styles.close}>
                <CustomIcon name="close" size={24} color="#000" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
      <View style={[styles.bottomContainer,{marginBottom:TabHeight}]}>
        <TouchableOpacity
          style={styles.buyBtn}
          onPress={() => {
            navigation.navigate('Payment');
          }}>
          <CustomIcon
            name="keyboard-double-arrow-right"
            size={24}
            color="#fff"
          />
          <Text style={styles.BuyTxt}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  ListContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  imageContainer: {},
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
    fontSize: 24,
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
  stock: {
    color: '#2ecc72',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 8,
    borderColor: '#2ecc72',
    marginTop: 8,
  },
  close: {
    position: 'absolute',
    right: '5%',
    top: '3%',
  },
  bottomContainer: {
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  cartBtn: {
    width: '50%',
    borderWidth: 2,
    marginRight: 8,
    borderColor: '#2ecc72',
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cartTxt: {
    color: '#2ecc72',
    fontSize: 17,
    fontWeight: '500',
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
});
