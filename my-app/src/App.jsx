/* eslint-disable */
import React from 'react';
import axios from 'axios';
import UserContext from './userContext.js';
import ProductOverview from './ProductOverview/ProductOverview.jsx'
import QuestionsAnswers from '../src/questionsAndAnswers/QuestionsAnswers.jsx'
import RatingsReviews from './Ratings&Reviews/RatingsReviews.jsx'

class App extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      product_id: this.props.id,
      product: [],
      productStyles: [],
      ratings: {},
      isMobile: false,
      bagItems: []
    };
    this.getProduct = this.getProduct.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.getRatings = this.getRatings.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handleAddToBag = this.handleAddToBag.bind(this);
  }

  componentDidMount() {
    this.getProduct(this.state.product_id);
    this.getStyles(this.state.product_id);
    this.getRatings(this.state.product_id);
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
  }

  handleAddToBag(sku) {
    console.log('bag')
    this.setState({bagItems: [...this.state.bagItems, this.state.product_id]})
  }

  handleWindowResize() {
    if (!this.state.isMobile && window.innerWidth < 700) {
        this.setState({isMobile: true})
    }
    if (this.state.isMobile && window.innerWidth > 700) {
        this.setState({isMobile: false})
    }
  }

  getProduct(product_id) {
    axios.get(`/products/${product_id}`)
      .then((res) => this.setState({product: res.data}))
      .catch((err) => console.log(err));
  }

  getStyles(product_id) {
    axios.get(`/products/${product_id}/styles`)
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
    const { user, setUser } = this.context
    const conditionalRender = () => {
      if(!this.state.isMobile) {
        return (
          <div id="container">
            <ProductOverview AppState={this.state} handleAddToBag={this.handleAddToBag} />
            <QuestionsAnswers Questions={this.state.product_id} product={this.state.product.name} fullProduct={this.state.product}/>
            <div id="ratingsScroll"></div>
            <RatingsReviews className="ratingsReviewsContainer" ratings={this.state.ratingsMeta} productID={this.state.product_id} />
          </div>
        )
      } else {
        return (
          <div id="container">
            <ProductOverview AppState={this.state} handleAddToBag={this.handleAddToBag} />
          </div>
        )
      }
    }
    return (
      <React.Fragment>
        {conditionalRender()}
      </React.Fragment>
    );
  }
}

export default App;