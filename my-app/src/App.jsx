/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import ProductDetail from './ProductDetail/ProductDetail';
import QuestionsAnswers from './questionsAndAnswers/QuestionsAnswers';
import RatingsReviews from './Ratings&Reviews/RatingsReviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 18201,
    };
    this.helloAPI = this.helloAPI.bind(this);
  }

  componentDidMount() {
    this.helloAPI();
  }

  helloAPI() {
    axios.get('http://localhost:3000/qa/questions?product_id=18080')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <ProductDetail />
        <QuestionsAnswers />
        <RatingsReviews productID={this.state.product_id} />
      </div>
    );
  }
}

export default App;
