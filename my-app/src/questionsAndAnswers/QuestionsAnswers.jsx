import React from 'react';
import axios from 'axios';
import SearchForAnswers from './SearchForAnswers';
import Display from './Display';
import MoreAnsweredQuestions from './MoreAnsweredQuestions';
import AddQuestion from './AddQuestion';
/* eslint-disable */

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
    // bindings
    this.renderQASection = this.renderQASection.bind(this);
    this.searchAnswers = this.searchAnswers.bind(this);
    this.handleLoadMoreAnswers = this.handleLoadMoreAnswers.bind(this);
  }
  // methods
  componentDidMount() {
    this.renderQASection();
  }

  renderQASection() {
    axios.get('http://localhost:3000/qa/questions?product_id=18080')
    .then(res => {
      this.setState({data: res.data})
    })
    .catch(err => console.log(err))
  }

  searchAnswers(questions) {
    console.log('this is working!')
  }

  handleLoadMoreAnswers() {
    console.log('Load More Answers Button is working!')
  }


  render() {

    return (
      <div>
        <div id="qaContainerOne">
            <div className="searchBar"><SearchForAnswers searchAnswers={this.searchAnswers}/></div>
            <div className="questionAnswer">
              <Display display={this.state.data}/></div>
            </div>
          <div id="qaContainerTwo">
            <div className="moreAnsweredQuestions"><MoreAnsweredQuestions loadAnswers={this.handleLoadMoreAnswers}/></div>
            <div className="addQuestions"><AddQuestion /></div>
          </div>
      </div>
    )
  }
}

export default QuestionsAnswers;