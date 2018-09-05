import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup } from 'reactstrap';

export default class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        title: undefined,
        description: undefined,
        URL: undefined,
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

  createNewArticle = evt => {
    evt.preventDefault()
    const article = {
        title: this.state.title,
        description: this.state.description,
        URL: this.state.URL,
        date: this.state.date,
        // not sure if this is how i'm going to be using this, adding it here for now
        userId: 3
    }
    
    console.log(article)
    if((article.title === undefined) || (article.description === undefined) || (article.URL === undefined) || (article.date === undefined)){
        window.alert("Please fill out the form")
    } else {
        this.setState({
            modal: !this.state.modal,
            title: undefined,
            description: undefined,
            URL: undefined,
            date: undefined
        })

        // this.newTitle.value=""
        this.props.addArticle("articles", article)
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
        <Button color="success" onClick={this.toggle}>Add New Article</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add New Article</ModalHeader>
          <ModalBody>
            <FormGroup>
            <Label>Title:</Label>
            <Input id="title"
                    // ref={(input) => this.newTitle = input}
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
            <Label>URL:</Label>
            <Input id="URL"
                    className="form-control mb-2"
                    required=""
                    type="text"
                    onChange={this.handleFieldChange.bind(this)}
                    placeholder="aaayyyyy new article URL" />
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
            <Button color="success" type="submit" onClick={this.createNewArticle}>Add</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
