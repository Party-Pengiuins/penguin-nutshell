import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup } from 'reactstrap';

export default class EditMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        title: undefined,
        description: undefined,
        date: undefined
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
        date: DateMod.getDate(),
        userId: this.props.user.id,
        content: this.state.messageName,
    }
    
    console.log(message)
    
        this.setState({
            modal: !this.state.modal,
            date: undefined,
            userId: undefined,
            content: undefined,
        })

        // this.newTitle.value=""
        this.props.editMessage("messages", message)
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
        <Button color="success" onClick={this.toggle}>Edit Messages</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Messages</ModalHeader>
          <ModalBody>
            <FormGroup>
            <Label>Date:</Label>
            <Input className="form-control mb-2"
                    onChange={this.handleFieldChange.bind(this)}
                    required=""
                    id="date"
                    type="date"
                    />
            <Label>User Name:</Label>
            <Input id="title"
                    // ref={(input) => this.newTitle = input}
                    className="form-control mb-2"
                    type="text"
                    onChange={this.handleFieldChange.bind(this)}
                    placeholder="Name" />
            <Label for="message">Message:</Label>
            <Input id="message"
                    className="form-control mb-2"
                    type="textarea"
                    required=""
                    name="text"
                    onChange={this.handleFieldChange.bind(this)}
                    placeholder="Message" />
            
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" type="submit" onClick={this.props.editMessage}>Save Edit</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}