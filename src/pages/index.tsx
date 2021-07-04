import React from 'react';
import { Link } from 'gatsby';
import { MetaData, Layout } from '../components';

const IndexPage: React.FC = () => (
  <Layout>
    <MetaData title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>{/* <Image /> */}</div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
  </Layout>
);

export default IndexPage;