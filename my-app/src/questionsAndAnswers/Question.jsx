import React from 'react';
import Modal from 'react-modal';
// import axios from 'axios';
import Answer from './Answer';
/* eslint-disable */

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.helpful,
      helpfulClicked: false,
      clickedTestTwo: false,
      loadAllClick: false,
      showModal: false
    }
    // console.log('answerOne: ', answerOne);
    this.helpfulToggle = this.helpfulToggle.bind(this);
    this.loadTwo = this.loadTwo.bind(this);
    this.loadAll = this.loadAll.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  helpfulToggle() {
    if (this.state.helpfulClicked === false) {
      this.setState({
        helpfulClicked: !this.state.helpfulClicked,
        count: this.state.count + 1
      });
    } else {
      this.setState({
        helpfulClicked: !this.state.helpfulClicked,
        count: this.state.count - 1
      })
    }

  //console.log('QUESTION COMPONENT: ', answerKeys)

    // axios.post('http://localhost:3000/qa/questions?product_id=18080', num)
    //   .then(res => {
    //     this.setState({count : [...this.state.count + 1, num]})
    //   })
    //   .catch(err => console.log('COULD NOT ADD NUM: ', err))
  }

  loadTwo() {
    const answerKeys = Object.values(this.props.answer);
    const sorted = answerKeys.sort((a, b) => {
      return b.helpfulness - a.helpfulness
    })
    if (this.state.loadAllClick === false) {
      return (
      <div>
        {sorted.slice(0, 2).map((answer, i) => {
        return <Answer answer={answer.body} username={answer.answerer_name} date={answer.date} helpfulness={answer.helpfulness} key={i}/>
        })}
        <button className='collapseButton' onClick={() => this.loadAll()}>See more answers</button>
      </div>
      )
    } else {
      return (
      <div>
        {sorted.map((answer, i) => {
        return <Answer answer={answer.body} username={answer.answerer_name} date={answer.date} helpfulness={answer.helpfulness} key={i}/>
        })}
        <button className='collapseButton' onClick={() => this.loadAll()}>Collapse answers</button>
      </div>
      )
    }
  }

    loadAll() {
      this.setState({
        loadAllClick: !this.state.loadAllClick,
      });
    }

    handleOpenModal () {
      this.setState({ showModal: true });
    }

    handleCloseModal () {
      this.setState({ showModal: false });
    }



      render() {
        const answerKeys = Object.values(this.props.answer);
        const sorted = answerKeys.sort((a, b) => {
          return b.helpfulness - a.helpfulness
        })
        return (
          <div className="questions">
        <div id='qContainer'>
          <h4> Q: {this.props.question}</h4>
          <div className='helpfulLink'>Helpful&nbsp;<span className='yes' onClick={this.helpfulToggle}>Yes</span>({this.state.count})&nbsp;&nbsp;</div>
          <span className='divider'> | &nbsp;&nbsp; </span>
          {!this.state.showModal ?
          <div className='addAnswerLink' onClick={this.handleOpenModal}>Add Answer</div>
          : <Modal
              isOpen={true}
              contentLabel="onRequestClose Example"
              onRequestClose={this.handleCloseModal}>
              <h1>Modal Pop-Up</h1>
              <button onClick={this.handleCloseModal}>Close Modal</button>
           </Modal>
          }
        </div>
        {answerKeys.length <= 2
        ?
        sorted.map((answer, i) => (
          <Answer answer={answer.body} username={answer.answerer_name} date={answer.date} helpfulness={answer.helpfulness} key={i} />
          ))
          :
          this.loadTwo()}
      </div>
    );
  }
};

export default Question;
