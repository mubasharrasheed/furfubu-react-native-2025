import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/Actions';

import ZSafeAreaView from '../../components/common/ZSafeAreaView';
import { Images } from '../../assets/images';
import ZInput from '../../components/common/ZInput';
import ZButton from '../../components/common/ZButton';
import colors from '../../theme/colors';
import Fonts from '../../utils/helper';
import {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from '../../utils/helper';
import ZKeyboard from '../../components/common/ZKeyboard';
import ZHeader from '../../components/common/ZHeader';
import { userService } from '../../apis/server';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Svgs } from '../../assets/svgs';

const Register = ({ navigation }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmError, setConfirmError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    const nameValidation = validateName(name);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const confirmValidation = validateConfirmPassword(password, confirmPass);

    setNameError(nameValidation);
    setEmailError(emailValidation);
    setPasswordError(passwordValidation);
    setConfirmError(confirmValidation);

    if (
      !nameValidation &&
      !emailValidation &&
      !passwordValidation &&
      !confirmValidation
    ) {
      setLoading(true);
      const formData = {
        first_name: name,
        email,
        password,
      };
      try {
        const response = await userService.register(formData);
        await AsyncStorage.setItem('access_token', response.data.token);
        dispatch(setUser(response.data));
        setLoading(false);
      } catch (error) {
        console.log('error', error);
        setLoading(false);
      }
    }
  };

  return (
    <ZSafeAreaView>
      <ZHeader title="" />

      <ZKeyboard
        contentContainerStyle={styles.keyboardContainer}
        bottomPadding={150}
      >
        <View style={styles.content}>
          <View style={styles.topSection}>
            <FastImage
              source={Images.logo}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          <View style={styles.formSection}>
            <ZInput
              label="Name"
              placeholder="Enter your name"
              value={name}
              onChangeText={text => {
                setName(text);
                setNameError('');
              }}
              error={nameError}
              icon={<Svgs.Person width={20} height={20} />}
            />

            <ZInput
              label="Email"
              placeholder="Enter your email"
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
              icon={<Svgs.Lock width={20} height={20} />}
            />

            <ZButton
              title="Sign up"
              style={{ marginTop: 30 }}
              onPress={handleRegister}
              loading={loading}
            />

            <TouchableOpacity
              style={styles.alreadyContainer}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.already}>
                Already have an account? <Text style={styles.login}>Login</Text>
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
  topSection: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  formSection: {
    flex: 1,
    paddingBottom: 50,
    paddingTop: 10,
  },
  image: {
    width: '100%',
    height: 120,
  },
  already: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: Fonts.Medium,
  },
  alreadyContainer: {
    marginTop: 40,
    alignSelf: 'center',
  },
  login: {
    color: colors.red,
  },
});

export default Register;
