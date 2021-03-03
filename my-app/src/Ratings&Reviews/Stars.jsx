import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <StarRatingComponent name="rate1" starCount={5} value={this.props.ratings} />
      </div>
    )
  }
}

export default Stars;