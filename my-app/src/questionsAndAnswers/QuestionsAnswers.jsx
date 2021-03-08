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
      data: [],
      searched: []
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
    axios.get('/qa/questions', {
      params: {
        product_id: this.props.Questions
      }
    })
      .then(res => {
        this.setState({data: res.data})
      })
  }

  searchAnswers(searchQueue) {
    this.setState({
    searched: searchQueue
    })
  }

  handleLoadMoreAnswers() {
   // console.log('Load More Answers Button is working!')
  }


  render() {
    return (
      <div>
        <div id="qaContainerOne">
            <div className="searchBar"><SearchForAnswers searchAnswers={this.searchAnswers} data={this.state.data}/></div>
            <div className="questionAnswer">
              {this.state.searched.length > 0 ?
              <Display display={this.state.searched}/>
              : <Display display={this.state.data.results} prodID={this.props.Questions}/>
              }
              </div>
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