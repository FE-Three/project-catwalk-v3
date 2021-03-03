/* eslint-disable */
import React from 'react';
import axios from 'axios';
import Ratings from '../Ratings&Reviews/Ratings.jsx';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="info">
        <div>Product Information</div>
        <div><Ratings ratings={this.props.AppState.ratings}/></div>
        <div>{this.props.AppState.product.category}</div>
        <div>{this.props.AppState.product.name}</div>
      </div>
    )
  }


}

export default ProductInformation;