import React from 'react';
import { Link } from 'gatsby';
import { MetaData, Layout, ColumnsLayout } from '../components';
import { RegisteredLandingNavPanel, UnregisteredLandingNavPanel, LandingPictureMain, RecruitComponent } from '../components/landingPage';
import PicturesFeed from '../components/landingPage/PicturesFeed';



const IndexPage: React.FC = () => (
  <Layout>
    <LandingPictureMain />
    <UnregisteredLandingNavPanel />
    <RegisteredLandingNavPanel />
    <PicturesFeed />
    <RecruitComponent />

    {/* <MetaData title="Home" />
    <h1>Hi people</h1>
    <ColumnsLayout>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
    </ColumnsLayout>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>{/* <Image /> *</div>/}
    // <Link to="/page-2/">Go to page 2</Link>
    // <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link> */}
  </Layout>
);

export default IndexPage;
