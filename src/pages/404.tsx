import React from 'react';
import { MetaData, Layout } from '../components';
import { Error } from '../components/Status';

const NotFoundPage: React.FC = () => (
  <Layout>
    <MetaData title="404: Not found" description="Could not find the site you were looking for..." />
    <Error
      title="Not Found"
      description="You just hit a route that doesn&#39;t exist... the sadness."
    />
  </Layout>
);

export default NotFoundPage;
