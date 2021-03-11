/* eslint-disable */
import React from 'react';


function ProductSize (props) {

    return (
      <React.Fragment>
        <option id={props.id}>{props.item[1].size}</option>
      </React.Fragment>
    )
}


export default ProductSize;