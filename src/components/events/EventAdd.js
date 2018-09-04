import React, { Component } from "react";

export default class EventAdd extends Component {
    render(){
        return (
            <div className="event-form">
                <label for="event-title">Title</label>
                <input required type="text" id="event-title" placeholder="What're you doing?" />
                <label for="event-location">Location</label>
                <input required type="text" id="event-location" placeholder="Where are you doing it?" />
                <label for="event-date">Date</label>
                <input required type="date" id="event-date" />
                <label for="event-time">Time</label>
                <input type="time" required id="event-time" />
                <div class="button-container">
                    <button id="save-event-button">Save Event</button>
                    <button id="leave-event-form">Go Back</button>
                </div>
            </div>
        )
    }
}