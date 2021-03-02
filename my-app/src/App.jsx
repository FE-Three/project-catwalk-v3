/* eslint-disable */
import React from 'react';
import axios from 'axios';
import ProductOverview from './ProductOverview/ProductOverview.jsx'
import QuestionsAnswers from '../src/questionsAndAnswers/QuestionsAnswers.jsx'
import RatingsReviews from './Ratings&Reviews/RatingsReviews.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 18201,
      data: []
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
        <ProductOverview appState={this.state} />
        <QuestionsAnswers />
        <RatingsReviews productID={this.state.product_id}/>
      </div>
    );
  }
}

export default App;
