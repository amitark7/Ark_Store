import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderBar from '../component/HeaderBar';
import CustomIcon from '../component/CustomIcon';

const ProfileScreen = () => {
  const List = [
    {
      name: 'My Order',
      icon: 'orders',
    },
    {
      name: 'My Cart',
      icon: 'shopping-bag',
    },
    {
      name: 'My Voucher',
      icon: 'redeem',
    },
    {
      name: 'WishList',
      icon: 'favorite',
    },
    {
      name: 'Help Center',
      icon: 'help-center',
    },
    {
      name: 'Setting',
      icon: 'settings',
    },
  ];
  return (
    <View style={styles.ScreenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.ScrollViewFlex}>
        <HeaderBar title="Profile" />
        <View style={styles.ScrollInnerContainer}>
          <View style={styles.TopContainer}>
            <Image
              style={styles.Image}
              source={require('../assets/Amit.jpeg')}
            />
            <View style={styles.TitleContainer}>
              <Text style={styles.title}>Amit Ark</Text>
              <Text style={styles.subTitle}>amit@ark.com</Text>
            </View>
          </View>
          <View style={styles.BtnList}>
            {List.map((data, index) => (
              <TouchableOpacity style={styles.BtnContainer} key={index}>
                <CustomIcon name={data.icon} color="#000" size={28} />
                <Text style={styles.BtnTxt}>{data.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
  },
  ScrollViewFlex: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  ScrollInnerContainer: {
    marginTop: 20,
  },
  TopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  TitleContainer: {
    marginLeft: 40,
  },
  title: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
  },
  subTitle: {
    fontWeight:'400'
  },
  BtnList: {
    paddingHorizontal:20,
    marginTop:30
  },
  BtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:20,
    borderBottomWidth:1
  },
  BtnTxt: {
    fontSize:20,
    fontWeight:'600',
    color:'#000',
    marginLeft:20
  },
});
