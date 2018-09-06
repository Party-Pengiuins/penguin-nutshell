import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup } from 'reactstrap';

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        title: undefined,
        description: undefined,
        completed: false,
        date: undefined,
        userId: JSON.parse(localStorage.getItem("user")).id
    };

    this.toggle = this.toggle.bind(this);
  }
  
// for bootstrap
  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  createNewTask = evt => {
    evt.preventDefault()
    const task = {
        title: this.state.title,
        description: this.state.description,
        completed: false,
        date: this.state.date,
        userId: JSON.parse(localStorage.getItem("user")).id
    }
    if((task.title === undefined) || (task.description === undefined) || (task.date === undefined)){
        window.alert("Please fill out the form")
    } else {
        this.setState({
            modal: !this.state.modal,
            title: undefined,
            description: undefined,
            completed: false,
            date: undefined,
            userId: JSON.parse(localStorage.getItem("user")).id
        })

        // this.newTitle.value=""
        this.props.addTask("tasks", task)
    }
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
        <Button color="success" onClick={this.toggle}>Add New Task</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add New Task</ModalHeader>
          <ModalBody>
            <FormGroup>
            <Label>Title:</Label>
            <Input id="title"
                    className="form-control mb-2"
                    type="text"
                    onChange={this.handleFieldChange.bind(this)}
                    placeholder="Title" />
            <Label for="description">Synopsis:</Label>
            <Input id="description"
                    className="form-control mb-2"
                    type="textarea"
                    required=""
                    name="text"
                    onChange={this.handleFieldChange.bind(this)}
                    placeholder="Description" />
            <Label>Date:</Label>
            <Input className="form-control mb-2"
                    onChange={this.handleFieldChange.bind(this)}
                    required=""
                    id="date"
                    type="date"
                    />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" type="submit" onClick={this.createNewTask}>Add</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}