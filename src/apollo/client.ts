import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.STRAPI_GRAPHQL_ENDPOINT,
    fetch
  }),
  cache: new InMemoryCache()
});

export default client;
