import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderBar from '../component/HeaderBar';
import CustomIcon from '../component/CustomIcon';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderBar title="" />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Search" />
        <TouchableOpacity style={styles.searchButton}>
          <CustomIcon name="search" size={30} color="#616C6F" />
        </TouchableOpacity>
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
    position:'relative',
    paddingHorizontal:20
  },
  input: {
    width: '100%',
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: '#EAF0F1',
    marginVertical: 20,
  },
  searchButton:{
    position:'absolute',
    right:'8%',
    top:'34%'
  }
});
