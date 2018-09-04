import React, { Component } from "react";
import "./eventCard.css"

export default class EventCard extends Component {
    render(){
        return (
            <div className="event-card">
                <h5 class="event-date">{this.props.event.date.split("-")[1]} / {this.props.event.date.split("-")[0]}</h5>
                <h5 class="event-day">{this.props.event.date.split("-")[2]}</h5>
                <h3 class="event-title">{this.props.event.title}</h3>
                <h5 class="event-location">{this.props.event.location}</h5>
                <h5 class="event-time">{this.props.event.time}</h5>
                <div class="button-container">
                    <button class="edit-event-button">Edit</button>
                    <button class="delete-event-button">Delete</button>
                </div>
            </div>
        )
    }
}