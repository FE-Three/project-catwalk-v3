/* eslint-disable */
import React from 'react';


function ProductImage (props) {
  let conditionalRender = () => {

    if (props.item) {

      return (
        <React.Fragment>
          <img
            id={props.id}
            style={{ 'width': '100%', 'height': '100%', 'objectFit': 'contain' }}
            src={props.item.photos[0].url}
            alt="placeholder"
          />
        </React.Fragment>
      )
    }
  }

    return (
      <React.Fragment>
        {conditionalRender()}
      </React.Fragment>
    )
}


export default ProductImage;