import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ZSafeAreaView from '../../../components/common/ZSafeAreaView';
import ZHeader from '../../../components/common/ZHeader';
import { Svgs } from '../../../assets/svgs';
import { moderateScale } from '../../../utils/scale';
import colors from '../../../theme/colors';

const Camera = () => {
  const rightIcon = (
    <TouchableOpacity style={styles.rightIconContainer}>
      <Svgs.Notification height={25} width={25} />
    </TouchableOpacity>
  );
  return (
    <ZSafeAreaView>
      <ZHeader
        title="Food Analysis"
        center={true}
        showArrow={false}
        rightIcon={rightIcon}
      />
    </ZSafeAreaView>
  );
};

export default Camera;

const styles = StyleSheet.create({
  rightIconContainer: {
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
