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
    console.log('test1')
    axios.get('http://localhost:3000/qa/questions?product_id=18080')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div id="productDetailContainer">

        <div class="images">Image Gallery</div>
        <div class="info">Product Information</div>
        <div class="style">Style Selector</div>
        <div class="cart">Add to Cart</div>
        <div class="whiteSpace"></div>
        <div class="overview">Product Overview</div>
        <div class="whiteSpace"></div>
      </div>
    )
  }


}

export default ProductOverview;