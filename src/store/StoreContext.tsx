import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useState} from 'react';

export const contextStore = createContext({
  cartList: [],
  OrderHistoryList: [],
  addToCart: (arg0: any) => {},
  addInitialCartList: (arg0: any) => {},
  addInitialOrderList: (arg0: any) => {},
  OrderListFromCartList: () => {},
});
const StoreProvider = ({children}: any) => {
  const [cartList, setcartList] = useState<any>([]);
  const [OrderHistoryList, setOrderHistoryList] = useState<any>([]);
  console.log('Hey');
  console.log(OrderHistoryList);

  const addToCart = (item: any) => {
    if (cartList.length == 0) {
      setcartList([...cartList, item]);
    } else {
      setcartList([...cartList, item]);
    }
  };

  const addInitialCartList = (item: any) => {
    setcartList(item);
  };
  const addInitialOrderList = (item: any) => {
    setOrderHistoryList(item);
  };

  const OrderListFromCartList = async () => {
    // let temp = cartList.reduce(
    //   (accumalator: number, CurentValue: any) =>
    //     accumalator + parseFloat(CurentValue.price),
    //   0,
    // );
    // if (OrderHistoryList.length > 0) {
    //   setOrderHistoryList[{
    //     OrderDate:
    //       new Date().toDateString() + ' ' + new Date().toLocaleTimeString(),
    //     CartList: cartList,
    //     CartListPrice: temp.toFixed(2).toString()
    //   },...OrderHistoryList];
    // } else {
    //   setOrderHistoryList[...OrderHistoryList,{
    //     OrderDate:
    //       new Date().toDateString() + ' ' + new Date().toLocaleTimeString(),
    //     CartList: cartList,
    //     CartListPrice: temp.toFixed(2).toString(),
    //   }];
    // }

    // await AsyncStorage.setItem('order', JSON.stringify(OrderHistoryList)).then(
    //   async () => {
    //     setcartList([]);
    //     await AsyncStorage.setItem('cart', JSON.stringify(cartList));
    //   },
    // );
  };
  return (
    <contextStore.Provider
      value={{
        cartList,
        OrderHistoryList,
        addToCart,
        addInitialCartList,
        OrderListFromCartList,
        addInitialOrderList,
      }}>
      {children}
    </contextStore.Provider>
  );
};

export default StoreProvider;
