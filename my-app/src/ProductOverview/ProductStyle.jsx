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
        <div>Product style</div>
        <div>
        {this.props.AppState.productStyles.results
          ?
          `Price ${this.props.AppState.productStyles.results[0].original_price}`
          :
          ''
        }
        </div>
      </div>
    )
  }


}

export default ProductStyle;