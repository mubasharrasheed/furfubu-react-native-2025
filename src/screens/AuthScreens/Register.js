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

  const handleRegister = () => {
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
      dispatch(setUser({ name, email }));
      Alert.alert('Success', 'Account created successfully!');
    }
  };

  return (
    <ZSafeAreaView>
      <ZHeader title="" />

      <ZKeyboard contentContainerStyle={{ flex: 1 }}>
        <FastImage
          source={Images.logo}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.container}>
          <ZInput
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChangeText={text => {
              setName(text);
              setNameError('');
            }}
            error={nameError}
          />

          <ZInput
            label="Email"
            placeholder="Enter your email"
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
            title="Sign up"
            style={{ marginTop: 30 }}
            onPress={handleRegister}
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
      </ZKeyboard>
    </ZSafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '25%',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
