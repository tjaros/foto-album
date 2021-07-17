import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.STRAPI_GRAPHQL_ENDPOINT,
    fetch
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          albums: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            }
          },
          reviews: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            }
          }
        }
      }
    }
  })
});

export default client;
