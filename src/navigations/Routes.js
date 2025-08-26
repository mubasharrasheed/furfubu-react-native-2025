import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import { useSelector } from 'react-redux';

export default function Routes() {
  const user = useSelector(state => state.user);
  console.log('Routes ==> ', user);

  return (
    <NavigationContainer>
      {user ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
}