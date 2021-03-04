/* eslint-disable no-plusplus */
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

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

function Loading (props) {
  return <h3>loading...</h3>;
}

function ShowRatings({ ratings }) {
  const array = Object.values(ratings);
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += parseInt(array[i], 10);
  }
  return (
    <div>
      <span className="ratingVal">{sum / array.length}</span><StarRatingComponent name="star" starCount={5} value={sum / array.length} />
    </div>
  );
}

export default Ratings;
