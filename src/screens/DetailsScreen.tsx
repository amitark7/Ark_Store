import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomIcon from '../component/CustomIcon';

const DetailsScreen = ({route, navigation}: any) => {
  const {title, description, rating, price, images, thumbnail} =
    route.params.item;

  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageBg} source={{uri: thumbnail}} />
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
    height: 400,
    objectFit: 'fill',
    borderRadius: 10,
  },
});
