/* eslint-disable */
import React from 'react';
import axios from 'axios';
import StyleTN from './StyleTN';

class ProductStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  componentDidMount() {
  }




  render() {
    let styles = () => {
      if (this.props.AppState.productStyles.results) {
        let styleOptions = this.props.AppState.productStyles.results;
        let selectedStyle = this.props.ProductState.selectedStyle
        let price = styleOptions[selectedStyle].original_price;
        let saleStatus = 'notOnSale';
        let salePrice = '';

        let priceRender = () => {
          let price = styleOptions[selectedStyle].original_price;
          let saleStatus = 'notOnSale';
          let salePrice = '';

          if (styleOptions[selectedStyle].sale_price !== null) {
            let salePrice = styleOptions[selectedStyle].sale_price;
            saleStatus = 'onSale';

            return (
              <React.Fragment>
                  <div className={`price ${saleStatus}`}>
                    <div style={{'display':'flex'}}>
                      <div style ={{'color':'red'}}>
                        {`$${salePrice}`} &nbsp;
                      </div>
                      <div style={{'textDecoration': 'line-through'}}>
                      {`${price}`}
                      </div>
                    </div>
                  </div>
               </React.Fragment>
              )
          } else {


            return (
              <React.Fragment>
                  <div className={`price ${saleStatus}`}>
                    {`$${price}`}
                  </div>
               </React.Fragment>
              )
          }
        }

        return (
          <React.Fragment>
            {priceRender()}
            <div className="styleH">
              <div style={{'fontWeight': 'bold', 'paddingRight': '10px'}}>
                STYLE &nbsp; >
              </div>
              <div>
              {styleOptions[selectedStyle].name.toUpperCase()}
              </div>
            </div>
            {styleOptions.map((item, index) => (<StyleTN key={index} styleNum={index} styleOption={item} onClick={this.props.onStyleClick} selectedStyle={selectedStyle}/>))}
          </React.Fragment>
        )
      }
    }
    return (
      <div className="style">
        <div id="styleContainer">
        {styles()}
        <div className="WS"></div>
        </div>
      </div>
    )
  }
}

export default ProductStyle;