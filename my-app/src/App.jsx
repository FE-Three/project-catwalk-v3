/* eslint-disable */
import React from 'react';
import axios from 'axios';
import ProductOverview from './ProductOverview/ProductOverview.jsx'
import QuestionsAnswers from '../src/questionsAndAnswers/QuestionsAnswers.jsx'
import RatingsReviews from './Ratings&Reviews/RatingsReviews.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: this.props.id,
      product: [],
      productStyles: [],
      ratings: {},
    };
    this.getProduct = this.getProduct.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.getRatings = this.getRatings.bind(this);
  }

  componentDidMount() {
    this.getProduct(this.state.product_id);
    this.getStyles(this.state.product_id);
    this.getRatings(this.state.product_id);
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

  getRatings() {
    axios.get('/reviews/meta', {
      params: {
        product_id: this.state.product_id
      }
    })
      .then(response => {
        //console.log(response.data);
        let ratings = response.data.ratings;
        this.setState({ ratings: ratings,
                        ratingsMeta: response.data})
      })
  }

  render() {
    // setEndPoint(222)
    return (
      <div id="container">
        <ProductOverview AppState={this.state} />
        <QuestionsAnswers Questions={this.state.product_id} product={this.state.product.name} fullProduct={this.state.product}/>
        <RatingsReviews className="ratingsReviewsContainer" ratings={this.state.ratingsMeta} productID={this.state.product_id} />
      </div>
    );
  }
}

export default App;