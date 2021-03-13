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
      selectedStyle: 0
    }
    this.onStyleClick = this.onStyleClick.bind(this);
  }

  componentDidMount() {

  }

  onStyleClick (event) {
    //event.persist()
    let styleClass = event.target.parentElement.className;
    //console.log(styleClass)
    this.setState({selectedStyle: Number(styleClass.substr(2))});
  }

  render() {
    return (
      <div id="productOverviewContainer">
        <ProductImages AppState={this.props.AppState} ProductState={this.state} />
        <ProductInformation AppState={this.props.AppState} ProductState={this.state} />
        <ProductStyle AppState={this.props.AppState} onStyleClick={this.onStyleClick} ProductState={this.state} />
        <ProductCart AppState={this.props.AppState} ProductState={this.state} key={this.state.selectedStyle} />
        <div className="whiteSpace"></div>
        <div className="social" style={{'paddingBottom': '10px'}}>
          {/* <i className="fab fa-facebook-f" style={{'paddingRight': '30px', 'fontSize':'150%'}}></i>
          <i className="fab fa-twitter" style={{'paddingRight': '30px', 'fontSize':'150%'}}></i>
          <i className="fab fa-pinterest-p" style={{'fontSize':'150%'}}></i> */}
        </div>
        <ProductDescription AppState={this.props.AppState} ProductState={this.state} />
      </div>
    )
  }


}

export default ProductOverview;