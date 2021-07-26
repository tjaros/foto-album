import React from 'react';
import { RegisterForm } from '../components/Form';
import { Layout, MetaData } from '../components';

const recruit: React.FC = () => (
  <Layout>
    <MetaData
      title="ModAg | Register"
      description="Sign up to become our member and view premium content"
    />
    <RegisterForm className="layout--content" />
  </Layout>
);

export default recruit;
