import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import './App.css'

function App() {
  const routing = useRoutes(routes);
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        {routing}
      </ThemeProvider>
    </PersistGate>
  </Provider>
  );
}

export default App;
