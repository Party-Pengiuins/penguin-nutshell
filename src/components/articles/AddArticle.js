import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup } from 'reactstrap';
import "./articles.css"
import DateMod from '../modules/GetDate.js'

export default class AddArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            title: undefined,
            description: undefined,
            URL: undefined
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
            date: DateMod.getDate(),
            userId: this.props.user.id
        }
        if((article.title === undefined) || (article.description === undefined) || (article.URL === undefined) || (article.date === undefined)){
            window.alert("Please fill out the form")
        } else {
            this.setState({
                modal: !this.state.modal,
                title: undefined,
                description: undefined,
                URL: undefined
            })
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
                <Button color="success" id="new-article-btn" onClick={this.toggle}>Add New Article</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <div className="madi-modal">
                        <ModalHeader toggle={this.toggle}>Add New Article</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Label>Title:</Label>
                                <Input id="title"
                                      className="form-control mb-2"
                                      type="text"
                                      onChange={this.handleFieldChange}
                                      placeholder="Title" />
                                <Label for="description">Synopsis:</Label>
                                <Input id="description"
                                      className="form-control mb-2"
                                      type="textarea"
                                      required=""
                                      name="text"
                                      onChange={this.handleFieldChange}
                                      placeholder="Description" />
                                <Label>URL:</Label>
                                <Input id="URL"
                                        className="form-control mb-2"
                                        required=""
                                        type="text"
                                        onChange={this.handleFieldChange}
                                        placeholder="aaayyyyy new article URL" />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" type="submit" onClick={this.createNewArticle}>Add</Button>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}
