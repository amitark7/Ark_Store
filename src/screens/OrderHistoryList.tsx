import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderBar from '../component/HeaderBar';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {itemStore} from '../store/itemStore';
import LottieView from 'lottie-react-native';

const OrderHistoryList = ({navigation}: any) => {
  const TabHeight = useBottomTabBarHeight();
  const OrderHistoryList = itemStore((state: any) => state.OrderHistoryList);
  const [showAnimation, setShowanimatison] = useState(false);

  const ButtonHandler=()=>{
    setShowanimatison(true)
    setTimeout(()=>{
      setShowanimatison(false)
    },2000)
  }

  return (
    <>
      {showAnimation ? (
        <View style={styles.LottiConatiner}>
          <LottieView
            style={styles.Lotti}
            source={require('../assets/lotti/successful.json')}
            autoPlay
            loop={false}
          />
        </View>
      ) : (
        <></>
      )}
      <View style={styles.ScreenContainer}>
        <ScrollView
          style={[styles.ScrollViewFlex]}
          showsVerticalScrollIndicator={false}>
          <HeaderBar title="Order History" />
          {OrderHistoryList.length == 0 ? (
            <View style={styles.EmptyContainer}>
              <LottieView
                style={styles.cartImage}
                source={require('../assets/lotti/cart.json')}
                autoPlay
                loop
              />
              <Text style={styles.emptyTxt}>No Order History</Text>
            </View>
          ) : (
            OrderHistoryList.map((item: any, index: any) => (
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
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.brand}>{item.brand}</Text>
                        <Text style={styles.price}>
                          $
                          {Math.round(
                            item.price -
                              (item.price *
                                Math.round(item.discountPercentage)) /
                                100,
                          )}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))
          )}
        </ScrollView>
        {OrderHistoryList.length > 0 ? (
          <View style={[styles.bottomContainer, {marginBottom: TabHeight}]}>
            <TouchableOpacity
              style={styles.buyBtn}
              onPress={ButtonHandler}>
              <Text style={styles.BuyTxt}>Download</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
      </View>
    </>
  );
};

export default OrderHistoryList;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  OrderListContainer: {
    paddingHorizontal: 1,
    paddingVertical: 10,
  },
  TopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  subTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  titleTxt: {
    fontSize: 14,
    color: '#000',
  },
  PriceTxt: {
    fontSize: 17,
    color: '#2ecc72',
    fontWeight: '500',
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
    width: '100%',
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
  emptyTxt: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
  },
  EmptyContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartImage: {
    width: 200,
    height: 200,
  },
  LottiConatiner: {
    position: 'absolute',
    flex: 1,
    top:0,
    left:0,
    right:0,
    bottom:0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex:1000
  },
  Lotti: {
   flex:1,
   height:200,
   width:200
  },
});

