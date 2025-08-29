import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import { useSelector } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';

export default function Routes() {
  const user = useSelector(state => state.user?.user);

  setTimeout(() => {
    RNBootSplash.hide({ fade: true });
  }, 2000);

  return (
    <NavigationContainer>
      {user ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
