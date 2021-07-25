import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { uniqBy } from 'lodash';
import { Link } from 'gatsby';
import { TableGrid } from '../../Grid';
import { Portrait } from '../../Image';
import { Loader, StatusMessage, Error } from '../../Status';

interface WorkedWithProps {
  modelId: number;
  className?: string;
}

interface PhotographerInfo {
  id: number;
  name: string;
  slug: string;
  avatar: {
    url: string;
  }[];
}

interface ModelPhotographers {
  model: {
    albums: {
      photographer: PhotographerInfo;
    }[];
  };
}

const GET_PHOTOGRAPHERS = gql`
  query GetCollaborators($modelId: ID!) {
    model(id: $modelId) {
      albums {
        photographer {
          id
          name
          slug
          avatar {
            url
          }
        }
      }
    }
  }
`;

const WorkedWith: React.FC<WorkedWithProps> = ({ modelId, className = '' }) => {
  const { loading, error, data } = useQuery<ModelPhotographers>(GET_PHOTOGRAPHERS, {
    variables: { modelId }
  });

  if (loading) return <Loader />;
  if (error) return <Error title="Could not load the collaborators." description="Try again later." />;

  if (!data?.model?.albums?.length) {
    return (
      <StatusMessage>
        <span>Seems like there are no official collaborators yet.</span>
      </StatusMessage>
    );
  }

  const allPhotographers = data?.model.albums.map((album) => album.photographer);
  const uniqPhotographers = uniqBy(allPhotographers, 'id');

  return (
    <TableGrid className={`table-grid--4 mt-5 ${className}`}>
      {uniqPhotographers.map((photographer) => (
        <Link to={`/photographer/${photographer.slug}`}>
          <Portrait
            key={photographer.id}
            personName={photographer.name}
            imageLink={photographer.avatar[0].url}
          />
        </Link>
      ))}
    </TableGrid>
  );
};

export default WorkedWith;
