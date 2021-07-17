import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Review from './Review';

const REVIEWS_QUERY = gql`
  query Reviews($photographerId: ID!, $start: Int!, $limit: Int!) {
    reviews(
      start: $start
      limit: $limit
      sort: "id:desc"
      where: { photographer: { id_eq: $photographerId } }
    ) {
      id
      comment
      stars
      updated_at
      model {
        id
        name
        avatar {
          url
        }
      }
    }
  }
`;

interface ReviewItem {
  id: number;
  comment: string;
  stars: number;
  updated_at: string;
  model: {
    id: number;
    name: string;
    avatar: {
      url: string;
    };
  };
}

interface ReviewsProps {
  photographerId: number;
}

const Reviews: React.FC<ReviewsProps> = ({ photographerId }) => {
  const limit = 3;
  const {
    data, loading, error, fetchMore
  } = useQuery(REVIEWS_QUERY, {
    variables: {
      start: 0,
      limit,
      photographerId
    }
  });

  const handleScroll = () => {
    const windowStats = Math.ceil(window.innerHeight + window.scrollY);
    const docStats = document.documentElement.scrollHeight;
    const bottom = windowStats >= docStats;

    if (bottom) {
      fetchMore({
        variables: {
          start: data.reviews.length,
          limit,
          photographerId
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Could not load the reviews</div>;

  return (
    <div className="flex flex-col items-center w-full">
      {data
        && data.reviews.map((review: ReviewItem) => (
          <Review
            modelName={review.model.name}
            avatarUrl={review.model.avatar.url}
            stars={review.stars}
            date={review.updated_at}
            comment={review.comment}
          />
        ))}
    </div>
  );
};

export default Reviews;
