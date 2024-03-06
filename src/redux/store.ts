import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	persistStore,
} from 'redux-persist';
import { reduxApi } from './services/reduxApi';
import HomeSlice from './Slice/HomeSlice/HomeSlice';
import UserSlice from './Slice/UserSlice/UserSlice';
import AuthSlice from './Slice/AuthSlice/AuthSlice';
import TaskSlice from './Slice/TaskSlice/TaskSlice';
import appConfig from '../../env';

const rootReducer = combineReducers({
	[reduxApi.reducerPath]: reduxApi.reducer,
	home: HomeSlice,
    user: UserSlice,
    auth: AuthSlice,
    task: TaskSlice
});

const persistedReducer = persistReducer(
	{
		key: 'root',
		storage: AsyncStorage,
		blacklist: ['home'],
        whitelist: ['user', 'auth', 'task']
	},
	rootReducer
);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(reduxApi.middleware),
	devTools: appConfig.env !== 'production',
});
setupListeners(store.dispatch);
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;