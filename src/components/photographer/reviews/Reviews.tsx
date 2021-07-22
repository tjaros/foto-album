import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import Review from './Review';

const REVIEWS_QUERY = gql`
  query Reviews($offset: Int!, $limit: Int!,$photographerId: ID! ) {
    reviews(
      start: $offset
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
  const { data, loading, error, fetchMore } = useQuery(REVIEWS_QUERY, {
    variables: {
      offset: 0,
      limit: 3,
      photographerId
    }
  });

  useEffect(() => {
    const onLoadMore = () => {
      if (data) {
        fetchMore({
          variables: {
            offset: data.reviews.length,
            photographerId
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult || fetchMoreResult.reviews === prev.reviews) return prev;
            const newData = {
              ...prev,
              reviews: [...prev.reviews, ...fetchMoreResult.reviews]
            };
            return newData;
          }
        });
      }
    };

    const handleOnScroll = () => {
      const docElement = document.documentElement;
      const scrollTop = docElement?.scrollTop || document.body.scrollTop;
      const scrollHeight = docElement?.scrollHeight || document.body.scrollHeight;
      const clientHeight = docElement.clientHeight || window.innerHeight;
      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (scrolledToBottom) {
        onLoadMore();
      }
    };

    window.addEventListener('scroll', handleOnScroll);
    return () => window.removeEventListener('scroll', handleOnScroll);
  }, [data, fetchMore, photographerId]);

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
