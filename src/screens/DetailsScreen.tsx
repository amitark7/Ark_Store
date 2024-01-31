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

const DetailsScreen = ({route, navigation}: any) => {
  const {title, description, rating, price, images, thumbnail} =
    route.params.item;
  const [selectPic, setSelectedPic] = useState(thumbnail);
  const [pic, setPic] = useState(thumbnail);
  return (
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
              <CustomIcon name="arrow-back" size={24} color="#000" />
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
                    borderColor: selectPic == item ? '#F4C724' : '#DAE0E2',
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
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  Container: {},
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
    height: 300,
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
    paddingHorizontal: 10,
    marginTop: 12,
  },
  titleTxt: {
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
  },
});
