/* eslint-disable */
import React from "react";
import axios from "axios";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      charsLeft: 1000,
      maxChar: 1000,
      charsLeftEmail: 60,
      maxCharEmail: 60,
      charsLeftNickname: 60,
      maxCharNickname: 60,
      empty: "",
    };
    this.displayInfo = this.displayInfo.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleWordCountSubmit = this.handleWordCountSubmit.bind(this);
    this.handleWordCountEmail = this.handleWordCountEmail.bind(this);
    this.handleWordCountButton = this.handleWordCountButton.bind(this);
    this.handleWordCountNickname = this.handleWordCountNickname.bind(this);
  }

  handleWordCountSubmit(event) {
    const charCount = event.target.value.length;
    const maxChar = this.state.maxChar;
    const charLength = maxChar - charCount;
    this.setState({ charsLeft: charLength });
  }

  handleWordCountEmail(event) {
    const charsLeftEmail = event.target.value.length;
    const maxCharEmail = this.state.maxCharEmail;
    const charLength = maxCharEmail - charsLeftEmail;
    this.setState({ charsLeftEmail: charLength });
  }

  handleWordCountNickname(event) {
    const charsLeftNickname = event.target.value.length;
    const maxCharNickname = this.state.maxCharNickname;
    const charLength = maxCharNickname - charsLeftNickname;
    this.setState({ charsLeftNickname: charLength });
  }

  handleWordCountButton(event) {
    event.preventDefault();
    this.setState({ empty: "" });
  }

  displayInfo() {
    switch (this.props.modalInfo) {
      case "Modal A":
        return (
          <div>
            <br></br>
            <div className="submitAnswer">Submit your Answer</div>
            <br></br>
            <div className="productName">Product (insert) : Question Body</div>
            <br></br>
            <textarea
              className="modalSubmit"
              placeholder="submit answer here..."
              rows={6}
              type="text"
              maxLength="1000"
              required
              onChange={this.handleWordCountSubmit}
            />
            <p>Limit: {this.state.charsLeft}</p>
            <label>
              Add Email &nbsp;
              <input
                className="modalEmail"
                placeholder="Example: jack@email.com"
                type="text"
                maxLength="60"
                required
                onChange={this.handleWordCountEmail}
              ></input>
              <p>Limit: {this.state.charsLeftEmail}</p>
            </label>
            <label>
              **For authentication reasons, you will not be emailed**
            </label>
            <br></br>
            <br></br>
            <label>
              Add Nickname &nbsp;
              <input
                className="modalNickname"
                placeholder="Example: jack543!"
                type="text"
                maxLength="60"
                required
                onChange={this.handleWordCountNickname}
              ></input>
              <p>Limit: {this.state.charsLeftNickname}</p>
            </label>
            <label>
            **For privacy reasons, do not use your full name or email address**
            </label>
            <br></br>
            <br></br>
            <button onClick={this.handleWordCountButton}>Submit</button>
          </div>
        );
      case "Modal B":
        return <div className="addQuestion">ADD QUESTION MODAL HERE</div>;
      default:
        return null;
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  // }

  // componentDidMount() {
  //   this.getAllData();
  // }

  // getAllData() {
  //   var pid = this.props.prodID;
  //   axios
  //     .get(`/qa/questions/`, {
  //       params: { product_id: pid },
  //     })
  //     .then((res) => {
  //       this.setState({ data: res.data });
  //     })
  //     .then(() => {
  //       axios.get(`qa/questions/${pid}`).then((res) => {
  //         this.setState({ product: res.data.name });
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  closeModal(e) {
    e.stopPropagation();
    this.props.closeModal();
  }

  render() {
    const divStyle = {
      display: this.props.displayModal ? "block" : "none",
    };
    return (
      <div className="modal" onClick={this.closeModal} style={divStyle}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={this.closeModal}>
            &times;
          </span>
          <div className="modal-flex">{this.displayInfo()}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
