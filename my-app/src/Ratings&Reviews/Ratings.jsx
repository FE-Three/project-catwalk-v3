/* eslint-disable */
/* eslint-disable no-plusplus */
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import RatingBreakdown from './RatingBreakdown.jsx';
import RatingFactors from './RatingFactors.jsx';

const Ratings = ({ ratings }) => {
  if (ratings !== undefined) {
    return (
      <div>
        <ShowRatings ratings={ratings} />
      </div>
    );
  }
  return <Loading />;
};

function Loading() {
  return <h3>loading...</h3>;
}

function ShowRatings({ ratings }) {
  let trueRec = parseInt(ratings.recommended.true) || 0;
  let falseRec = parseInt(ratings.recommended.false)  || 0;
  let sum = 0;
  let num = 0;
  const ratingsObj = ratings.ratings;
  const ratingsChars = ratings.characteristics;
  for (let key in ratingsObj) {
    sum += (key * ratingsObj[key]);
    num += parseInt(ratingsObj[key]);
  }
  const recommend = Math.round((trueRec / (falseRec + trueRec)) * 100);
  return (
    <div>
      <span className="ratingVal">{(sum / num).toFixed(1)} </span>
      <StarRatingComponent name="star" starCount={5} value={sum / num} />
      <div>{recommend}% of reviews recommend this product</div>
      <RatingBreakdown ratings={ratingsObj} />
      <RatingFactors chars={ratingsChars} />
    </div>
  );
}

export default Ratings;
