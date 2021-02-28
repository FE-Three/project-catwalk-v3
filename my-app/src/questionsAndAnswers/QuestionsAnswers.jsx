import React from 'react';
import SearchForAnswers from './SearchForAnswers.jsx'

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.searchAnswers = this.searchAnswers.bind(this);
  }

  searchAnswers(questions) {
    console.log('this is working!')
  }

  render() {
    return (
      <div>
        <SearchForAnswers searchAnswers={this.searchAnswers}/>
      </div>
    )
  }
}

export default QuestionsAnswers;