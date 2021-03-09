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
    return (
      <div className="description">
        <div>{this.props.AppState.product.slogan}</div>
        <div>{this.props.AppState.product.description}</div>
      </div>
    )
  }


}

export default ProductDescription;