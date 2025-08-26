import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabStack from '../navigations/BottomTabStack'

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
    </Stack.Navigator>
  );
}
