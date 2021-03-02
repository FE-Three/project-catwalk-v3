import React from 'react';
import axios from 'axios';
import ProductDetail from './ProductDetail/ProductDetail.jsx'
import QuestionsAnswers from '../src/questionsAndAnswers/QuestionsAnswers.jsx'
import RatingsReviews from './Ratings&Reviews/RatingsReviews.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 18201,
      data: []
    };
    this.helloAPI = this.helloAPI.bind(this);
    this.helloQuestion = this.helloQuestion.bind(this);
  }
  // componentDidMount() {
  //   this.helloAPI();
  //   this.helloQuestion();
  // }

  helloAPI() {
    console.log('test1')
    axios.get('http://localhost:3000/qa/questions?product_id=18080')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  helloQuestion() {
    console.log('test2');
    axios.get('http://localhost:3000/qa/questions?product_id=18080')
      .then(res => {
        this.setState({data: res.data})
      })
      .catch(err => console.log('error with q&a: ', err))
  }

  render() {

    return (
      <div className="container">
        Hello World!
        <ProductDetail />
        <QuestionsAnswers questionsAndAnswers={this.state.data}/>
        <div className="productdesignContainer">product design container </div>
        <div id="qaContainerOne">
          <div className='searchBar'>Search for Answers Section</div>
          <div className='questionAnswer'>Questions and Answers</div>
          <div className='extraLinks'>Additional Links</div>
        </div>
        <div id='qaContainerTwo'>
          <div className='moreAnsweredQuestions'>More Answered Questions</div>
          <div className='addQuestions'>Add a Question</div>
        </div>
        <div className="qaContainer">Questions and Answer Container </div>
        <RatingsReviews productID={this.state.product_id}/>
      </div>
    )
  }
}

export default App;