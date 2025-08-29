import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Svgs } from '../../../../assets/svgs';
import colors from '../../../../theme/colors';
import { moderateScale } from '../../../../utils/scale';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Svgs.AppLogo />
      <TouchableOpacity style={styles.notificationContainer}>
        <Svgs.Notification />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: moderateScale(10),
  },
  notificationContainer: {
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(40),
    height: moderateScale(40),
    padding: moderateScale(10),
    backgroundColor: colors.gray,
    borderRadius: moderateScale(20),
  },
});
