import React from 'react';
import { parseISO, format } from 'date-fns';
import Rating from './Rating';
import Avatar from '../Image/Avatar';

interface ReviewProps {
  modelName: string;
  avatarUrl: string;
  stars: number;
  date: string;
  comment: string;
  className?: string;
}

const Review: React.FC<ReviewProps> = ({
  modelName,
  avatarUrl,
  stars,
  date,
  comment,
  className = ''
}) => {
  const dateString = format(parseISO(date), 'd. MMMM y');
  return (
    <div className={`flex flex-col w-full px-10 ${className}`}>
      <div className="flex flex-row items-center pt-5 pb-10">
        <Avatar avatarLink={avatarUrl} name={modelName} className="w-16 h-16" />
        <h2 className="pl-3 text-lg font-semibold md:text-xl lg:text-2xl">{modelName}</h2>
        <Rating maxStars={5} stars={stars} className="ml-auto" />
      </div>
      <p className="lg:text-xl">{comment}</p>
      <p className="pt-6 italic">{dateString}</p>
    </div>
  );
};

export default Review;
