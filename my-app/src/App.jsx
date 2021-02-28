import React from 'react';
import axios from 'axios';
import QuestionsAnswers from '../src/questionsAndAnswers/QuestionsAnswers.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.helloAPI = this.helloAPI.bind(this);
    this.helloQuestion = this.helloQuestion.bind(this);
  }
  componentDidMount() {
    this.helloAPI();
    this.helloQuestion();
  }

  helloAPI() {
    console.log('test1')
    axios.get('http://localhost:3000/products')
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
        <QuestionsAnswers questionsAndAnswers={this.state.data}/>
      <div className="container">
        Hello World!
        <div className="productdesignContainer">product design container </div>
        <div id="qaContainerOne">
          <div class='searchBar'>Search for Answers Section</div>
          <div class='questionAnswer'>Questions and Answers</div>
          <div class='extraLinks'>Additional Links</div>
        </div>
        <div id='qaContainerTwo'>
          <div class='moreAnsweredQuestions'>More Answered Questions</div>
          <div class='addQuestions'>Add a Question</div>
        </div>
        <div id="ratingsReviewsContainer">
          <div class="title">Ratings and Reviews</div>
          <div class="ratings">Ratings Section</div>
          <div class="reviews">Reviews Section</div>
          <div class="buttons">Buttons Sections</div>
        </div>
        </div>
      </div>
    )
  }
}

export default App;