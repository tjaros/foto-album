import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'cross-fetch';
import { getToken } from '../auth/cookies';

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(new HttpLink({
    uri: process.env.STRAPI_GRAPHQL_ENDPOINT,
    fetch
  })),
  cache: new InMemoryCache(),
});

export default client;
