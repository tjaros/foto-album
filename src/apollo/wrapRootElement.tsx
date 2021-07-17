import React from 'react';
import { RecoilRoot } from 'recoil';
import { ApolloProvider } from '@apollo/client';
import client from './client';

const wrapRootElement: React.FC = ({ element }) => (
  <ApolloProvider client={client}>
    <RecoilRoot>{element}</RecoilRoot>
  </ApolloProvider>
);

export default wrapRootElement;
