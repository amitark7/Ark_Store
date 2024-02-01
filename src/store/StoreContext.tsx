import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useState} from 'react';

export const contextStore = createContext({
  cartList: [],
  addToCart: (arg0: any) => {},
});
const StoreProvider = ({children}: any) => {
  const [cartList, setcartList] = useState<any>([]);

  const addToCart =async (item: any) => {
    if(cartList.length==0){
      setcartList(item)
    }else{
      setcartList([...cartList,item])
    }

  };
  return (
    <contextStore.Provider
      value={{
        cartList,
        addToCart,
      }}>
      {children}
    </contextStore.Provider>
  );
};

export default StoreProvider;