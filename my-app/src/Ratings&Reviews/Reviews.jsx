/* eslint-disable */
import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state= {body1: '',
                 body2: ''
                };
  }

  render() {
    const resultsLoaded = this.props.review;
    let display;
    if (resultsLoaded) {
      display = <div className="review">{this.props.review.body}</div>
    } else {
      display = <div>loading...</div>
    }
    console.log(display)
    return (
      <div>{display}</div>
    )
  }
}

export default Reviews;
