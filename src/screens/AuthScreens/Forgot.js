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

const Forgot = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleForgot = () => {
    const emailValidation = validateEmail(email);

    setEmailError(emailValidation);

    if (!emailValidation) {
      // If no errors, proceed to home screen
      Alert.alert('Success', 'Logged in successfully!');
    }
  };

  return (
    <ZSafeAreaView>
      <ZHeader title="" />
      <ZKeyboard contentContainerStyle={{ flex: 1 }}>
        <Svgs.Forgot width={300} height={300} style={styles.logo} />
        <View style={styles.container}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.description}>
            Enter your email to reset your password
          </Text>
          <ZInput
            label="Email"
            placeholder="Enter Email"
            value={email}
            onChangeText={text => {
              setEmail(text);
              setEmailError('');
            }}
            error={emailError}
          />
          <ZButton
            title="Send"
            onPress={handleForgot}
            style={{ marginTop: 20 }}
          />
        </View>
      </ZKeyboard>
    </ZSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  logo: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.Medium,
    color: colors.white,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontFamily: Fonts.Regular,
    color: colors.white,
    marginBottom: 30,
    textAlign: 'center',
  },
});
export default Forgot;
