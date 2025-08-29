import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabStack from '../navigations/BottomTabStack';
import EditProfile from '../screens/UserScreens/Profile/EditProfile';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}
