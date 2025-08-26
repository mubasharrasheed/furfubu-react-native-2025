import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/UserScreens/Home/Home';
import Chart from '../screens/UserScreens/Chart/Chart';
import Camera from '../screens/UserScreens/Camera/Camera';
import Community from '../screens/UserScreens/Community/Community';
import Profile from '../screens/UserScreens/Profile/Profile';

const Tab = createBottomTabNavigator();

export default function BottomTabStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 5,
          backgroundColor: '#ffffff',
          borderRadius: 20,
          height: 85, // ✅ bar size stays as you like
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 5,
        },
        // ✅ NEW: center icons vertically
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIconStyle: {
          marginTop: '25%', // remove default padding
        },
      }}
    >
      {/* Home Tab */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/000000/home.png',
              }}
              style={[
                styles.icon,
                { tintColor: focused ? '#ff6347' : '#748c94' },
              ]}
            />
          ),
        }}
      />

      {/* Chart Tab */}
      <Tab.Screen
        name="Chart"
        component={Chart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/000000/combo-chart.png',
              }}
              style={[
                styles.icon,
                { tintColor: focused ? '#ff6347' : '#748c94' },
              ]}
            />
          ),
        }}
      />

      {/* Middle Floating Camera Tab */}
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/ffffff/camera.png',
              }}
              style={[
                styles.icon,
                { tintColor: focused ? '#ff6347' : '#748c94' },
              ]}
            />
          ),
        }}
      />

      {/* Community Tab */}
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/000000/conference.png',
              }}
              style={[
                styles.icon,
                { tintColor: focused ? '#ff6347' : '#748c94' },
              ]}
            />
          ),
        }}
      />

      {/* Profile Tab */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/000000/user.png',
              }}
              style={[
                styles.icon,
                { tintColor: focused ? '#ff6347' : '#748c94' },
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
