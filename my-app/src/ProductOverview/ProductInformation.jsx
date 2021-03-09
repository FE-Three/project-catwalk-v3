/* eslint-disable */
import React from 'react';
import axios from 'axios';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  componentDidMount() {

  }


  render() {
    let info = () => {
      if (this.props.AppState.product.category) {
        console.log(this.props.AppState.product.category)



        return (
          <React.Fragment>
            {/* <div><Ratings ratings={this.props.AppState.ratings}/></div> */}
            <div>
              {this.props.AppState.product.category.toUpperCase()}
            </div>
            <div style={{'fontWeight': 'bold', 'fontSize': '200%'}}>
              {this.props.AppState.product.name}
            </div>
          </React.Fragment>
        )
      }
    }
    return (
      <div className="info">
        {info()}
      </div>
    )
  }


}

export default ProductInformation;