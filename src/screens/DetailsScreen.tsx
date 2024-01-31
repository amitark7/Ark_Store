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

const DetailsScreen = ({route}: any) => {
  const {title, description, rating, price, images, thumbnail} =
    route.params.item;

  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageBg} source={{uri: thumbnail}} />
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.icon}>
              <CustomIcon name="arrow-back" size={30} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <CustomIcon name="favorite" size={30} color="#000" />
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
    position:'absolute',
    top:'5%',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  icon:{
    backgroundColor:'#fff',
    borderRadius:30,
    height:50,
    width:50,
    padding:10
  },
  imageBg: {
    width: '100%',
    height: 400,
    objectFit: 'fill',
    borderRadius: 10,
  },
});
