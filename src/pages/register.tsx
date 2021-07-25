import React from 'react';
import { RegisterForm } from '../components/Form';
import { Layout } from '../components';

const recruit: React.FC = () => (
  <Layout>
    <div className="flex justify-center my-40">
      <RegisterForm />
    </div>
  </Layout>
);

export default recruit;
