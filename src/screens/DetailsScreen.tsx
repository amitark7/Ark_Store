import {ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailsScreen = ({route}: any) => {
 const {title,description,rating,price,images,thumbnail}=route.params;
 console.log(item);
 

  return <ScrollView>
    <View style={styles.Container}>
        <ImageBackground source={{uri:thumbnail}}/>
    </View>
  </ScrollView>;
};

export default DetailsScreen;

const styles = StyleSheet.create({
  Container:{}
});
