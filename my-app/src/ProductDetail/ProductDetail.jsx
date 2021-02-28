import React from 'react';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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

export default ProductDetail;