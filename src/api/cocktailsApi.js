import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const cocktailsApi = createApi({
  reducerPath: 'cocktailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINT }),
  endpoints: (builder) => ({
    getCocktail: builder.query({
      query: (cocktailCode) => `search.php?s=${cocktailCode}`,
    }),
  }),
});

export const { useGetCocktailQuery } = cocktailsApi;

export default cocktailsApi;
