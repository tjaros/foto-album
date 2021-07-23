import React from 'react';
import { RecruitForm } from '../components/Form';
import Layout from '../components/layout/Layout';

const recruit: React.FC = () => (
  <Layout>
    <div className="flex justify-center">
      <RecruitForm />

    </div>
  </Layout>
);

export default recruit;
