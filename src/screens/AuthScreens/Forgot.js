import { useState } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { Svgs } from '../../assets/svgs';
import ZButton from '../../components/common/ZButton';
import ZHeader from '../../components/common/ZHeader';
import ZInput from '../../components/common/ZInput';
import ZKeyboard from '../../components/common/ZKeyboard';
import ZSafeAreaView from '../../components/common/ZSafeAreaView';
import Fonts, { validateEmail } from '../../utils/helper';
import colors from '../../theme/colors';
import { userService } from '../../apis/server';
import Toast from 'react-native-toast-message';

const Forgot = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgot = async () => {
    const emailValidation = validateEmail(email);

    setEmailError(emailValidation);

    if (!emailValidation) {
      setLoading(true);
      const formData = {
        email,
      };
      try {
        const response = await userService.forgotPassword(formData);
        if (response.status) {
          Toast.show({
            type: 'success',
            text1: 'Forgot Password successful',
            text2: 'Please check your email for the verification code',
          });
          navigation.navigate('OtpVerify', {
            email,
            token: response.data.token,
          });
          setLoading(false);
        }
      } catch (error) {
        console.log('Error Response:', error.response.data.message);
        Toast.show({
          type: 'error',
          text1: 'Forgot Password failed',
          text2: `${error.response.data.message || 'Please try again'}`,
        });
        setLoading(false);
      }
    }
  };

  return (
    <ZSafeAreaView>
      <ZHeader title="" />
      <ZKeyboard contentContainerStyle={styles.keyboardContainer}>
        <View style={styles.content}>
          <View style={styles.topSection}>
            <Svgs.Forgot width={200} height={200} style={styles.logo} />
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.description}>
              Enter your email to reset your password
            </Text>
          </View>

          <View style={styles.formSection}>
            <ZInput
              label="Email"
              placeholder="Enter Email"
              value={email}
              onChangeText={text => {
                setEmail(text.toLowerCase());
                setEmailError('');
              }}
              error={emailError}
              icon={<Svgs.Mail width={20} height={20} />}
            />
            <ZButton
              title="Send"
              onPress={handleForgot}
              style={{ marginTop: 20 }}
              loading={loading}
            />
          </View>
        </View>
      </ZKeyboard>
    </ZSafeAreaView>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topSection: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  formSection: {
    justifyContent: 'flex-start',
    paddingBottom: 30,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts.Bold,
    color: colors.white,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontFamily: Fonts.Regular,
    color: colors.white,
    marginBottom: 20,
    textAlign: 'center',
    opacity: 0.8,
  },
});
export default Forgot;
