import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useState} from 'react';

export const contextStore = createContext({
  cartList: [],
  addToCart: (arg0: any) => {},
  addInitialCartList:(arg0:any)=>{},
  deleteFromCart:(arg0:any)=>{}
});
const StoreProvider = ({children}: any) => {
  const [cartList, setcartList] = useState<any>([]);

  const addToCart =(item: any) => {
    if(cartList.length==0){
      setcartList([...cartList,item])
    }else{
      setcartList([...cartList,item])
    }
  };
  const deleteFromCart=(id:any)=>{
    setcartList(cartList.filter((item: { id: number; })=>item.id!==1))
    console.log(cartList);
  }

  const addInitialCartList=(item:any)=>{
    setcartList(item)
  }

  return (
    <contextStore.Provider
      value={{
        cartList,
        addToCart,
        addInitialCartList,
        deleteFromCart
      }}>
      {children}
    </contextStore.Provider>
  );
};

export default StoreProvider;