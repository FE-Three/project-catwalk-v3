/* eslint-disable */
import React from 'react';
import axios from 'axios';

class ProductStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.onStyleClick = this.onStyleClick.bind(this);
  }

  componentDidMount() {


  }


  onStyleClick (event) {
    event.persist()
    console.log(event);
  }

  render() {
    let styles = () => {
      if (this.props.AppState.productStyles.results) {
        let styleOptions = this.props.AppState.productStyles.results;
        return (
          <div id="styleContainer">
            <div className="price">
              {`$${styleOptions[0].original_price}`}
            </div>
            <div className="styleH">STYLE > {styleOptions[0].name}</div>
            <div className="TN1">
              <img className="TN" onClick={this.onStyleClick} src={styleOptions[0].photos[0].thumbnail_url} />
            </div>
            <div className="TN2">
              <img className="TN" onClick={this.onStyleClick} src={styleOptions[1].photos[0].thumbnail_url} />
            </div>
            <div className="TN3">
              <div className="TN"></div>
            </div>
            <div className="TN4">
              <div className="TN"></div>
            </div>
            <div className="TN5">
              <div className="TN"></div>
            </div>
            <div className="TN6">
              <div className="TN"></div>
            </div>
            <div className="TN7">
              <div className="TN"></div>
            </div>
            <div className="TN8">
              <div className="TN"></div>
            </div>
            <div className="WS"></div>
          </div>
        )
      }
    }
    return (
      <div className="style">
        {styles()}
      </div>
    )
  }
}

export default ProductStyle;