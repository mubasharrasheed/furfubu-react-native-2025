import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/Store';
import Routes from './src/navigations/Routes';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/utils/toastConfig';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
        <Toast config={toastConfig} />
      </PersistGate>
    </Provider>
  );
}
