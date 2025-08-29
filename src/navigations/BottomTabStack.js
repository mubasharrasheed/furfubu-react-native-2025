import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import colors from '../theme/colors';
import { Svgs } from '../assets/svgs';
import { Images } from '../assets/images';
import FastImage from 'react-native-fast-image';
import Home from '../screens/UserScreens/Home/Home';
import Chart from '../screens/UserScreens/Chart/Chart';
import Camera from '../screens/UserScreens/Camera/Camera';
import Profile from '../screens/UserScreens/Profile/Profile';
import Community from '../screens/UserScreens/Community/Community';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const isSmallDevice = screenWidth < 375;
const isMediumDevice = screenWidth >= 375 && screenWidth < 414;
const isLargeDevice = screenWidth >= 414;

const getResponsiveSize = (small, medium, large) => {
  if (isSmallDevice) return small;
  if (isMediumDevice) return medium;
  return large;
};

export default function BottomTabStack() {
  const renderTabIcon = (routeName, focused) => {
    const style = focused ? styles.iconContainerFocused : styles.iconContainer;

    const iconColor = focused ? colors.white : colors.gray500;
    const iconSize = focused
      ? getResponsiveSize(24, 26, 28)
      : getResponsiveSize(22, 24, 26);

    const IconComponent = () => {
      switch (routeName) {
        case 'Home':
          return (
            <Svgs.Home width={iconSize} height={iconSize} color={iconColor} />
          );
        case 'Chart':
          return (
            <Svgs.Chart width={iconSize} height={iconSize} color={iconColor} />
          );
        case 'Camera':
          return (
            <Svgs.Camera width={iconSize} height={iconSize} color={iconColor} />
          );
        case 'Community':
          return (
            <Svgs.Telecom
              width={iconSize}
              height={iconSize}
              color={iconColor}
            />
          );
        case 'Profile':
          return (
            <Svgs.Profile
              width={iconSize}
              height={iconSize}
              color={iconColor}
            />
          );
        default:
          return null;
      }
    };

    if (focused) {
      return (
        <ImageBackground
          source={Images.circle}
          style={[
            styles.iconContainerFocused,
            routeName === 'Camera' && {
              width: getResponsiveSize(60, 65, 70),
              height: getResponsiveSize(60, 65, 70),
            },
          ]}
        >
          {routeName === 'Camera' && (
            <FastImage
              source={Images.backCam}
              style={{
                width: getResponsiveSize('85%', '90%', '95%'),
                height: getResponsiveSize('85%', '90%', '95%'),
                position: 'absolute',
              }}
            />
          )}
          <IconComponent />
        </ImageBackground>
      );
    }

    return (
      <ImageBackground
        source={Images.circle}
        style={[
          styles.iconContainer,
          routeName === 'Camera' && {
            width: getResponsiveSize(60, 65, 70),
            height: getResponsiveSize(60, 65, 70),
          },
        ]}
      >
        {routeName === 'Camera' && (
          <FastImage
            source={Images.backCam}
            style={{
              width: getResponsiveSize('85%', '90%', '95%'),
              height: getResponsiveSize('85%', '90%', '95%'),
              position: 'absolute',
            }}
          />
        )}
        <IconComponent />
      </ImageBackground>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => renderTabIcon(route.name, focused),
        tabBarStyle: {
          elevation: 4,
          borderColor: colors.gray500 + '40',
          shadowOpacity: 0.1,
          position: 'absolute',
          shadowColor: colors.black,
          left: getResponsiveSize(15, 20, 25),
          right: getResponsiveSize(15, 20, 25),
          backgroundColor: colors.gray500 + '20',
          height: getResponsiveSize(80, 90, 100),
          shadowRadius: getResponsiveSize(6, 8, 10),
          borderRadius: getResponsiveSize(20, 25, 30),
          borderTopWidth: getResponsiveSize(1, 1.5, 2),
          borderLeftWidth: getResponsiveSize(1, 1.5, 2),
          borderRightWidth: getResponsiveSize(1, 1.5, 2),
          shadowOffset: { width: 0, height: getResponsiveSize(2, 4, 6) },
        },
        tabBarItemStyle: {
          paddingTop: getResponsiveSize(15, 20, 25),
          paddingHorizontal: getResponsiveSize(2, 4, 6),
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => renderTabIcon('Home', focused),
        }}
      />
      <Tab.Screen
        name="Chart"
        component={Chart}
        options={{
          tabBarIcon: ({ focused }) => renderTabIcon('Chart', focused),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ focused }) => renderTabIcon('Camera', focused),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({ focused }) => renderTabIcon('Community', focused),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => renderTabIcon('Profile', focused),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: getResponsiveSize(1, 2, 3),
    width: getResponsiveSize(44, 48, 52),
    height: getResponsiveSize(44, 48, 52),
    borderRadius: getResponsiveSize(22, 24, 26),
  },
  iconContainerFocused: {
    alignItems: 'center',
    justifyContent: 'center',
    width: getResponsiveSize(44, 48, 52),
    height: getResponsiveSize(44, 48, 52),
    borderRadius: getResponsiveSize(22, 24, 26),
  },
  activeCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    width: getResponsiveSize(44, 48, 52),
    height: getResponsiveSize(44, 48, 52),
    borderRadius: getResponsiveSize(22, 24, 26),
  },
});
