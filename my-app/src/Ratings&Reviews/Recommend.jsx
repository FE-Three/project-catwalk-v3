import React from 'react';

const Recommend = ({ recommend }) => {
  if (recommend) {
    return (
      <div>
        <span>&#10003;  I recommend this product</span>
      </div>
    );
  }
};

export default Recommend;
