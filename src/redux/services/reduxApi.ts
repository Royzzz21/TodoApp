import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import appConfig from '../../../env';

export const reduxApi = createApi({
	reducerPath: 'reduxApi',
	tagTypes: ['home',],
	refetchOnReconnect: true,
	refetchOnFocus: true,
	baseQuery: fetchBaseQuery({
		baseUrl: appConfig.server,
		prepareHeaders: (headers, { getState }) => {
			// to do when adding header ex: token from state
			return headers;
		},
	}),
	endpoints: () => ({}),
});