/* eslint-disable */
import React from 'react';
import axios from 'axios';
import StyleTN from './StyleTN';

class ProductStyle extends React.Component {
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
    let styles = () => {
      if (this.props.AppState.productStyles.results) {
        let styleOptions = this.props.AppState.productStyles.results;
        //console.log(styleOptions)
        return (
          <React.Fragment>
            <div className="price">
              {`$${styleOptions[this.state.selectedStyle].original_price}`}
            </div>
            <div className="styleH">
              <div style={{'font-weight': 'bold', 'padding-right': '10px'}}>
                STYLE &nbsp; >
              </div>
              <div>
              {styleOptions[this.state.selectedStyle].name}
              </div>
            </div>
            {styleOptions.map((item, index) => (<StyleTN key={index} styleNum={index}styleOption={item} onClick={this.onStyleClick} />))}
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