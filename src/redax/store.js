import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactFormReducer } from './contactFormReduсer';

const contactFormConfig = {
  key: 'contactForm',
  storage,
  whitelist: ['contacts'],
  //   blacklist: ['filter'], //записуєм яке не хочемо дабавляти в локал
};

export const store = configureStore({
  reducer: persistReducer(contactFormConfig, contactFormReducer),

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
