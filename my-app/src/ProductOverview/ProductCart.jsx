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
    let cart = () => {
      if (this.props.AppState.productStyles.results) {
        let styleOptions = this.props.AppState.productStyles.results;
        let selectedStyle = this.props.ProductState.selectedStyle
        //console.log(styleOptions)
        return (
          <React.Fragment>
            {/* <div className="price">
              {`$${styleOptions[selectedStyle].original_price}`}
            </div>
            <div className="styleH">
              <div style={{'fontWeight': 'bold', 'paddingRight': '10px'}}>
                STYLE &nbsp; >
              </div>
              <div>
              {styleOptions[selectedStyle].name.toUpperCase()}
              </div>
            </div>
            {styleOptions.map((item, index) => (<StyleTN key={index} styleNum={index}styleOption={item} onClick={this.props.onStyleClick} />))} */}

            <div style={{'height': '40%'}}>
              <select style={{'width': '60%', 'height': '100%', 'fontWeight': 'bold'}}>
                <option>SELECT SIZE</option>
              </select>
              <select style={{'width': '30%', 'height': '100%', 'fontWeight': 'bold'}}>
                <option>1</option>
              </select>
            </div>
            <div style={{'height': '40%'}}>
              <button style={{'width': '80%', 'height': '100%', 'fontWeight': 'bold'}}>ADD TO BAG+</button>
              <button style={{'width': '10%', 'height': '100%'}}>⭐</button>
            </div>
          </React.Fragment>
        )
      }
    }
    return (
      <div className="cart">
        {cart()}
      </div>
    )
  }


}

export default ProductCart;