import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import ZSafeAreaView from '../../components/common/ZSafeAreaView';
import ZHeader from '../../components/common/ZHeader';
import ZKeyboard from '../../components/common/ZKeyboard';
import { Svgs } from '../../assets/svgs';
import colors from '../../theme/colors';
import ZInput from '../../components/common/ZInput';
import ZButton from '../../components/common/ZButton';
import { validateConfirmPassword, validatePassword } from '../../utils/helper';
import { userService } from '../../apis/server';
import Toast from 'react-native-toast-message';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmError, setConfirmError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    console.log('password', password);
    const passwordValidation = validatePassword(password);
    const confirmValidation = validateConfirmPassword(password, confirmPass);

    setPasswordError(passwordValidation);
    setConfirmError(confirmValidation);

    if (passwordValidation && confirmValidation) {
      try {
        const response = await userService.createNewPassword({
          password,
        });
        if (response.status) {
          Toast.show({
            type: 'success',
            text1: 'Reset Password successful',
            text2: 'Your password has been reset successfully',
          });
        }
        console.log(response);
        setLoading(false);
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Reset Password failed',
          text2: `${error.response.data.message || 'Please try again'}`,
        });
        console.log(error);
      } finally {
        setLoading(false);
      }
      setLoading(true);
    }
  };

  return (
    <ZSafeAreaView>
      <ZHeader title="" center={true} />

      <ZKeyboard
        contentContainerStyle={styles.keyboardContainer}
        bottomPadding={150}
      >
        <View style={styles.passContainer}>
          <Svgs.Pass height={200} width={200} color={colors.white} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.description}>
            Enter your new password to reset your account.
          </Text>
        </View>
        <View style={styles.formContainer}>
          <ZInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={text => {
              setPassword(text);
              setPasswordError('');
            }}
            secureTextEntry
            error={passwordError}
          />

          <ZInput
            label="Confirm Password"
            placeholder="Re-enter password"
            value={confirmPass}
            onChangeText={text => {
              setConfirmPass(text);
              setConfirmError('');
            }}
            secureTextEntry
            error={confirmError}
          />
          <ZButton
            title="Reset Password"
            onPress={handleResetPassword}
            style={{ marginTop: 20 }}
            loading={loading}
          />
        </View>
      </ZKeyboard>
    </ZSafeAreaView>
  );
};

const styles = StyleSheet.create({
  passContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardContainer: {
    flexGrow: 1,
  },
  content: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  description: {
    fontSize: 16,
    color: colors.white,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
});

export default ResetPassword;
