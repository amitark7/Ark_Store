import {createContext, useState} from 'react';

export const contextStore = createContext({
  cartList: [],
  addToCart: (arg0: any) => {},
});

const StoreProvider = ({children}: any) => {
  const [cartList, setcartList] = useState([]);

  const addToCart = (value: any) => {};
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
