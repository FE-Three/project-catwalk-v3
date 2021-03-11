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
        //console.log(styleOptions)
        return (
          <React.Fragment>
            <div className="price">
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