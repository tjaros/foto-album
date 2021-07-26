import React from 'react';
import { RecruitForm } from '../components/Form';
import { Layout, MetaData } from '../components';

const recruit: React.FC = () => (
  <Layout>
    <MetaData title="ModAg | Recruiting" description="Sign up to become a new model" />
    <RecruitForm className="layout--content" />
  </Layout>
);

export default recruit;
