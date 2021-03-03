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
      product_id: this.props.paramID,
      product: [],
      productStyles: []
    };
    this.getProduct = this.getProduct.bind(this);
    this.getStyles = this.getStyles.bind(this);

  }

  componentDidMount() {
    this.getProduct(this.state.product_id);
    this.getStyles(this.state.product_id);
  }

  getProduct(product_id) {
    axios.get(`http://localhost:3000/products/${product_id}`)
      .then((res) => this.setState({product: res.data}))
      .catch((err) => console.log(err));
  }

  getStyles(product_id) {
    axios.get(`http://localhost:3000/products/${product_id}/styles`)
      .then((res) => this.setState({productStyles: res.data}))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <ProductOverview AppState={this.state} />
        <QuestionsAnswers />
        <RatingsReviews productID={this.state.product_id} />
      </div>
    );
  }
}



export default App;