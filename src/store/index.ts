import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { dashboardApi } from '@features/dashboard/store';
import { authenticationApi, authenticationReducer } from '@features/authentication/store';
import { catalogueApi, catalogueReducer } from '@features/catalogue/store';
import { chatApi, chatReducer } from '@features/chat/store';

const appReducer = combineReducers({
  authentication: authenticationReducer,
  catalogue: catalogueReducer,
  chat: chatReducer,
  [authenticationApi.reducerPath]: authenticationApi.reducer,
  [catalogueApi.reducerPath]: catalogueApi.reducer,
  [chatApi.reducerPath]: chatApi.reducer,
  [dashboardApi.reducerPath]: dashboardApi.reducer,
});

const rootReducer = (state: ReturnType<typeof appReducer> | undefined, action: AnyAction) => {
  if (action.type === 'authentication/logout') {
    storage.removeItem('persist:autoParts');

    state = undefined;
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: 'autoParts',
  storage,
  whitelist: ['authentication', 'catalogue', 'chat'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authenticationApi.middleware)
      .concat(catalogueApi.middleware)
      .concat(chatApi.middleware)
      .concat(dashboardApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
