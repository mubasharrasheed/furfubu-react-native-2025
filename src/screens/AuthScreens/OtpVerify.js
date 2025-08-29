import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ZHeader from '../../components/common/ZHeader';
import ZSafeAreaView from '../../components/common/ZSafeAreaView';
import ZKeyboard from '../../components/common/ZKeyboard';
import Fonts from '../../utils/helper';
import colors from '../../theme/colors';
import { Svgs } from '../../assets/svgs';
import { OtpInput } from 'react-native-otp-entry';
import ZButton from '../../components/common/ZButton';
import { useState } from 'react';
import { userService } from '../../apis/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OtpVerify = ({ navigation, route }) => {
  const { email, token } = route.params;
  const [otp, setOtp] = useState('');
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOtpChange = text => {
    setOtp(text);
  };

  const handleVerify = async () => {
    setLoading(true);
    const formData = {
      email: email,
      pinCode: otp,
    };
    try {
      await AsyncStorage.setItem('access_token', token);
      const response = await userService.VerifyOtp(formData);
      if (response.status) {
        setLoading(false);
        navigation.navigate('ResetPassword');
      }
    } catch (error) {
      await AsyncStorage.removeItem('access_token');
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ZSafeAreaView>
      <ZHeader title="" />
      <ZKeyboard contentContainerStyle={styles.keyboardContainer}>
        <View style={styles.topSection}>
          <Svgs.Otp width={200} height={200} style={styles.logo} />
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.description}>
            Enter the 4-digit code sent to your email
          </Text>
        </View>
        <View style={styles.otpContainer}>
          <OtpInput
            autoFocus={true}
            hideStick={true}
            numberOfDigits={6}
            focusColor={colors.primary}
            blurOnFilled={true}
            disabled={false}
            type="numeric"
            secureTextEntry={false}
            onTextChange={handleOtpChange}
            value={otp}
            onFilled={text => console.log(`OTP is ${text}`)}
            theme={{
              focusStickStyle: styles.focusStick,
              pinCodeTextStyle: styles.pinCodeText,
              containerStyle: styles.otpInputContainer,
              placeholderTextStyle: styles.placeholderText,
              pinCodeContainerStyle: styles.pinCodeContainer,
              filledPinCodeContainerStyle: styles.pinCodeContainer,
            }}
          />
        </View>
        <ZButton
          title={'Verify'}
          disabled={false}
          onPress={handleVerify}
          loading={loading}
          style={styles.verifyButton}
        />
      </ZKeyboard>
    </ZSafeAreaView>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flexGrow: 1,
  },
  topSection: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts.Bold,
    color: colors.white,
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    fontFamily: Fonts.Regular,
    color: colors.white,
  },
  otpContainer: {
    // flex: 1,
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  focusStick: {
    backgroundColor: colors.primary,
  },
  pinCodeText: {
    color: colors.white,
  },
  otpInputContainer: {
    width: '100%',
  },
  placeholderText: {
    color: colors.white,
  },
  pinCodeContainer: {
    backgroundColor: colors.inputBack,
  },
  verifyButton: {
    marginTop: 20,
    width: '90%',
  },
});

export default OtpVerify;
