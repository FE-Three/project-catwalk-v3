/* eslint-disable */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Ratings from './Ratings.jsx';
import MoreReviewsButton from './MoreReviewsButton.jsx';
import AddReview from './AddReview.jsx';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      reviewIndex: 2,
      isOpen: false,
    };
    this.getReviews = this.getReviews.bind(this);
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
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

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }
  //handleSubmit(name) => //some code

  render() {
    return (
      <div id="ratingsReviewsContainer">
        <div className="rrtitle">Ratings and Reviews</div>
        <div className="ratings">
          <Ratings ratings={this.props.ratings} />
        </div>
        <div className="reviews">
          <ReviewList reviews={this.state.reviews} index={this.state.reviewIndex} />
        </div>
        <div className="buttons">
          <MoreReviewsButton more={this.loadMoreReviews} number={this.state.reviews.length} />
          <Button variant="outline-primary" type="button" className="btn btn-outline-primary mx-5"onClick={this.openModal}>ADD A REVIEW +</Button>
          { this.state.isOpen ? (
            <AddReview
              closeModal={this.closeModal}
              isOpen={this.state.isOpen}
              handleSubmit={this.handleSubmit}
            />
          )
            : null}
        </div>
      </div>
    );
  }
}

export default RatingsReviews;
