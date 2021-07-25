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
    <Layout className="flex flex-col justify-center">
      <LandingPictureMain />
      {isLoggedIn ? (
        <RegisteredLandingNavPanel className="my-2 layout--menu" />
      ) : (
        <UnregisteredLandingNavPanel className="my-2 layout--add" />
      )}
      <PicturesFeed className="layout--content" />
      <RecruitComponent className="layout--add" />
    </Layout>
  );
};

export default IndexPage;
