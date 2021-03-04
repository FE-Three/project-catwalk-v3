/* eslint-disable */
import React from 'react';
import axios from 'axios';

class ProductStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="style">
        <div id="styleContainer">
          <div className="price">
        {this.props.AppState.productStyles.results
          ?
          `$${this.props.AppState.productStyles.results[0].original_price}`
          :
          ''
        }
          </div>
          <div className="styleH">STYLE > SELECTED STYLE</div>
          <div className="TH1"></div>
          <div className="TH2"></div>
          <div className="TH3"></div>
          <div className="TH4"></div>
          <div className="TH5"></div>
          <div className="TH6"></div>
          <div className="TH7"></div>
          <div className="TH8"></div>
          <div className="WS"></div>

        </div>
      </div>
    )
  }


}

export default ProductStyle;