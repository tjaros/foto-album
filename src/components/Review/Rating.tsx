import { range } from 'lodash';
import React from 'react';
import { IconType } from 'react-icons';
import { FaStar } from 'react-icons/fa';

interface RatingProps {
  maxStars?: number;
  stars: number;
  className?: string;
  fillColor?: string;
  emptyColor?: string;
  Icon?: IconType;
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
  fillColor = 'black',
  emptyColor,
  size = '2rem',
  Icon = FaStar
}) => {
  if (stars > maxStars || stars < 0) return null;
  return (
    <div className={`flex flex-row ${className}`}>
      {range(maxStars).map((position) => (
        <Icon key={position} fill={stars < position ? fillColor : emptyColor} size={size} />
      ))}
    </div>
  );
};

export default Rating;
