import React from 'react';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/button'

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: null };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  render() {
    return(
      <Modal
        show={this.props.isOpen}
        onHide={this.props.closeModal}
      >
      <Modal.Header closeButton>
        <Modal.Title>Write Your Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form.Group >
              <Form.Label>Name: </Form.Label>
              <Form.Control type="text" onChange={this.handleChange} value={this.state.name} placeholder="name input"/>
          </Form.Group>
          <Form.Group >
              <Form.Label>Do you recommend this product?</Form.Label>
              <Form.Check inline label="Yes" type={'checkbox'} id={'inline-checkbox-1'} />
              <Form.Check inline label="No" type={'checkbox'} id={'inline-checkbox-1'} />
          </Form.Group>
          <Form.Group >
          <Form.Label>Summary</Form.Label>
              <Form.Control as="textarea" rows={2} onChange={this.handleChange} value={this.state.summary} placeholder="Example: Best purchase ever!"/>
          </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={() => this.props.handleSubmit(this.state.name)}>
              Submit
          </Button>
      </Modal.Footer>
    </Modal>
    )
  }
}

export default AddReview;