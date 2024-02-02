import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomIcon from '../component/CustomIcon';

const PaymentScreen = ({navigation}: any) => {
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.TopContainer}>
        <Text style={styles.HeaderTxt}>Payments</Text>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            navigation.pop();
          }}>
          <CustomIcon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.midContainer}>
        <View style={styles.creditCardContainer}>
          <Text style={styles.cardTitle}>Credit Card</Text>
          <View style={styles.cardContainer}>
            <View style={styles.cardTopContainer}>
              <CustomIcon name="" size={28} color="#fff" />
              <CustomIcon name="" size={28} color="#fff" />
            </View>
            <View style={styles.numberContainer}>
              <Text style={styles.number}>3703</Text>
              <Text style={styles.number}>5177</Text>
              <Text style={styles.number}>7777</Text>
              <Text style={styles.number}>3703</Text>
            </View>
            <View style={styles.holderContainer}>
              <View>
                <Text style={styles.title}>Card Holder Name</Text>
                <Text style={styles.subTitle}>Amit Kumar</Text>
              </View>
              <View>
                <Text style={styles.title}>Expiry Date</Text>
                <Text style={styles.subTitle}>02/28</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  TopContainer: {
    backgroundColor: '#fff',
    paddingVertical: 8,
  },
  HeaderTxt: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'center',
  },
  backBtn: {
    position: 'absolute',
    backgroundColor: '#DAE0E2',
    padding: 4,
    borderRadius: 8,
    left: '5%',
    top: '30%',
  },
  midContainer: {},
  creditCardContainer: {},
  cardTitle: {},
  cardContainer: {},
  cardTopContainer: {},
  numberContainer: {},
  number: {},
  holderContainer: {},
  title:{}
});
