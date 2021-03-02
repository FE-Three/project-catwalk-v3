import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 18201,
      reviews: [],
    };
    this.getReviews = this.getReviews.bind(this);
  }
  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/reviews', {
      params: {
        product_id: this.state.product_id,
      }
    })
    .then(response => {
      var results = response.data.results;
      //console.log('ReviewResponse: ', response.data.results);
      this.setState({reviews: results});
    })
  }

  render() {
    return (
      <div id="ratingsReviewsContainer">
          <div className="title">Ratings and Reviews</div>
          <div className="ratings">Ratings Section</div>
          <div className="reviews">
            <ReviewList reviews={this.state.reviews} />
          </div>
          <div className="buttons">Buttons Sections</div>
        </div>
    )
  }
}

export default RatingsReviews;