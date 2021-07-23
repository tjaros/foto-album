import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface MetaDataContent {
  name?: string;
  property?: string;
  content?: string;
}

interface MetaDataProps {
  description?: string;
  lang?: string;
  meta?: MetaDataContent[];
  title: string;
}

const MetaData: React.FC<MetaDataProps> = ({
  description = '', lang = 'en', meta = [], title
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription: string = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  const baseMetaData: MetaDataContent[] = [
    { name: 'description', content: metaDescription },
    { property: 'og:title', content: title },
    { property: 'og:description', content: metaDescription },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: site.siteMetadata?.author || '' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: metaDescription }
  ];

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={defaultTitle && `%s | ${defaultTitle}`}
      meta={baseMetaData.concat(meta)}
    />
  );
};

export default MetaData;
