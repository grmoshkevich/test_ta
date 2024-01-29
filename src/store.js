import { configureStore } from '@reduxjs/toolkit';
import { cocktailsApi } from './api/cocktailsApi';

const store = configureStore({
  reducer: {
    [cocktailsApi.reducerPath]: cocktailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cocktailsApi.middleware),
});

export default store;
