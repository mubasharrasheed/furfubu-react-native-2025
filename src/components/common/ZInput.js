import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../../theme/colors';
import { Svgs } from '../../assets/svgs';
import Fonts from '../../utils/helper';

const ZInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  style,
  error,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const showPasswordToggle = secureTextEntry;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.inputWrapper,
          error ? { borderColor: colors.red || 'red' } : {},
        ]}
      >
        <TextInput
          style={[styles.input, style]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={showPasswordToggle && !isPasswordVisible}
          keyboardType={keyboardType}
          placeholderTextColor='#999'
        />
        {showPasswordToggle && (
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <Svgs.Eye width={20} height={20} />
            ) : (
              <Svgs.Hide_Eye width={20} height={20} />
            )}
          </TouchableOpacity>
        )}
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: colors.white,
    fontFamily: Fonts.Bold,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 20,
    backgroundColor: colors.inputBack,
    height: 50,
    paddingRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#fff',
    paddingHorizontal: 15,
    fontFamily: Fonts.Bold,
    height: 50,
  },
  eyeIcon: {
    paddingHorizontal: 4,
  },
  errorText: {
    color: colors.red,
    marginTop: 4,
    fontSize: 12,
  },
});

export default ZInput;
