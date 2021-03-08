import React from 'react';

const RatingFactors = ({props }) => {
  return (
  <Bullet
    data={[
      {
        "id": "Size",
        "ranges": [0, 5],
        "markers": [2]
      }
    ]}
    width={200}
    height={50}
  />
  )
}

export default RatingFactors;