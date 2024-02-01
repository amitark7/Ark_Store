import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import HeaderBar from '../component/HeaderBar';
import CustomIcon from '../component/CustomIcon';
import {productList} from '../assets/data';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {contextStore} from '../store/StoreContext';

const HomeScreen = ({navigation}: any) => {
  const {addInitialCartList} = useContext(contextStore);
  const [category, setCategory] = useState([
    'All',
    'smartphones',
    'laptops',
    'Headphones',
    'Mens Wear',
    'Ladies Wear',
  ]);
  const [selectCategory, setSelectCategory] = useState('All');
  const TabHeight = useBottomTabBarHeight();
  const[categoryList,setCategoryList]=useState<any>(productList)

  const fetchData = async () => {
    const list = await AsyncStorage.getItem('cart');  
    if (list) {
      addInitialCartList(JSON.parse(list));
    }
  };

  const CategoryList=(category:any)=>{
    setSelectCategory(category)
    if(category=='All'){
      setCategoryList(productList)
    }else{
      let list=productList.filter((item)=>item.category==category)
      setCategoryList(list)
    }
  } 

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <HeaderBar title="" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'grey'}
        />
        <TouchableOpacity style={styles.searchButton}>
          <CustomIcon name="search" size={30} color="#616C6F" />
        </TouchableOpacity>
      </View>
      <View style={styles.TitleContainer}>
        <Text style={styles.titleTxt}>Find the best</Text>
        <Text style={styles.titleTxt}>Product For You</Text>
      </View>
      <Text style={styles.CategoryTxt}>Categories</Text>
      <View>
        <FlatList
          horizontal
          style={styles.CategoryContainer}
          data={category}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[styles.CategoryList]}
              onPress={() => {
                CategoryList(item);
              }}>
              <Text
                style={[
                  styles.CategoryListText,
                  {
                    backgroundColor:
                      selectCategory === item ? '#2ecc72' : '#fff',
                    color: selectCategory === item ? '#fff' : '#000',
                    borderColor: selectCategory === item ? '#2ecc72' : '#000',
                  },
                ]}>
                {item.charAt(0).toUpperCase()+item.substring(1)}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.ProductContainer,
            {marginBottom: TabHeight},
          ]}
          data={categoryList}
          key={''}
          numColumns={2}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.ProductList}
              onPress={() => {
                navigation.push('Details', {
                  item,
                });
              }}>
              <Image
                style={styles.productImage}
                source={{uri: item.thumbnail}}
              />
              <View style={styles.productInnerContainer}>
                <Text style={styles.productTitle}>
                  {item.title.substring(0, 11)}
                </Text>
                <Text style={styles.ratingTxt}>⭐ {item.rating}</Text>
              </View>
              <View style={styles.PriceContainer}>
                <Text style={styles.currentPrice}>
                  $
                  {Math.round(
                    item.price - (item.price * Math.round(item.discountPercentage)) / 100,
                  )}
                </Text>
                <Text style={styles.OrigionalPrice}>${item.price}</Text>
                <Text style={styles.discounted}>
                  ({Math.round(item.discountPercentage)}% off)
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  inputContainer: {
    position: 'relative',
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    borderRadius: 14,
    paddingHorizontal: 16,
    backgroundColor: '#EAF0F1',
    marginVertical: 20,
    paddingVertical: 14,
    fontSize: 17,
  },
  searchButton: {
    position: 'absolute',
    right: '8%',
    top: '34%',
  },
  TitleContainer: {
    paddingHorizontal: 10,
  },
  titleTxt: {
    fontSize: 30,
    fontWeight: '700',
  },
  CategoryTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 18,
    paddingHorizontal: 10,
  },
  CategoryContainer: {
    flexGrow: 0,
    paddingLeft: 5,
    marginTop: 4,
  },
  CategoryList: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  CategoryListText: {
    fontSize: 15,
    color: '#000',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
  },
  ProductContainer: {
    flexGrow: 1,
  },
  ProductList: {
    width: '48%',
    marginVertical: 8,
    marginHorizontal: 4,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    objectFit: 'fill',
  },
  productInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 6,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  ratingTxt: {
    color: '#000',
    fontWeight: 'bold',
  },
  PriceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 2,
  },
  currentPrice: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginRight: 6,
  },
  OrigionalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    marginRight: 6,
  },
  discounted: {
    fontSize: 12,
    color: '#2ecc72',
  },
});
