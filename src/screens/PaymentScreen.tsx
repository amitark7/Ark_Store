import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomIcon from '../component/CustomIcon';
import LinearGradient from 'react-native-linear-gradient';

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
          <CustomIcon name="chevron-left" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.midContainer}>
        <View style={styles.creditCardContainer}>
          <Text style={styles.cardTitle}>Credit Card</Text>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#7B8788', '#000']}
            style={styles.cardContainer}>
            <View style={styles.cardTopContainer}>
              <Image style={styles.visaImage} source={require('../assets/chip.png')}/>
              <Image
                style={styles.visaImage}
                source={require('../assets/visa.png')}
              />
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
          </LinearGradient>
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
  creditCardContainer: {
    paddingHorizontal:10,
    marginTop:10
  },
  cardTitle: {},
  cardContainer: {
    marginHorizontal:4,
    borderRadius:8
  },
  cardTopContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
    paddingVertical:20
  },
  numberContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  number: {
    color:'#fff',
    letterSpacing:2,
    fontWeight:'700',
    fontSize:18,

  },
  holderContainer: {},
  title: {},
  subTitle: {},
  visaImage: {
    width:90,
    height:30
  },
});
