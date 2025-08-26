import {legacy_createStore as createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './Reducers';

const persistConfig = {
  key: 'user',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
