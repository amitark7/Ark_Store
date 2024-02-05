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
      <Image style={styles.logo} source={require('../assets/Logo.png')}/>
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
    width:55,
    height:55,
    objectFit:'contain'
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
