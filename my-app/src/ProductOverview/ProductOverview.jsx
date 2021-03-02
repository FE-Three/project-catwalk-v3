/* eslint-disable */
import React from 'react';
import axios from 'axios';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get('http://localhost:3000/products')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div id="productOverviewContainer">

        <div className="images">Image Gallery</div>
        <div className="info">Product Information</div>
        <div className="style">Style Selector</div>
        <div className="cart">Add to Cart</div>
        <div className="whiteSpace"></div>
        <div className="overview">Product Overview</div>
        <div className="whiteSpace"></div>
      </div>
    )
  }


}

export default ProductOverview;