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
    //console.log(this.props.AppState.productStyles.results[0].photos[0].thumbnail_url)
   console.log(this.props.AppState.productStyles.results)
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
          <div className="TN1">
            <div className="TN"></div>
          </div>
          <div className="TN2">
            <div className="TN"></div>
          </div>
          <div className="TN3">
            <div className="TN"></div>
          </div>
          <div className="TN4">
            <div className="TN"></div>
          </div>
          <div className="TN5">
            <div className="TN"></div>
          </div>
          <div className="TN6">
            <div className="TN"></div>
          </div>
          <div className="TN7">
            <div className="TN"></div>
          </div>
          <div className="TN8">
            <div className="TN"></div>
          </div>
          <div className="WS"></div>

        </div>
      </div>
    )
  }


}

export default ProductStyle;