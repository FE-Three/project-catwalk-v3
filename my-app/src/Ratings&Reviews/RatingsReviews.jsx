/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Ratings from './Ratings.jsx';
import MoreReviewsButton from './MoreReviewsButton.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      reviewIndex: 2,
    };
    this.getReviews = this.getReviews.bind(this);
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
  }

  componentDidMount() {
    this.setState({
      product_id: this.props.productID,
    }, () => {
      this.getReviews();
    });
  }

  getReviews() {
    axios.get('/reviews', {
      params: {
        product_id: this.state.product_id,
      },
    })
      .then(response => {
        let results = response.data.results;
        console.log(results);
        this.setState({ reviews: results });
      })
      .catch(response => {
        console.log(response);
      })
  }

  loadMoreReviews() {
    this.setState({
      reviewIndex: this.state.reviewIndex + 2,
    })
  }

  render() {
    return (
      <div id="ratingsReviewsContainer">
        <div className="title">Ratings and Reviews</div>
        <div className="ratings">
          <Ratings ratings={this.props.ratings} />
        </div>
        <div className="reviews">
          <ReviewList reviews={this.state.reviews} index={this.state.reviewIndex} />
        </div>
        <div className="buttons">
          <MoreReviewsButton more={this.loadMoreReviews} number={this.state.reviews.length} />
          <AddReview />
        </div>
      </div>
    );
  }
}

export default RatingsReviews;
