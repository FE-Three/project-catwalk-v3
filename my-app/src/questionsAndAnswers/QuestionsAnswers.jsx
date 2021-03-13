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
      searched: [],
      isClicked: false
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
    this.setState({
      isClicked: !this.state.isClicked
    })
  }


  render() {
    return (
      <React.Fragment>
        <div id="qaContainerOne">
            <SearchForAnswers searchAnswers={this.searchAnswers} data={this.state.data}/>
            <div className="questionAnswer">
              {this.state.searched.length > 0 ?
              <Display display={this.state.searched}/>
              : <Display display={this.state.data.results} prodID={this.props.Questions} renderAll={this.renderQASection} product={this.props.product} clicked={this.state.isClicked}/>
              }
              </div>
            </div>
          <div id="qaContainerTwo">
          <div className="moreAnsweredQuestions">
              <MoreAnsweredQuestions loadAnswers={this.handleLoadMoreAnswers} data={this.state.data.results}/>
            </div>
            <div className="addQuestions"><AddQuestion data={this.state.data.results} product={this.props.product} fullProduct={this.props.fullProduct} renderAll={this.renderQASection}/></div>
          </div>
          </React.Fragment>
    )
  }
}

export default QuestionsAnswers;