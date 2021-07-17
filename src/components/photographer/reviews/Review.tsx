import React from 'react';

import { FaRegStar, FaStar } from 'react-icons/fa';

interface ReviewProps {
  modelName: string;
  avatarUrl: string;
  stars: number;
  date: string;
  comment: string;
}

const Review: React.FC<ReviewProps> = ({
  modelName, avatarUrl, stars, date, comment
}) => (
  <div className="flex flex-col w-full px-10">
    <div className="flex flex-row items-center justify-between pb-10 pt-5">
      <div className="flex flex-row items-center">
        <img
          srcSet={avatarUrl}
          alt={`Avatar of ${modelName}`}
          className="rounded-full w-16 h-16 object-cover"
        />
        <h2 className="text-5xl font-semibold pl-3">{modelName}</h2>
      </div>
      <div className="flex flex-row">
        {[...Array(5)].map((v, i) => {
          if (i < stars) {
            return <FaStar key={`${i - stars}`} fill="#000000" size="2rem" />;
          }
          return <FaRegStar key={`${i - stars}`} size="2rem" />;
        })}
      </div>
    </div>
    <p className="text-2xl">{comment}</p>
  </div>
);
export default Review;
