import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {productList} from '../assets/data';
import {current, produce} from 'immer';

export const itemStore = create(
  persist(
    (set, get) => ({
      ProductList: productList,
      cartList: [],
      OrderHistoryList: [],
      addToCart: (item: any) =>
        set(
          produce((state: {cartList: any[]}) => {
            state.cartList.push(item);
          }),
        ),
      OrderHistoryListFromCart: () =>
        set(
          produce(state => {
            let temp = state.cartList.reduce(
              (accumalator: number, CurentValue: any) =>
                accumalator +
                Math.round(
                  CurentValue.price -
                    (CurentValue.price *
                      Math.round(CurentValue.discountPercentage)) /
                      100,
                ),
              0,
            );
            if (state.OrderHistoryList.length > 0) {
              state.OrderHistoryList.unshift({
                OrderDate:
                  new Date().toDateString() +
                  ' ' +
                  new Date().toLocaleTimeString(),
                CartList: state.cartList,
                CartListPrice: temp.toFixed(2).toString(),
              });
            } else {
              state.OrderHistoryList.push({
                OrderDate:
                  new Date().toDateString() +
                  ' ' +
                  new Date().toLocaleTimeString(),
                CartList: state.cartList,
                CartListPrice: temp.toFixed(2).toString(),
              });
            }
            state.cartList = [];
          }),
        ),
      deleteFromCart:(id:any)=>set(produce(state=>{
        state.cartList=state.cartList.filter((item: { id: any; })=>item.id!==id)
      }))
    }),
    {
      name: 'item-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
