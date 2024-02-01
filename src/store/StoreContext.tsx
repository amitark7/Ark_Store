import {createContext, useState} from 'react';

export const contextStore = createContext({
  cartList: [],
  addToCart: (arg0: any) => {},
});

const StoreProvider = ({children}: any) => {
  const [cartList, setcartList] = useState<any>([]);

  const addToCart = (item: any) => {
    if(cartList.length==0){
      setcartList([...cartList,item])
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