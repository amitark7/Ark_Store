import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useState} from 'react';

export const contextStore = createContext({
  cartList: [],
  addToCart: (arg0: any) => {},
  addInitialCartList: (arg0: any) => {},
});
const StoreProvider = ({children}: any) => {
  const [cartList, setcartList] = useState<any>([]);
  let OrderHistoryList=[]

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

  const OrderListFromCartList=()=>{
    let temp = cartList.reduce(
      (accumalator: number, CurentValue: any) =>
        accumalator + parseFloat(CurentValue.ItemPrice),
      0,
    );
    console.log(temp);
    
  }
  return (
    <contextStore.Provider
      value={{
        cartList,
        addToCart,
        addInitialCartList,
      }}>
      {children}
    </contextStore.Provider>
  );
};

export default StoreProvider;
