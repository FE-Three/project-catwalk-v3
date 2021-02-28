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
      </div>
    )
  }
}

export default App;