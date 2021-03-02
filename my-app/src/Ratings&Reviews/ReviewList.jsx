import React from 'react';
import Reviews from './Reviews.jsx';

const ReviewList = ({reviews}) => {

  var firstIndex = 0;
  var secondIndex = 1;
  return (
  <div>
    <div>
      <Reviews review={reviews[firstIndex]}/>
    </div>
    <div>
      <Reviews review={reviews[secondIndex]}/>
    </div>
  </div>
  )
}

export default ReviewList;