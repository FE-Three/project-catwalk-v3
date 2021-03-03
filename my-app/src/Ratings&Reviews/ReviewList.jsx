import React from 'react';
import Reviews from './Reviews.jsx';

const ReviewList = ({ reviews }) => {
  let firstIndex = 0;
  let secondIndex = 1;
  return (
    <div>
      <div>
        <Reviews review={reviews[firstIndex]} />
      </div>
      <div>
        <Reviews review={reviews[secondIndex]} />
      </div>
    </div>
  );
};

export default ReviewList;
