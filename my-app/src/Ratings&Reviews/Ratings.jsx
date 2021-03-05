/* eslint-disable no-plusplus */
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import BarGraph from './BarGraph.jsx';

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
  let sum = 0;
  let num = 0;
  for (let key in ratings) {
    sum += (key * ratings[key]);
    num += parseInt(ratings[key]);
  }
  return (
    <div>
      <span className="ratingVal">{sum / num}</span>
      <StarRatingComponent name="star" starCount={5} value={sum / num} />
      <BarGraph ratings={ratings} />
    </div>
  );
}

export default Ratings;
