import React from 'react';
import { MetaData, Layout } from '../components';
import Error from '../components/Error';

const NotFoundPage: React.FC = () => (
  <Layout>
    <MetaData title="404: Not found" />
    <Error
      title="Not Found"
      description="You just hit a route that doesn&#39;t exist... the sadness."
    />
  </Layout>
);

export default NotFoundPage;
