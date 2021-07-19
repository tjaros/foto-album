import React from 'react';
import Layout from '../components/layout/Layout';
import RecruitForm from '../components/recruitPage/RecruitForm';

const recruit: React.FC = () => (
  <Layout>
    <div className="flex justify-center">
      <RecruitForm />

    </div>
  </Layout>
);

export default recruit;
