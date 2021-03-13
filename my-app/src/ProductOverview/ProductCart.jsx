/* eslint-disable */
import React from 'react';
import axios from 'axios';
import ProductSize from './ProductSize.jsx';
import ProductQty from './ProductQty.jsx';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSizeIndex: 0,
      qtyValue: '-',
      sizeValue: 'Select Size'
    }
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  componentDidMount() {


  }



  handleDropdownChange(e) {
    // e.persist();
    //console.log(e.target.selectedIndex, e.target.value)
    if(e.target.id === 'sizeValue' && e.target.value !== "Select Size") {
      this.setState({[e.target.id]: e.target.value, selectedSizeIndex: e.target.selectedIndex, qtyValue: 1})
    }
    if(e.target.id === 'sizeValue' && e.target.value === "Select Size") {
      this.setState({[e.target.id]: e.target.value, selectedSizeIndex: 1})
    }
    if(e.target.id === 'qtyValue' && e.target.value !== "Select Size") {
      this.setState({[e.target.id]: e.target.value})
    }
  }

  render() {
    let cart = () => {
      if (this.props.AppState.productStyles.results) {
        let styleOptions = this.props.AppState.productStyles.results;
        let selectedStyle = this.props.ProductState.selectedStyle;
        let styleData =  styleOptions[selectedStyle];
        let skus = Object.entries(styleData.skus);
        let sizeQty = skus[this.state.selectedSizeIndex][1].quantity;

        console.log('stock level:', sizeQty);
        if (sizeQty > 15) {
          sizeQty = 15;
        }
        let qtyArray = Array.from({length: sizeQty}, (v, i) => i + 1);
        if (this.state.sizeValue ==='Select Size') {
          skus.unshift(['', {size:'Select Size'}])
        }

        return (
          <React.Fragment>
            <div style={{'height': '40%'}}>
              <select
              style={{'width': '60%', 'height': '100%', 'fontWeight': 'bold'}}
              id="sizeValue"
              onChange={this.handleDropdownChange}
              value={this.state.sizeValue}>
                {skus.map((item, index) => {
                    return (
                        <ProductSize key={index} id={index} item={item}/>
                    )})
                }
              </select>
              <select style={{'width': '30%', 'height': '100%', 'fontWeight': 'bold'}}
              id="qtyValue"
              onChange={this.handleDropdownChange}
              value={this.state.qtyValue}>
                {
                this.state.qtyValue ==='-'
                  ? <option>-</option>
                  : qtyArray.map((item, index) => {
                      return (
                        <ProductQty key={index} id={index} item={item}/>
                      )})
                }
              </select>
            </div>
            <div style={{'height': '40%'}}>
            {/* <Button variant="outline-primary" type="button" className="MoreReviews" onClick={more}>
              ADD TO BAG+
            </Button> */}
              <button style={{'width': '80%', 'height': '100%', 'fontWeight': 'bold'}}>ADD TO BAG+</button>
              <button style={{'width': '10%', 'height': '100%'}}>
                <i className="far fa-star"></i>
              </button>

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


