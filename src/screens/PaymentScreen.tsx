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
  const PaymentList = [
    {
      name: 'Wallet',
      icon: 'icon',
      isIcon: true,
    },
    {
      name: 'Google Pay',
      icon: require('../assets/app_images/gpay.png'),
      isIcon: false,
    },
    {
      name: 'Apple Pay',
      icon: require('../assets/app_images/applepay.png'),
      isIcon: false,
    },
    {
      name: 'Amazon Pay',
      icon: require('../assets/app_images/amazonpay.png'),
      isIcon: false,
    },
  ];

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
              <Image
                style={styles.visaImage}
                source={require('../assets/chip.png')}
              />
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
                <Text style={styles.subTitle}>Card Holder Name</Text>
                <Text style={styles.title}>Amit Ark</Text>
              </View>
              <View>
                <Text style={styles.subTitle}>Expiry Date</Text>
                <Text style={styles.title}>02/28</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        {
          PaymentList.map(({name,icon,isIcon},index)=>(
            <View key={index}>
              {
                isIcon?(
                  <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  colors={['#7B8788', '#000']}
                  style={styles.LinearGradeintWallet}>
                  <View style={styles.WallerRow}>
                    <CustomIcon
                      name="wallet"
                      color='#2ecc72'
                      size={30}
                    />
                    <Text style={styles.PaymentTitle}>{name}</Text>
                  </View>
                  <Text style={styles.PaymentPrice}>$ 100.50</Text>
                </LinearGradient>
                ):(
                  <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  colors={['#7B8788', '#000']}
                  style={styles.LinearGradeintRegular}>
                  <Image source={icon} style={styles.PaymentImage} />
                  <Text style={styles.PaymentTitle}>{name}</Text>
                </LinearGradient>
                )
              }
            </View>
          ))
        }
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
    paddingHorizontal: 10,
    marginTop: 10,
    borderWidth: 2,
    marginHorizontal: 10,
    borderRadius: 8,
    paddingVertical: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginBottom: 6,
    paddingHorizontal: 4,
  },
  cardContainer: {
    marginHorizontal: 4,
    borderRadius: 14,
    paddingVertical: 10,
  },
  cardTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginTop: 20,
  },
  number: {
    color: '#fff',
    letterSpacing: 2,
    fontWeight: '700',
    fontSize: 20,
  },
  holderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 21,
    fontWeight: '600',
    color: '#fff',
  },
  subTitle: {
    fontSize: 14,
    color: '#99AAAB',
  },
  visaImage: {
    width: 90,
    height: 30,
    marginLeft: -20,
  },
  LinearGradeintWallet:{

  },
  WallerRow:{

  },
  PaymentTitle:{},
  PaymentPrice:{},
  LinearGradeintRegular:{},
  PaymentImage:{}
});
