/*
import React, { Component } from "react"
import "./Messages.css"
//import DataManager from "../modules/DataManager";

export default class MessagesForm extends Component {
    // Set initial state //emplty like empty string to be blank
    state = {
        newMessage: "",
    }

  
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    
    
    constructNewMessage = evt => {
        evt.preventDefault()
            const message = {
                date: this.state.Date.now(),
                name: this.state.messageName,
                //userName: this.state.username,
                
            }

        
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

*/