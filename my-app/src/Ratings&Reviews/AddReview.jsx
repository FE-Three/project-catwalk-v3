/* eslint-disable */
import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/button';
import "../index.css";

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommend: true,
      name: null,
      size: null,
      width: null,
      comfort: null,
      quality: null,
      length: null,
      fit: null,
      summary: null,
      body: null,
      nickname: null,
      email: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return(
      <Modal
        show={this.props.isOpen}
        onHide={this.props.closeModal}
        dialogClassName="modal-80w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Write Your Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="recommend">
              <Form.Label>Do you recommend this product?</Form.Label>
              <Form.Check inline label="Yes" type="checkbox" id="inline-checkbox-1" />
              <Form.Check inline label="No" type="checkbox" id="inline-checkbox-1" />
            </Form.Group>
            <Form.Group controlId="size">
              <Form.Label>Size</Form.Label>
              <Form.Check inline label="A size too small" type="checkbox" id="inline-checkbox-2" />
              <Form.Check inline label="1/2 a size too small" type="checkbox" id="inline-checkbox-2" />
              <Form.Check inline label="Perfect" type="checkbox" id="inline-checkbox-2" />
              <Form.Check inline label="1/2 a size too big" type="checkbox" id="inline-checkbox-2" />
              <Form.Check inline label="A size too big" type="checkbox" id="inline-checkbox-2" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Width</Form.Label>
              <Form.Check inline label="Too narrow" type="checkbox" id="inline-checkbox-3" />
              <Form.Check inline label="Slightly narrow" type="checkbox" id="inline-checkbox-3" />
              <Form.Check inline label="Perfect" type="checkbox" id="inline-checkbox-3" />
              <Form.Check inline label="Slightly wide" type="checkbox" id="inline-checkbox-3" />
              <Form.Check inline label="Too wide" type="checkbox" id="inline-checkbox-3" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Comfort</Form.Label>
              <Form.Check inline label="Uncomfortable" type="checkbox" id="inline-checkbox-4" />
              <Form.Check inline label="Slightly uncomfortable" type="checkbox" id="inline-checkbox-4" />
              <Form.Check inline label="Ok" type="checkbox" id="inline-checkbox-4" />
              <Form.Check inline label="Comfortable" type="checkbox" id="inline-checkbox-4" />
              <Form.Check inline label="Perfect" type="checkbox" id="inline-checkbox-4" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Quality</Form.Label>
              <Form.Check inline label="Poor" type="checkbox" id="inline-checkbox-5" />
              <Form.Check inline label="Below average" type="checkbox" id="inline-checkbox-5" />
              <Form.Check inline label="What I expected" type="checkbox" id="inline-checkbox-5" />
              <Form.Check inline label="Pretty great" type="checkbox" id="inline-checkbox-5" />
              <Form.Check inline label="Perfect" type="checkbox" id="inline-checkbox-5" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Length</Form.Label>
              <Form.Check inline label="Runs short" type="checkbox" id="inline-checkbox-6" />
              <Form.Check inline label="Runs slightly short" type="checkbox" id="inline-checkbox-6" />
              <Form.Check inline label="Perfect" type="checkbox" id="inline-checkbox-6" />
              <Form.Check inline label="Runs slightly long" type="checkbox" id="inline-checkbox-6" />
              <Form.Check inline label="Runs long" type="checkbox" id="inline-checkbox-6" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fit</Form.Label>
              <Form.Check inline label="Runs tight" type="checkbox" id="inline-checkbox-7" />
              <Form.Check inline label="Slightly tight" type="checkbox" id="inline-checkbox-7" />
              <Form.Check inline label="Perfect" type="checkbox" id="inline-checkbox-7" />
              <Form.Check inline label="Slightly long" type="checkbox" id="inline-checkbox-7" />
              <Form.Check inline label="Runs long" type="checkbox" id="inline-checkbox-7" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Summary</Form.Label>
              <Form.Control as="textarea" rows={2} onChange={this.handleChange} value={this.state.summary} placeholder="Example: Best purchase ever!" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Review Body</Form.Label>
              <Form.Control as="textarea" rows={4} onChange={this.handleChange} value={this.state.body} placeholder="Why did you like the product or not?" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nickname</Form.Label>
              <Form.Control type="text" onChange={this.handleChange} value={this.state.nickname} placeholder="Example: jackson11!" />
              <Form.Text className="text-muted">
                For privacy reasons, do not use your full name or email address
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Example: jackson11@email.com" />
              <Form.Text className="text-muted">
                For authentication reasons, you will not be emailed
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="submit" onClick={() => this.props.handleSubmit(this.state.name)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddReview;
