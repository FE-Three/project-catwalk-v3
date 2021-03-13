/* eslint-disable */
import React from 'react';


function ProductFeature (props) {
  let conditionalRender = () => {
    if (props.item.value) {
      let formattedValue = props.item.value.replace(/['"]+/g, '');
      return (
        <React.Fragment>
          <div style={{'paddingBottom': '10px', 'fontSize': '75%'}}>
            <i className="fas fa-check"></i> &nbsp;
            {`${props.item.feature} ${formattedValue}`}
          </div>
        </React.Fragment>
      )
    } else {
      return (<React.Fragment></React.Fragment>)
    }

  }

    return (
      <React.Fragment>
        {conditionalRender()}
      </React.Fragment>
    )
  }


export default ProductFeature;