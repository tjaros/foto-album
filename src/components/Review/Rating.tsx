import { range } from 'lodash';
import React from 'react';
import { IconType } from 'react-icons';
import { FaRegStar, FaStar } from 'react-icons/fa';

interface RatingProps {
  maxStars?: number;
  stars: number;
  className?: string;
  Icon?: IconType;
  EmptyIcon?: IconType;
  fillColor?: string;
  emptyColor?: string;
  size?: string;
}

/**
 * Displays review rating, with maxStars defaulting to 5.
 *
 * If required stars is bigger than maxStars or less than 0,
 * does not render anything.
 */
const Rating: React.FC<RatingProps> = ({
  maxStars = 5,
  stars,
  className = '',
  size = '2rem',
  Icon = FaStar,
  EmptyIcon = FaRegStar,
  fillColor = 'black',
  emptyColor
}) => {
  if (stars > maxStars || stars < 0) return null;
  return (
    <div className={`flex flex-row ${className}`}>
      {range(maxStars).map((position) => {
        if (position < stars) return <Icon key={position} fill={fillColor} size={size} />;
        return <EmptyIcon key={position} fill={emptyColor} size={size} />;
      })}
    </div>
  );
};

export default Rating;
