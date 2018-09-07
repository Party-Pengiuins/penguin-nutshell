import React, { Component } from "react"
import "./Messages.css"
import MessageCard from "./MessagesCard"
import DateMod from "../modules/GetDate";

export default class MessagesList extends Component {
    

/*
    state = {
        newMessage: "",
    }
*/
 
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    
    
    constructNewMessage = evt => {
        evt.preventDefault()
        const message = {
            date: DateMod.getDate(),
            userId: this.props.user.id,
            content: this.state.messageName,
            //userId: this.props.users.find(e => e.username === this.state.username).id
            //userName: this.state.username,
            
        }
        document.querySelector("#messageName").value = "";
        this.props.addMessage(message)//.then(() => this.setState())

        
    }


    render () {
        return (
            <React.Fragment>
                <section className="messages">
                {
                    this.props.messages.map(message => 
                        <MessageCard key={message.id }message={message} 
                        editOldMessage = {this.props.editOldMessage}
                        allUsers={this.props.allUsers} user={this.props.user} {...this.props} />
                    )
                }
                </section>


                <form className="MessageForm">
                    <div className="form-group">
                        <label className="message-label" htmlFor="messageName">New Message:</label>
                        <textarea required="true" 
                                    className="form-control" 
                                    onChange={this.handleFieldChange}
                                    id="messageName"
                                    placeholder="Message content">{}</textarea>
                    </div>
                    <button type="submit" onClick={this.constructNewMessage} className="btn btn-primary">Submit</button>
                </form>
                
            </React.Fragment>
        )
    }
}


/*
<div className="MessageButton">
                    <button type="button"
                            onClick={() => <MessageForm />}
                            className="btn btn-success">
                        Add Message
                        
                    </button>
                </div>
                */

/*
 state = {
        messages: [],
    }

    componentDidMount(){
        this.setState({
            messages: this.props.messages
        })
    }


*/