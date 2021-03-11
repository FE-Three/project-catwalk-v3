/* eslint-disable */
import React from 'react';
import axios from 'axios';
import ProductCarousel from './ProductCarousel.jsx'
import ProductImage from './ProductImage.jsx'


class ProductImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    let conditionalRender = () => {

      if (this.props.AppState.productStyles.results) {
        let photosArray = this.props.AppState.productStyles.results;
        let selectedStyle = this.props.ProductState.selectedStyle
        return (
          <ProductCarousel key={selectedStyle}>
            {photosArray.map((item, index) => {
              return (
                <ProductImage AppState={this.props.AppState} key={index} id={index} item={item}/>
              )}
            )}
          </ProductCarousel>



        )
      }
    }
    return (
      <div className="images">
        {/* <div
          style={{ 'width': '100%', 'height': '100%', 'objectFit': 'contain' }}> */}
          {conditionalRender()}
        {/* </div> */}
      </div>
    )
  }


}

export default ProductImages;