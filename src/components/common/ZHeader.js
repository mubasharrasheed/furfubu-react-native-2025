import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Svgs } from '../../assets/svgs';
import colors from '../../theme/colors';
import Fonts from '../../utils/helper';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from '../../utils/scale';

const ZHeader = ({
  title,
  onBack,
  center = false,
  showArrow = true,
  rightIcon,
  onRightPress,
  titleStyle,
  containerStyle,
  arrowColor = colors.white,
  titleColor = colors.white,
}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        // { paddingTop: Platform.OS === 'ios' ? insets.top : 10 },
        containerStyle,
      ]}
    >
      <View
        style={[
          styles.content,
          {
            justifyContent: center ? 'center' : 'flex-start',
            alignItems: 'center',
          },
        ]}
      >
        {/* Left Section - Back Arrow */}
        <View
          style={[
            styles.leftSection,
            {
              flex: center ? 0 : 0,
              position: center ? 'absolute' : 'relative',
              left: center ? moderateScale(0) : 0,
              zIndex: center ? 1 : 0,
            },
          ]}
        >
          {showArrow && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={onBack || navigation.goBack}
              activeOpacity={0.7}
            >
              <Svgs.ArrowLeft width={24} height={24} fill={arrowColor} />
            </TouchableOpacity>
          )}
        </View>

        {/* Center Section - Title */}
        <View
          style={[
            styles.centerSection,
            {
              flex: center ? 1 : 1,
              alignItems: center ? 'center' : 'flex-start',
              justifyContent: center ? 'center' : 'flex-start',
              paddingLeft: center ? 0 : 0,
              paddingRight: center ? 0 : 15,
              width: center ? '100%' : 'auto',
            },
          ]}
        >
          {title && (
            <Text
              style={[
                center ? styles.centeredTitle : styles.title,
                { color: titleColor },
                titleStyle,
              ]}
              numberOfLines={1}
            >
              {title}
            </Text>
          )}
        </View>

        {/* Right Section - Right Icon */}
        <View
          style={[
            styles.rightSection,
            {
              flex: center ? 0 : 0,
              position: center ? 'absolute' : 'relative',
              right: center ? moderateScale(0) : 0,
              zIndex: center ? 1 : 0,
              paddingRight: center ? 0 : moderateScale(15),
            },
          ]}
        >
          {rightIcon && (
            <TouchableOpacity
              style={styles.rightButton}
              onPress={onRightPress}
              activeOpacity={0.7}
            >
              {rightIcon}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    // paddingHorizontal: 15,
    // paddingBottom: 10,
    // paddingVertical: 10,
    paddingHorizontal: moderateScale(15),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    // minHeight: 44,
  },
  leftSection: {
    alignItems: 'center',
  },
  centerSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerAligned: {
    alignItems: 'center',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  backButton: {
    // padding: 8,
    paddingVertical: moderateScale(10),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  rightButton: {
    // padding: moderateScale(8),
    borderRadius: moderateScale(20),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.SemiBold,
    textAlign: 'left',
  },
  centeredTitle: {
    textAlign: 'center',
    fontSize: moderateScale(18),
    fontFamily: Fonts.Bold,
    // backgroundColor: 'red',
  },
});

export default ZHeader;
