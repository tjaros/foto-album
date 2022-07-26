import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'cross-fetch';
import { getData, Tokens } from '../auth/cookies';

const authLink = setContext((_, { headers }) => {
  const token = getData(Tokens.JWT);
  const authorization = token ? { authorization: `Bearer ${token}` } : {};

  return {
    headers: {
      ...headers,
      ...authorization,
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
