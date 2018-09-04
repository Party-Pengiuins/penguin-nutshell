import React, { Component } from "react"
import "./Messages.css"

export default class MessagesForm extends Component {
    // Set initial state //emplty like empty string to be blank
    state = {
        message: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewMessage = evt => {
        evt.preventDefault()
            const message = {
                name: this.state.messageName,
            }

            // Create the animal and redirect user to animal list
            this.props.addMessage(message).then(() => this.props.history.push("/messages"))
        
    }

    render() {
        return (
            <React.Fragment>
                <form className="MessageForm">
                    <div className="form-group">
                        <label htmlFor="messageName">Message name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="messageName"
                               placeholder="Message name" />
                    </div>
                    <button type="submit" onClick={this.constructNewMessage} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}