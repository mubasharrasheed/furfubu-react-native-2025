import React from 'react';
import { SafeAreaView, View, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import { Images } from '../../assets/images';
import FastImage from 'react-native-fast-image';

const ZSafeAreaView = ({ children, ...props }) => {
  const insets = useSafeAreaInsets();
  const marginTop = Platform.OS === 'android' ? insets.top || 0 : 0;

  return (
    <>
      <FastImage
        source={Images.appBackground}
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          position: 'absolute',
          backgroundColor: colors.black,
        }}
      />
      <SafeAreaView
        {...props}
        style={[localStyles(colors, props.style).root, { marginTop }]}
      >
        <View style={{ flex: 1 }}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default ZSafeAreaView;

const localStyles = (colors, style) =>
  StyleSheet.create({
    root: {
      flex: 1,
      ...style,
    },
  });
