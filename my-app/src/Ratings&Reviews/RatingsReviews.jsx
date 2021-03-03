/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Ratings from './Ratings.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: {},
      reviews: [],
    };
    this.getReviews = this.getReviews.bind(this);
    this.getRatings = this.getRatings.bind(this);
  }

  componentDidMount() {
    this.setState({
      product_id: this.props.productID,
    }, () => {
      this.getReviews();
      this.getRatings();
    });
  }

  getReviews() {
    axios.get('/reviews', {
      params: {
        product_id: this.state.product_id
      },
    })
      .then(response => {
        let results = response.data.results;
        console.log(results);
        this.setState({ reviews: results })
      })
      .catch(response => {
        console.log(response);
      })
  }

  getRatings() {
    axios.get('/reviews/meta', {
      params: {
        product_id: this.state.product_id
      }
    })
      .then(response => {
        console.log(response.data.ratings);
        let ratings = response.data.ratings;
        this.setState({ ratings: ratings })
      })
  }

  render() {
    return (
      <div id="ratingsReviewsContainer">
        <div className="title">Ratings and Reviews</div>
        <div className="ratings">
          <Ratings ratings={this.state.ratings} />
        </div>
        <div className="reviews">
          <ReviewList reviews={this.state.reviews}/>
        </div>
        <div className="buttons">Buttons</div>
      </div>
    );
  }
}

export default RatingsReviews;
