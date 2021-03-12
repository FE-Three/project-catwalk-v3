/* eslint-disable */
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const MoreReviewsButton = ({ more, number }) => {
  const moreThanTwo = number > 2;
  if (!moreThanTwo) {
    return null;
  }
  return (
    <Button variant="outline-primary" type="button" className="MoreReviews" onClick={more}>
      MORE REVIEWS
    </Button>
  );
};

export default MoreReviewsButton;
