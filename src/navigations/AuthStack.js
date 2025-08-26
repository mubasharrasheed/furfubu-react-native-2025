import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/AuthScreens/Login';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}