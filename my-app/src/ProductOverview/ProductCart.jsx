/* eslint-disable */
import React from 'react';
import axios from 'axios';

class ProductCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="cart">
        <select>
          <option>Select Size</option>
        </select>
        <select>
          <option>1</option>
        </select>
        <button>ADD TO BAG+</button>
        <button>STAR</button>
      </div>
    )
  }


}

export default ProductCart;