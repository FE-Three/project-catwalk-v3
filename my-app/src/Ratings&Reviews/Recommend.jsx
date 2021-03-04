import React from 'react';

const Recommend = ({ recommend }) => {
  if (recommend) {
    return <div>I recommend this product</div>;
  }
};

export default Recommend;