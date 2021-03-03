/* eslint-disable */
import React from 'react';
import axios from 'axios';
import ProductDescription from './ProductDescription.jsx'
import ProductInformation from './ProductInformation.jsx'
import ProductImages from './ProductImages.jsx'
import ProductStyle from './ProductStyle.jsx'
import ProductCart from './ProductCart.jsx'

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  componentDidMount() {

  }

  render() {
    return (
      <div id="productOverviewContainer">

        <ProductImages AppState={this.props.AppState} />
        <ProductInformation AppState={this.props.AppState} />
        <ProductStyle AppState={this.props.AppState} />
        <ProductCart AppState={this.props.AppState} />
        <div className="whiteSpace"></div>
        <ProductDescription AppState={this.props.AppState} />
      </div>
    )
  }


}

export default ProductOverview;