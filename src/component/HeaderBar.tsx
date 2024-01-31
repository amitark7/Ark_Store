import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface HeaderBarPro {
  title: string;
}

const HeaderBar:React.FC<HeaderBarPro> = ({
  title
}) => {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.logo} source={require('../assets/logo.png.png')}/>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={require('../assets/Amit.jpeg')}/>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  headerContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#fff',
    paddingHorizontal:8,
    height:60
  },
  logo:{
    width:50,
    height:50,
  },
  image:{
    width:35,
    height:35,
    borderRadius:8
  },
  title:{
    fontSize:22,
    fontWeight:'bold'
  }
});
