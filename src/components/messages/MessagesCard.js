import React, { Component } from "react"
//import { Link } from "react-router-dom"
import "./Messages.css"

export default class MessageCard extends Component {
    render() {
        return (
            <div key={this.props.message.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.message.name}
                        <a href="#"
                            onClick={() => this.props.deleteMessage(this.props.message.id)}
                            className="card-link">Delete</a>
                             <a href="#" 
                            onClick={() => this.props.history.push(`/messages/edit/${message.id}`)}
                            className="card-link">Edit</a>
                    </h5>
                </div>
            </div>
        )
    }
}