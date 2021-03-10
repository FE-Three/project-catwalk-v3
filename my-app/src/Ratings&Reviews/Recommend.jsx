import React from 'react';

const Recommend = ({ recommend }) => {
  if (recommend) {
    return <div>I recommend this product</div>;
  } else {
    return <React.Fragment></React.Fragment>
  }
};

export default Recommend;