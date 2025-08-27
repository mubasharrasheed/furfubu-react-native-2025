import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/Actions';

import FastImage from 'react-native-fast-image';
import { Images } from '../../assets/images';
import ZButton from '../../components/common/ZButton';
import ZInput from '../../components/common/ZInput';
import ZKeyboard from '../../components/common/ZKeyboard';
import ZSafeAreaView from '../../components/common/ZSafeAreaView';
import colors from '../../theme/colors';
import Fonts, { validateEmail, validatePassword } from '../../utils/helper';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setEmailError(emailValidation);
    setPasswordError(passwordValidation);

    if (!emailValidation && !passwordValidation) {
      // If no errors, proceed to home screen
      dispatch(setUser({ email, password }));
      Alert.alert('Success', 'Logged in successfully!');
    }
  };

  return (
    <ZSafeAreaView>
      <ZKeyboard contentContainerStyle={{ flex: 1 }}>
        <FastImage
          source={Images.logo}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.container}>
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
          <TouchableOpacity
            style={styles.forgotContainer}
            onPress={() => navigation.navigate('Forgot')}
          >
            <Text style={styles.forgotText}>Forgot password</Text>
          </TouchableOpacity>

          <ZButton
            title="Sign in"
            style={{ marginTop: 40 }}
            onPress={handleLogin}
          />

          <Text style={styles.donthave}>
            Don’t have an account?{' '}
            <Text
              style={styles.signUp}
              onPress={() => navigation.navigate('Register')}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </ZKeyboard>
    </ZSafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '35%',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  forgotContainer: {
    padding: 5,
    alignSelf: 'flex-end',
  },
  forgotText: {
    color: colors.white,
    fontSize: 15,
    fontFamily: Fonts.Regular,
  },
  donthave: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: Fonts.Medium,
    marginTop: 50,
  },
  signUp: {
    color: colors.red,
  },
});

export default Login;
