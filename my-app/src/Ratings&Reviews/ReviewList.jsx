/* eslint-disable */
import React from 'react';
import Reviews from './Reviews.jsx';

const ReviewList = ({ reviews, index }) => {
  let review = reviews.slice(0, index).map((review) => {
    return <Reviews key={review.review_id} review={review} />
  });
  return review;
}


export default ReviewList;
