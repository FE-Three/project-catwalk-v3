import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.helloAPI = this.helloAPI.bind(this);
  }
  componentDidMount() {
    this.helloAPI();
  }

  helloAPI() {
    console.log('test1')
    axios.get('http://localhost:3000/products')
    .then(res => console.log(res))
    .catch(res => console.log(res))
  }


  render() {
    return (
      <div class="container">
        Hello World!
        <div class="productdesignContainer">product design container </div>
        <div class="qaContainer">Questions and Answer Container </div>
        <div id="ratingsReviewsContainer">
          <div class="title">Ratings and Reviews</div>
          <div class="ratings">Ratings Section</div>
          <div class="reviews">Reviews Section</div>
          <div class="buttons">Buttons Sections</div>
        </div>
      </div>
    )
  }
}

export default App;