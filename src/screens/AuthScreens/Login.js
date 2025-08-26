import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from '../../redux/Actions';

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleLogin = () => {
    dispatch(setUser({ name: 'Ahsan', password: '123456' }));
  };

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {user ? (
        <>
          <Text style={{ fontSize: 20 }}>Welcome {user.name}!</Text>
          <Text>Password: {user.password}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
    </View>
  );
};

export default Login;
