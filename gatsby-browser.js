/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import { RecoilRoot } from 'recoil';
import { ApolloProvider } from '@apollo/client';
import client from './src/apollo';

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <RecoilRoot>{element}</RecoilRoot>
  </ApolloProvider>
);

