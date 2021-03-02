import React from 'react';
import axios from 'axios';
import ProductDetail from './ProductDetail/ProductDetail';
import QuestionsAnswers from './questionsAndAnswers/QuestionsAnswers';

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
    axios.get('http://localhost:3000/qa/questions?product_id=18080')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <ProductDetail />
        <QuestionsAnswers />
      </div>
    );
  }
}

export default App;
