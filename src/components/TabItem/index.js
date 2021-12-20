import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconAkun,
  IconAkunAktif,
  IconCart,
  IconCartAktif,
  IconHome,
  IconHomeAktif,
} from '../../assets';
import {Warna_Utama, Warna_Sekunder} from '../../utils/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TabItem = ({label, isFocused, onPress, onLongPress}) => {
  const Icon = () => {
    if (label === 'HOME') {
      return isFocused ? <IconHomeAktif /> : <IconHome />;
    }
    if (label === 'CART') {
      return isFocused ? <IconCartAktif /> : <IconCart />;
    }
    if (label === 'AKUN') {
      return isFocused ? <IconAkunAktif /> : <IconAkun />;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={isFocused ? styles.containerFocus : styles.container}>
      <Icon />
      {isFocused && <Text style={styles.text}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    padding: 5,
  },
  containerFocus: {
    alignContent: 'center',
    padding: 5,
    backgroundColor: Warna_Sekunder,
    borderRadius: 10,
    flexDirection: 'row',
  },
  text: {
    color: Warna_Utama,
    fontSize: hp('2%'),
    marginLeft: 5,
    fontFamily: 'Poppins-Bold',
  },
});
