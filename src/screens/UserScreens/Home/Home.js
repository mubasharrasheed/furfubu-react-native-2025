import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../../redux/Actions';

const Home = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
  };
  return (
    <View style={{ marginTop: 100 }}>
      <Button onPress={handleLogout} title='log out' />
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
