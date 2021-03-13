/* eslint-disable */
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }


  render() {
    let reviews = () => {
      if (this.props.AppState.ratings) {
        let sum = 0;
        let num = 0;
        let ratingsObj = this.props.AppState.ratings;
        for (let key in ratingsObj) {
          sum += (key * ratingsObj[key]);
          num += parseInt(ratingsObj[key]);
        }
        if (num === 0) {
          return (<React.Fragment></React.Fragment>)
        } else {
          return (
            <React.Fragment>
              <div> &nbsp; </div>
              <div style = {{'display':'flex'}}>
                <StarRatingComponent name="star1" starCount={5} value={sum / num} className="review-rating"/>
                <div
                  onClick={()=> {document.getElementById('ratingsScroll').scrollIntoView()}}
                  className="btn-link"
                  style = {{'paddingLeft':'5px'}}
                  >
                  Read all {num} reviews
                </div>
              </div>
            </React.Fragment>
          )
        }
      } else {
        return (<React.Fragment></React.Fragment>)
      }
    }
    let info = () => {
      if (this.props.AppState.product.category) {

        return (
          <React.Fragment>
            {reviews()}
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