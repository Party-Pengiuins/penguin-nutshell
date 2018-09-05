import React, { Component } from "react";
import "./eventAdd.css"

export default class EventAdd extends Component {
    state = {
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
    }

    handleFieldChange = evt => {
        console.log(this.state)
        const stateToChange = {}
        stateToChange[evt.target.id.split("-")[1]] = evt.target.value
        this.setState(stateToChange)
    }

    buildEvent = () => {
        let newEvent = this.state
        newEvent.userId = JSON.parse(localStorage.getItem("user")).id
        console.log(newEvent)
        this.props.renderAddBtn()
        this.props.addEvent(newEvent)
    }
    
    
    render(){
        return (
            <div className="event-form">
                <label htmlFor="event-title">Title</label>
                <input required type="text" id="event-title" placeholder="What're you doing?" onChange={this.handleFieldChange} />
                <label htmlFor="event-description">Small Description of the Event</label>
                <input required type="text" id="event-description" placeholder="Briefly describe it" onChange={this.handleFieldChange} />
                <label htmlFor="event-location">Location</label>
                <input required type="text" id="event-location" placeholder="Where are you doing it?" onChange={this.handleFieldChange} />
                <label htmlFor="event-date">Date</label>
                <input required type="date" id="event-date" onChange={this.handleFieldChange} />
                <label htmlFor="event-time">Time</label>
                <input type="time" required id="event-time" onChange={this.handleFieldChange} />
                <div className="form-button-container">
                    <button id="save-event-button" onClick={this.buildEvent}>Save Event</button>
                    <button id="leave-event-form">Go Back</button>
                </div>
            </div>
        )
    }
}