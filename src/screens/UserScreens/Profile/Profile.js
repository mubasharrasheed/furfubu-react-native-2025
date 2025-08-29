import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Fonts from '../../../utils/helper';
import colors from '../../../theme/colors';
import { Svgs } from '../../../assets/svgs';
import { moderateScale } from '../../../utils/scale';
import ZHeader from '../../../components/common/ZHeader';
import ZSafeAreaView from '../../../components/common/ZSafeAreaView';

const Profile = ({ navigation }) => {
  return (
    <ZSafeAreaView>
      <ZHeader
        title="Profile"
        center={true}
        showArrow={false}
        rightIcon={<Svgs.Logout height={25} width={25} />}
      />
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <View style={styles.profileContainer}>
            <Svgs.FubuDp />
            <View style={styles.userInfoContainer}>
              <Text style={styles.userName} numberOfLines={1}>
                John Doe
              </Text>
              <Text style={styles.userEmail} numberOfLines={1}>
                john.doe@example.com
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.editButton}
            activeOpacity={0.6}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Svgs.Edit />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ZSafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(15),
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    paddingHorizontal: moderateScale(10),
  },
  userContainer: {
    width: '100%',
    borderWidth: 0.2,
    padding: moderateScale(10),
    borderColor: colors.greyText,
    borderRadius: moderateScale(10),
    backgroundColor: colors.inputBack,
  },
  userName: {
    maxWidth: '80%',
    color: colors.white,
    fontFamily: Fonts.SemiBold,
    fontSize: moderateScale(20),
  },
  userEmail: {
    maxWidth: '80%',
    color: colors.greyText,
    fontFamily: Fonts.Regular,
    fontSize: moderateScale(12),
  },
  userInfoContainer: {
    flex: 1,
    gap: moderateScale(5),
  },
  editButton: {
    width: '35%',
    borderWidth: 0.2,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    gap: moderateScale(10),
    justifyContent: 'center',
    padding: moderateScale(10),
    borderColor: colors.greyText,
    borderRadius: moderateScale(10),
  },
  editButtonText: {
    color: colors.white,
    fontFamily: Fonts.Regular,
    fontSize: moderateScale(12),
  },
});
