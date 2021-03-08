import React from 'react';

const MoreReviewsButton = ({ more, number }) => {
  const moreThanTwo = number > 2;
  if (!moreThanTwo) {
    return null;
  }
  return (
    <button type="button" className="MoreReviews" onClick={more}>
      More Reviews
    </button>
  );
};

export default MoreReviewsButton;
