import React from 'react';
import { Layout } from '../components';
import { ModelInfo, ModelNav } from '../components/model';

const name = 'Kim So Ri';
const avatarLink = 'https://asianwiki.com/images/0/07/Kim_So-Ri-1990-p1.jpg';
const location = 'Seoul, Korea';
const description =
  'Kim So-ri (born July 21, 1990), professionally known by the mononym Sori,\
                  is a South Korean singer and actress. She is a former member of the duo \
                  CocoSori and the project girl group Real Girls Project.';
const stats = {
  age: 31,
  height: 161,
  eyeColor: 'blue',
  hairColor: 'dark brown',
  bustLine: 90,
  waistLine: 60
};

const model: React.FC = () => (
  <Layout>
    <ModelInfo
      name={name}
      avatarLink={avatarLink}
      location={location}
      description={description}
      stats={stats}
    />
    <ModelNav />
  </Layout>
);

export default model;
