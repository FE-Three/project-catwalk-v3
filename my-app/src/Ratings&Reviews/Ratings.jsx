/* eslint-disable no-plusplus */
import React from 'react';
import Stars from './Stars.jsx';

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
      <Stars ratings={sum / array.length} />
      <h1>{sum / array.length}</h1>
    </div>
  );
}

export default Ratings;
