import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { persistor, store } from 'redax/store';

import App from 'components/App';

import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
