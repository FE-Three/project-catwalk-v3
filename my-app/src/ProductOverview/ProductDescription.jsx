/* eslint-disable */
import React from 'react';
import axios from 'axios';

class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    let featureArray = this.props.AppState.product.features;
    // feature
    // value

    return (
      <div className="description">
        <div>{this.props.AppState.product.slogan}</div>
        <div>{this.props.AppState.product.description}</div>
        {/* <div>{this.props.AppState.product.features}</div> */}
      </div>
    )
  }


}

export default ProductDescription;