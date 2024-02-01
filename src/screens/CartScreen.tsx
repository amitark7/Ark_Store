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

const CartScreen = () => {
  const {cartList} = useContext(contextStore);

  return (
    <>
      <ScrollView style={styles.Container}>
        <HeaderBar title='Cart'/>
        <FlatList
          data={cartList}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}:any) => (
            <TouchableOpacity style={styles.ListContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri:item.thumbnail}}/>
              </View>
              <View style={styles.innerContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.brand}>Apple</Text>
                <Text style={styles.price}>${Math.round(
                    item.price - (item.price * Math.round(item.discountPercentage)) / 100,
                  )}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  ListContainer: {
    flexDirection:'row',
    paddingHorizontal:30,
    marginBottom:10
  },
  imageContainer: {},
  image: {
    width:140,
    height:140,
    borderRadius:8
  },
  innerContainer: {
    marginLeft:16
  },
  title: {
    fontSize:24,
    fontWeight:'700'
  },
  brand: {
    fontSize:16,
    marginTop:8
  },
  price: {
    fontSize:22,
    color:'#000',
    fontWeight:'bold',
    marginTop:8
  },
});
