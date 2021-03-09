/* eslint-disable */
import React from 'react';
import axios from 'axios';

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
        {/* <StarRatingComponent name="star1" starCount={5} value={this.props.AppState.ratings} className="review-rating"/> */}
        <div>{this.props.AppState.product.category}</div>
        <div>{this.props.AppState.product.name}</div>
      </div>
    )
  }


}

export default ProductInformation;