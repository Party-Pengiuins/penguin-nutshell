import React, { Component } from "react"
import "./Messages.css"
//import MessageCard from "./MessagesCard"

export default class MessagesList extends Component {
    render () {
        return (
            <React.Fragment>
                
                <section className="messages">
                {
                    this.props.messages.map(message =>
                        <MessageCard key={message.id} message={message.content} {...this.props} />
                    )
                }
                </section>
                <div className="MessageButton">
                    <button type="button"
                            onClick={()=> this.props.history.push("/messages/new")}
                            className="btn btn-success">
                        Add Message
                    </button>
                </div>
            </React.Fragment>
        )
    }
}