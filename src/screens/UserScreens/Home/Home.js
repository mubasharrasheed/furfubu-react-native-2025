import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../../redux/Actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ZSafeAreaView from '../../../components/common/ZSafeAreaView';
import HomeHeader from './components/HomeHeader';

const Home = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user?.user);

  const handleLogout = () => {
    dispatch(clearUser());
    AsyncStorage.removeItem('access_token');
  };

  return (
    <ZSafeAreaView>
      <HomeHeader />
    </ZSafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
