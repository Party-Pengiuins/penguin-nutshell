import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup } from 'reactstrap';

export default class EditMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        content: this.props.message.content
    };

    this.toggle = this.toggle.bind(this);
  }
  
// for bootstrap

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  editOldMessage = evt => {
    evt.preventDefault()
    const message = {
        content: this.state.content,
    }
    
    console.log(message)
    
        this.props.editMessage(this.props.message.id, message)
        .then(() => this.setState({
          modal: !this.state.modal,
          content: undefined,
      }))
    }
  

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

  render() {
    return (
      <React.Fragment>
        <Button color="success" onClick={this.toggle}>Edit Message</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <div className="madi-modal"><ModalHeader toggle={this.toggle}>Edit Message</ModalHeader>
          <ModalBody>
            <FormGroup>
            <Label for="message">Message:</Label>
            <Input id="content"
                    className="form-control mb-2"
                    defaultValue={this.props.message.content}
                    type="textarea"
                    required=""
                    name="text"
                    onChange={this.handleFieldChange.bind(this)}
                    placeholder="Message" />
            
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" type="submit" onClick={this.editOldMessage}>Save Edit</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}