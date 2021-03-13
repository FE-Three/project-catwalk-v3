/* eslint-disable */
import React from 'react';
import ProductFeature from './ProductFeature.jsx';

class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    let features = () => {
      let featureArray = this.props.AppState.product.features;
      if (featureArray) {

        return (
          <React.Fragment>
            {featureArray.map((item, index) => {
              return (
                  <ProductFeature key={index} id={index} item={item}/>
              )})
            }
          </React.Fragment>
        )

      } else {
        return (<React.Fragment></React.Fragment>)
      }


    }


    // feature
    // value

    return (
      <div className="description" style={{'display': 'flex'}}>
        <div style={{'width': '65%'}}>
          <div style={{'fontWeight': 'bold', 'paddingBottom': '10px'}}>
            {this.props.AppState.product.slogan}
          </div>
          <div style={{'fontSize': '75%'}}>
            {this.props.AppState.product.description}
          </div>
        </div>
        <div style={{'width': '30%', 'marginLeft': 'auto'}}>

          {features()}
        </div>
      </div>
    )
  }


}

export default ProductDescription;