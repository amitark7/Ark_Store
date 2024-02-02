import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useState} from 'react';

export const contextStore = createContext({
  cartList: [],
  OrderHistoryList:[],
  addToCart: (arg0: any) => {},
  addInitialCartList: (arg0: any) => {},
  addInitialOrderList:(arg0:any)=>{},
  OrderListFromCartList:()=>{}
});
const StoreProvider = ({children}: any) => {
  const [cartList, setcartList] = useState<any>([]);
  let OrderHistoryList: any=[]

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
  const addInitialOrderList=(item:any)=>{
    OrderHistoryList=item
  }

  const OrderListFromCartList=async ()=>{
    let temp = cartList.reduce(
      (accumalator: number, CurentValue: any) =>
        accumalator + parseFloat(CurentValue.price),
      0,
    );
    if (OrderHistoryList.length > 0) {
      OrderHistoryList.unshift({
        OrderDate:
          new Date().toDateString() +
          ' ' +
          new Date().toLocaleTimeString(),
        CartList: cartList,
        CartListPrice: temp.toFixed(2).toString(),
      });
    } else {
      OrderHistoryList.push({
        OrderDate:
          new Date().toDateString() +
          ' ' +
          new Date().toLocaleTimeString(),
        CartList: cartList,
        CartListPrice: temp.toFixed(2).toString(),
      });
    }
    setcartList([])
    await AsyncStorage.setItem('cart',JSON.stringify(cartList))
    await AsyncStorage.setItem('order',JSON.stringify(OrderHistoryList))
  }
  return (
    <contextStore.Provider
      value={{
        cartList,
        OrderHistoryList,
        addToCart,
        addInitialCartList,
        OrderListFromCartList,
        addInitialOrderList
      }}>
      {children}
    </contextStore.Provider>
  );
};

export default StoreProvider;
