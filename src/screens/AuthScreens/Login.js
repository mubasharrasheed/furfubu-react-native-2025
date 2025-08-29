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
import { userService } from '../../apis/server';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Svgs } from '../../assets/svgs';
import Toast from 'react-native-toast-message';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = async () => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setEmailError(emailValidation);
    setPasswordError(passwordValidation);

    if (!emailValidation && !passwordValidation) {
      try {
        setLoading(true);
        const response = await userService.login({ email, password });
        if (response.status) {
          await AsyncStorage.setItem('access_token', response.data.token);
          dispatch(setUser(response.data));
          setLoading(false);
          Toast.show({
            type: 'success',
            text1: 'Login successful',
            text2: 'Welcome back',
          });
        }
      } catch (error) {
        setLoading(false);
        console.log('Error Response:', error.response.data.message);
        Toast.show({
          type: 'error',
          text1: 'Login failed',
          text2: `${error.response.data.message || 'Please try again'}`,
        });
      }
    }
  };

  return (
    <ZSafeAreaView>
      <ZKeyboard
        contentContainerStyle={styles.keyboardContainer}
        bottomPadding={120}
      >
        <View style={styles.content}>
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
                setEmail(text.toLowerCase());
                setEmailError('');
              }}
              error={emailError}
              icon={<Svgs.Mail width={20} height={20} />}
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
              icon={<Svgs.Lock width={20} height={20} />}
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
              loading={loading}
            />

            {/* <Text style={styles.donthave}>
              Don’t have an account?{' '}
              <Text
                style={styles.signUp}
                onPress={() => navigation.navigate('Register')}
              >
                Sign Up
              </Text>
            </Text> */}
            <TouchableOpacity
              style={styles.alreadyContainer}
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={styles.already}>
                Don’t have an account? <Text style={styles.login}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
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
  image: {
    width: '100%',
    height: '35%',
  },
  container: {
    flex: 1,
    // paddingHorizontal: 20,
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
  alreadyContainer: {
    padding: 5,
    marginTop: 40,
    alignSelf: 'center',
  },
  already: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: Fonts.Medium,
  },
  login: {
    color: colors.red,
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
