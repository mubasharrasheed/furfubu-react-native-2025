import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ZSafeAreaView from '../../../components/common/ZSafeAreaView';
import ZHeader from '../../../components/common/ZHeader';
import { moderateScale } from '../../../utils/scale';
import { Svgs } from '../../../assets/svgs';
import colors from '../../../theme/colors';

const EditProfile = () => {
  return (
    <ZSafeAreaView>
      <ZHeader title="Edit Profile" center={true} />
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Svgs.FubuDp height={moderateScale(100)} width={moderateScale(100)} />
          <Svgs.Edit
            height={moderateScale(20)}
            width={moderateScale(20)}
            style={styles.editIcon}
          />
        </View>
      </View>
    </ZSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(15),
  },
  profileContainer: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(100),
    backgroundColor: colors.inputBack,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  editIcon: {
    position: 'absolute',
    bottom: moderateScale(-5),
    right: 0,
  },
});

export default EditProfile;
