/* eslint-disable */
import React from 'react';
import axios from 'axios';
import ProductOverview from './ProductOverview/ProductOverview.jsx'
import QuestionsAnswers from '../src/questionsAndAnswers/QuestionsAnswers.jsx'
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
      <div>
        <ProductOverview appState={this.state} />
        <QuestionsAnswers questionsAndAnswers={this.state.data}/>
      <div className="container">
        Hello World!
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
        <div id="ratingsReviewsContainer">
          <div className="title">Ratings and Reviews</div>
          <div className="ratings">Ratings Section</div>
          <div className="reviews">Reviews Section</div>
          <div className="buttons">Buttons Sections</div>
        </div>
        </div>
      </div>
    )
  }
}

export default App;