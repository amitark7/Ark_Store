import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomIcon from '../component/CustomIcon';
import {itemStore} from '../store/itemStore';

const DetailsScreen = ({route, navigation}: any) => {
  // const {addToCart, cartList} = useContext(contextStore);
  const addToCart=itemStore((state:any)=>state.addToCart)
  const {title, description, rating, price, images, discountPercentage} =
    route.params.item;

  const [selectPic, setSelectedPic] = useState(images[0]);
  const [pic, setPic] = useState(images[0]);

  const handleCart = async (item: any) => {
    // addToCart(item);
    // const newCart = [...cartList, item];
    // await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };
  return (
    <>
      <ScrollView>
        <View style={styles.Container}>
          <View style={styles.imageContainer}>
            <Image style={styles.imageBg} source={{uri: pic}} />
            <View style={styles.iconContainer}>
              <TouchableOpacity
                style={styles.icon}
                onPress={() => {
                  navigation.pop();
                }}>
                <CustomIcon name="chevron-left" size={24} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <CustomIcon name="favorite" size={24} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <FlatList
              horizontal
              data={images}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={[
                    styles.imageList,
                    {
                      borderColor: selectPic == item ? '#2ecc72' : '#DAE0E2',
                    },
                  ]}
                  onPress={() => {
                    setPic(item);
                    setSelectedPic(item);
                  }}>
                  <Image style={styles.image} source={{uri: item}} />
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.titleTxt}>{title}</Text>
            <View style={styles.topContainer}>
              <View style={styles.PriceContainer}>
                <Text style={styles.currentPrice}>
                  $
                  {Math.round(
                    price - (price * Math.round(discountPercentage)) / 100,
                  )}
                </Text>
                <Text style={styles.OrigionalPrice}>${price}</Text>
                <Text style={styles.discounted}>
                  ({Math.round(discountPercentage)}% off)
                </Text>
              </View>
              <Text style={styles.ratingTxt}>⭐ {rating}</Text>
            </View>
            <Text style={styles.descriptionTxt}>{description}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.cartBtn}
          onPress={() => {
            addToCart(route.params.item);
            navigation.navigate('Cart');
          }}>
          <CustomIcon name="shopping-cart" size={24} color="#2ecc72" />
          <Text style={styles.cartTxt}>Add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buyBtn}
          onPress={() => {
            navigation.navigate('Payment', {
              price: Math.round(
                price - (price * Math.round(discountPercentage)) / 100,
              ),
            });
          }}>
          <CustomIcon
            name="keyboard-double-arrow-right"
            size={24}
            color="#fff"
          />
          <Text style={styles.BuyTxt}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    width: '100%',
    top: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  icon: {
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 45,
    width: 45,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBg: {
    width: '100%',
    height: 400,
    objectFit: 'fill',
    borderRadius: 10,
  },
  imageList: {
    marginHorizontal: 4,
    marginVertical: 8,
    borderWidth: 2,
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    paddingHorizontal: 14,
    marginTop: 12,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleTxt: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  ratingTxt: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  PriceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 8,
  },
  currentPrice: {
    fontSize: 22,
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
  descriptionTxt: {
    fontWeight: '500',
    marginTop: 8,
  },
  bottomContainer: {
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  cartBtn: {
    width: '50%',
    borderWidth: 2,
    marginRight: 8,
    borderColor: '#2ecc72',
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cartTxt: {
    color: '#2ecc72',
    fontSize: 17,
    fontWeight: '500',
  },
  buyBtn: {
    width: '50%',
    borderWidth: 2,
    paddingVertical: 12,
    backgroundColor: '#2ecc72',
    borderColor: '#2ecc72',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  BuyTxt: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
  },
});
