import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomIcon from '../component/CustomIcon';
import LinearGradient from 'react-native-linear-gradient';

const PaymentScreen = ({navigation,route}: any) => {
  const [selectedPay, setSelectedPay] = useState('Wallet');
  const PayAmount=route.params.price
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
    <>
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
        <TouchableOpacity onPress={()=>{
          setSelectedPay('Credit Card')
        }}>
          <View
            style={[
              styles.creditCardContainer,
              {
                borderColor:
                  selectedPay === 'Credit Card' ? '#2ecc72' : '#99AAAB',
              },
            ]}>
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
        </TouchableOpacity>
        {PaymentList.map(({name, icon, isIcon}, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setSelectedPay(name);
            }}>
            {isIcon ? (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#7B8788', '#000']}
                style={[
                  styles.LinearGradeintWallet,
                  {
                    borderColor: selectedPay === name ? '#2ecc72' : '#99AAAB',
                  },
                ]}>
                <View style={styles.WallerRow}>
                  <CustomIcon
                    name="account-balance-wallet"
                    color="#2ecc72"
                    size={30}
                  />
                  <Text style={styles.PaymentTitle}>{name}</Text>
                </View>
                <Text style={styles.PaymentPrice}>$ 100.50</Text>
              </LinearGradient>
            ) : (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#7B8788', '#000']}
                style={[
                  styles.LinearGradeintRegular,
                  {
                    borderColor: selectedPay === name ? '#2ecc72' : '#99AAAB',
                  },
                ]}>
                <Image source={icon} style={styles.PaymentImage} />
                <Text style={styles.PaymentTitle}>{name}</Text>
              </LinearGradient>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
     <View style={styles.bottomContainer}>
     <Text style={styles.cartPrice}>${PayAmount}</Text>
     <TouchableOpacity
       style={styles.buyBtn}
       onPress={() => {
         navigation.navigate('Payment');
       }}>
       <CustomIcon
         name="keyboard-double-arrow-right"
         size={24}
         color="#fff"
       />
       <Text style={styles.BuyTxt}>Pay Now</Text>
     </TouchableOpacity>
   </View>
   </>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  TopContainer: {
    backgroundColor: '#fff',
    paddingVertical: 16,
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
    top: '60%',
  },
  midContainer: {
    marginHorizontal: 4,
    marginTop:20
  },
  creditCardContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
    borderWidth: 3,
    marginHorizontal: 20,
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
  LinearGradeintWallet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    height: 60,
    borderWidth: 3,
    borderRadius: 40,
    paddingHorizontal: 30,
  },
  WallerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  PaymentTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  PaymentPrice: {
    color: '#99AAAB',
    fontWeight: '400',
  },
  LinearGradeintRegular: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    height: 60,
    borderWidth: 3,
    borderRadius: 40,
    paddingHorizontal: 30,
    gap: 20,
  },
  PaymentImage: {
    width: 30,
    height: 30,
  },
  bottomContainer: {
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buyBtn: {
    width: '50%',
    borderWidth: 2,
    paddingVertical: 12,
    backgroundColor: '#2ecc72',
    borderColor: '#2ecc72',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  BuyTxt: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
  },
  cartPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});
