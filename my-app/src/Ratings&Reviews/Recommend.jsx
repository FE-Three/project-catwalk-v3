/* eslint-disable */
import React from 'react';

const Recommend = ({ recommend }) => {
  if (recommend) {
    return <span>&#10003;  I recommend this product</span>
    } else {
      return <React.Fragment></React.Fragment>
  }
};

export default Recommend;
