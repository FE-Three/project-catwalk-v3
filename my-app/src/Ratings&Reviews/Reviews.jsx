/* eslint-disable */
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Recommend from './Recommend.jsx';
import Moment from 'react-moment';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const resultsLoaded = this.props.review;
    let display;
    if (resultsLoaded) {
      display = (
        <div>
          <StarRatingComponent name="star1" starCount={5} value={this.props.review.rating} className="review-rating"/>
          <div className="review-user">{this.props.review.reviewer_name} </div>
          <Moment format='MMMM D, YYYY' className="review-date" date={this.props.review.date} />
          <div className="review-summ">{this.props.review.summary}</div>
          <div className="review-body">{this.props.review.body}</div>
          <Recommend recommend={this.props.review.recommend} />
          <div className="response">Response: {this.props.review.response}</div>
          <div className="helpful">
            Helpful?
            <button>Yes</button>
            ({this.props.review.helpfulness})  |
            <button>Report</button>
            </div>
        </div>
      );
    } else {
      display = <div>loading...</div>;
    }
    return (
      <div>
        {display}
      </div>
    );
  }
}

export default Reviews;
