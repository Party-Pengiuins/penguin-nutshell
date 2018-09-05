import React, { Component } from "react";
import "./eventCard.css"

export default class EventCard extends Component {
    render(){
        return (
            <div className="event-card">
                <h5 className="event-date">{this.props.event.date.split("-")[1]} / {this.props.event.date.split("-")[0]}</h5>
                <h5 className="event-day">{this.props.event.date.split("-")[2]}</h5>
                <h3 className="event-title">{this.props.event.title}</h3>
                <h5 className="event-description">{this.props.event.description}</h5>
                <h5 className="event-location">{this.props.event.location}</h5>
                <h5 className="event-time">{this.props.event.time}</h5>
                <div className="button-container">
                    <button className="edit-event-button">Edit</button>
                    <button className="delete-event-button">Delete</button>
                </div>
            </div>
        )
    }
}