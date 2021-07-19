import React from 'react';
import { Layout } from '../components';
import {
  RegisteredLandingNavPanel, UnregisteredLandingNavPanel, LandingPictureMain, RecruitComponent
} from '../components/landingPage';
import { PicturesFeed } from '../components/landingPage/PicturesFeed';

const IndexPage: React.FC = () => (
  <Layout>
    <LandingPictureMain />
    <UnregisteredLandingNavPanel />
    <RegisteredLandingNavPanel />
    <PicturesFeed />
    <RecruitComponent />
  </Layout>
);

export default IndexPage;
