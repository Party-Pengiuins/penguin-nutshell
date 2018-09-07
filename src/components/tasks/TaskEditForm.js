import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup } from 'reactstrap';
import "./tasks.css"
export default class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        title: undefined,
        description: undefined,
        completed: false,
        date: undefined,
        userId: JSON.parse(sessionStorage.getItem("user")).id
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
        userId: JSON.parse(sessionStorage.getItem("user")).id
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
            userId: JSON.parse(sessionStorage.getItem("user")).id
        })

        // this.newTitle.value=""
        this.props.editTask(this.props.taskId, task)
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
        <Button color="success" onClick={this.toggle}>Edit Task</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <div className="task-modal">
          <ModalHeader toggle={this.toggle}>Edit Task</ModalHeader>
          <ModalBody>
            <FormGroup>
            <Label>Title:</Label>
            <Input id="title"
                    className="form-control mb-2"
                    type="text"
                    defaultValue={this.props.taskTitle}
                    onChange={this.handleFieldChange.bind(this)}/>
            <Label for="description">Synopsis:</Label>
            <Input id="description"
                    className="form-control mb-2"
                    type="textarea"
                    required=""
                    name="text"
                    onChange={this.handleFieldChange.bind(this)}
                    defaultValue={this.props.taskDescription}/>
            <Label>Date:</Label>
            <Input className="form-control mb-2"
                    onChange={this.handleFieldChange.bind(this)}
                    required=""
                    id="date"
                    type="date"
                    defaultValue={this.props.taskDate}
                    />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" type="submit" onClick={this.createNewTask}>Confim Edit</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}