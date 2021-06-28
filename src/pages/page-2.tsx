/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { PageProps, Link } from 'gatsby';
import { MetaData, Layout } from '../components';

const SecondPage: React.FC<PageProps> = ({ path }) => (
  <Layout>
    <MetaData title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({ path })</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
