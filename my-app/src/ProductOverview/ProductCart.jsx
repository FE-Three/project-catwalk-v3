/* eslint-disable */
import React from 'react';
import axios from 'axios';
import UserContext from './../userContext.js';
import ProductSize from './ProductSize.jsx';
import ProductQty from './ProductQty.jsx';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductCart extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      selectedSizeIndex: 0,
      qtyValue: '-',
      sizeValue: 'Select Size',
      bagMsg: '',
      bagMsgColor: 'red',
      sizeAndStyleInventory: 0
    }
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.resetBagMsg = this.resetBagMsg.bind(this);
    this.checkSizeAndStyleInventory = this.checkSizeAndStyleInventory.bind(this);
  }

  componentDidMount() {

  }

  resetBagMsg() {
    this.setState({bagMsg: ''});
    this.setState({bagMsgColor: 'red'});
  }

  checkSizeAndStyleInventory(sizeIndex) {
    if (this.props.AppState.productStyles.results) {
      let styleOptions = this.props.AppState.productStyles.results;
      let selectedStyle = this.props.ProductState.selectedStyle;
      let styleData =  styleOptions[selectedStyle];
      let skus = Object.entries(styleData.skus);
      let sku = skus[sizeIndex]
      let sizeQty = skus[sizeIndex][1].quantity;
      return [sizeQty, sku];
    }
  }

  handleDropdownChange(e) {
    // e.persist();
    // console.log(e.target.selectedIndex, e.target.value)
    if(e.target.id === 'sizeValue' && e.target.value !== "Select Size" && this.state.sizeValue === "Select Size") {
      this.setState({[e.target.id]: e.target.value, selectedSizeIndex: (e.target.selectedIndex - 1), qtyValue: 0})
      this.setState({sizeAndStyleInventory: this.checkSizeAndStyleInventory(e.target.selectedIndex - 1)[0]})
    }
    if(e.target.id === 'sizeValue' && e.target.value !== "Select Size" && this.state.sizeValue !== "Select Size") {
      this.setState({[e.target.id]: e.target.value, selectedSizeIndex: (e.target.selectedIndex), qtyValue: 0})
      this.setState({sizeAndStyleInventory: this.checkSizeAndStyleInventory(e.target.selectedIndex)[0]})
    }
    // if(e.target.id === 'sizeValue' && e.target.value === "Select Size") {
    //   this.setState({[e.target.id]: e.target.value, selectedSizeIndex: 1})
    // }
    if(e.target.id === 'qtyValue' && e.target.value !== "Select Size") {
      this.setState({[e.target.id]: Number(e.target.value)})
    }
  }

  render() {
    const { user, setUser } = this.context
    let cart = () => {
      if (this.props.AppState.productStyles.results) {
        let styleOptions = this.props.AppState.productStyles.results;
        let selectedStyle = this.props.ProductState.selectedStyle;
        let styleData =  styleOptions[selectedStyle];
        let skus = Object.entries(styleData.skus);
        let sizeQty = skus[this.state.selectedSizeIndex][1].quantity;

        // console.log('stock level:', sizeQty);
        if (sizeQty > 15) {
          sizeQty = 15;
        }
        let qtyArray = Array.from({length: sizeQty}, (v, i) => i + 1);
        qtyArray.unshift(0);
        if (this.state.sizeValue ==='Select Size') {
          skus.unshift(['', {size:'Select Size'}])
        }

        return (
          <React.Fragment>
            <div style={{'textAlign': 'center', 'color':this.state.bagMsgColor}}>{this.state.bagMsg} &nbsp;</div>
            <div style={{'height': '20%', 'padding':'5px'}}>
              <select
              style={{'width': '60%', 'height': '100%', 'fontWeight': 'bold', 'color':'#007bff'}}
              id="sizeValue"
              onChange={this.handleDropdownChange}
              value={this.state.sizeValue}>
                {skus.map((item, index) => {
                    return (
                        <ProductSize key={index} id={index} item={item}/>
                    )})
                }
              </select>
              <select style={{'width': '30%', 'height': '100%', 'fontWeight': 'bold', 'color':'#007bff'}}
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
            <div style={{'height': '20%', 'padding':'5px'}}>
              <Button
                variant="outline-primary"
                type="button"
                className="MoreReviews btn btn-outline-primary"
                onClick={()=>{
                  if (this.state.sizeValue === 'Select Size' || this.state.qtyValue === '-') {
                    this.setState({bagMsgColor: 'red', bagMsg: 'Select Size and Qty'});
                  } else if (this.state.qtyValue === 0 && this.state.sizeAndStyleInventory !== 0) {
                    this.setState({bagMsgColor: 'red', bagMsg: 'Select Qty'});
                  } else if (this.state.sizeAndStyleInventory === 0) {
                    this.setState({bagMsgColor: 'red', bagMsg: 'Size Out of Stock'});
                  } else if (this.state.sizeValue !== 'Select Size' || this.state.qtyValue !== '-') {
                    this.setState({bagMsgColor: '#007bff', bagMsg: 'Added to Bag'});
                    this.props.handleAddToBag();
                    setTimeout(this.resetBagMsg, 2000);
                  }
                }}
                style={{'width': '90%'}}>ADD TO BAG +
              </Button>

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


