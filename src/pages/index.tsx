import React from 'react';
import { Layout } from '../components';
import {
  RegisteredLandingNavPanel, UnregisteredLandingNavPanel, LandingPictureMain, RecruitComponent
} from '../components/landingPage';
import { PicturesFeed } from '../components/landingPage/PicturesFeed';
import { useAuth } from '../hooks';

const IndexPage: React.FC = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Layout>
      <LandingPictureMain />
      {isLoggedIn ? <RegisteredLandingNavPanel /> : <UnregisteredLandingNavPanel />}
      <PicturesFeed />
      <RecruitComponent />
    </Layout>
  );
};

export default IndexPage;
