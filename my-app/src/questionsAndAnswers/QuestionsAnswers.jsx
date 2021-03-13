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
      searched: [],
      isClicked: false,
      data: [],
      count: 4
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
        product_id: this.props.Questions,
        count: 50
      }
    })
      .then(res => {
        this.setState({
          data: res.data,
          searched: res.data.results
        })
      })
  }

  searchAnswers(searchQueue) {
    this.setState({
    searched: searchQueue
    })
  }

  handleLoadMoreAnswers() {
    this.setState({
      count: this.state.count += 2
    })
  }


  render() {
    return (
      <React.Fragment>
        <div id="qaContainerOne">
            <SearchForAnswers searchAnswers={this.searchAnswers} data={this.state.data}/>
            <div className="questionAnswer">
              {this.state.searched.length > 0 ?
              <Display display={this.state.searched.slice(0, this.state.count)} prodID={this.props.Questions} renderQASection={this.renderQASection} product={this.props.product} clicked={this.state.isClicked}/>
              : 'loading...'}
              </div>
            </div>
          <div id="qaContainerTwo">
          <div className="moreAnsweredQuestions">
              <MoreAnsweredQuestions loadAnswers={this.handleLoadMoreAnswers} data={this.state.data.results}/>
            </div>
            <div className="addQuestions"><AddQuestion data={this.state.data.results} product={this.props.product} fullProduct={this.props.fullProduct} renderQASection={this.renderQASection}/></div>
          </div>
          </React.Fragment>
    )
  }
}

export default QuestionsAnswers;