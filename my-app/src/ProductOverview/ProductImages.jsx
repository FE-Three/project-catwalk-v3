/* eslint-disable */
import React from 'react';
import axios from 'axios';

class ProductImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="images">
        <img
        style={{ 'width': '100%', 'height': '100%', 'objectFit': 'contain' }}
        src=
        {this.props.AppState.productStyles.results
          ?
          this.props.AppState.productStyles.results[0].photos[0].url
          :
          ''
        }
        />
      </div>
    )
  }


}

export default ProductImages;