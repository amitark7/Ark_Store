import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderBar from '../component/HeaderBar';
import CustomIcon from '../component/CustomIcon';
import {productList} from '../assets/data';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  const [category, setCategory] = useState([
    'All',
    'Smartphones',
    'Headphones',
    'Laptops',
    'Mens Wear',
    'Ladies Wear',
  ]);
  const [selectCategory, setSelectCategory] = useState('All');
  const TabHeight = useBottomTabBarHeight();
  return (
    <View style={styles.container}>
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
                setSelectCategory(item);
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
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={productList}
          key={''}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity style={[styles.ProductList]}>
              <Image style={styles.productImage} source={{uri:item.thumbnail}}/>
              <View>
                <Text>{item.title}</Text>
                <Text>{item.rating}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
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
  ProductList: {
    width:'48%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal:4
  },
  productImage:{
    width:'100%',
    height:150,
    borderRadius:10,
    objectFit:'fill',
  }
});
