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
  creditCardContainer:{},
  cardTitle:{}
});
