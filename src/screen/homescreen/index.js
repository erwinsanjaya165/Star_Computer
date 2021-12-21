import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {IconSearch} from '../../assets';
import {Warna_Sekunder, Warna_Background} from '../../utils/index';

const Home = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.textStar}>StarCom</Text>
      <Text style={styles.textCom}>Computer Store</Text>
      <View style={styles.boxSerCon}>
        <View style={styles.boxSearch}>
          <TextInput placeholder="search" style={styles.textInput} />
        </View>
        <TouchableOpacity style={styles.boxIconSearch}>
          <IconSearch />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Warna_Background,
  },
  textStar: {
    fontSize: hp('3.5%'),
    marginHorizontal: 25,
    marginTop: '20%',
    fontFamily: 'Poppins-SemiBold',
  },
  textCom: {
    fontSize: hp('2%'),
    marginTop: '-4%',
    marginHorizontal: 25,
    fontFamily: 'Poppins-Light',
  },
  boxSerCon: {
    flexDirection: 'row',
    marginTop: '5%',
    paddingHorizontal: 25,
  },
  boxSearch: {
    width: wp('68%'),
    height: hp('6%'),
    borderRadius: 8,
    backgroundColor: 'white',
    marginRight: 20,
  },
  textInput: {
    width: wp('67%'),
    height: hp('6%'),
    marginLeft: 10,
  },
  boxIconSearch: {
    width: wp('14.3%'),
    height: hp('6%'),
    borderRadius: 8,
    backgroundColor: Warna_Sekunder,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
