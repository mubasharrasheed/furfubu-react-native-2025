import { createStackNavigator } from '@react-navigation/stack';
import Forgot from '../screens/AuthScreens/Forgot';
import Login from '../screens/AuthScreens/Login';
import Register from '../screens/AuthScreens/Register';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Forgot' component={Forgot} />
    </Stack.Navigator>
  );
}
