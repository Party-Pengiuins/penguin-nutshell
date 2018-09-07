import React, { Component } from "react"
//import DataManager from "../modules/DataManager"
//import { Link } from "react-router-dom"
import "./Messages.css"

export default class MessageCard extends Component {

    render() {
        return (
            <div key={this.props.messageId} className="card">
                {
                    this.props.user.id === this.props.message.userId &&
                    <div className="card-body">
                        <h6>{this.props.message.date}</h6>
                        <p className = "card-message" >{this.props.message.content}</p>
                        
                        <h4>{this.props.allUsers.find(u => u.id === this.props.message.userId).username}</h4>
                        <a className = "card-button" href="#"
                            onClick={() => this.props.deleteMessage(this.props.message.id)}>Delete </a>
                            
                             <a  className="card-button" href="#" 
                            onClick={() => this.props.editOldMessage}> Edit</a>
                    </div>
                }
                {
                    this.props.user.id !== this.props.message.userId &&
                    <div className="card-body">
                            <h6>{this.props.message.date}</h6>
                            <p className = "card-message" >{this.props.message.content}</p>
                            
                            <h4>{this.props.allUsers.find(u => u.id === this.props.message.userId).username}</h4>
                    </div>
                }
            </div>
        )
    }
}

/*
message.userid then compare to storage id- show delete and edit */

//(this.props.message.id)