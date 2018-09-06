import React, { Component } from "react";
import "./eventAdd.css"

export default class EventAdd extends Component {
    state = {
        title: "",
        location: "",
        date: "",
        time: "",
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id.split("-")[1]] = evt.target.value
        this.setState(stateToChange)
    }

    buildEvent = () => {
        if(this.state.title === "" || this.state.location === "" || this.state.date === "" || this.state.time === ""){
            alert("Please fill out the rest of the information for your Event :)")
        } else {
            let newEvent = this.state
            newEvent.userId = JSON.parse(localStorage.getItem("user")).id
            this.props.renderAddBtn()
            this.props.addEvent(newEvent)
        }
    }
    
    
    render(){
        return (
            <div className="event-form">
                <label htmlFor="event-title">Title</label>
                <input required type="text" id="event-title" placeholder="What're you doing?" onChange={this.handleFieldChange} />
                <label htmlFor="event-location">Location</label>
                <input required type="text" id="event-location" placeholder="Where are you doing it?" onChange={this.handleFieldChange} />
                <label htmlFor="event-date">Date</label>
                <input required type="date" id="event-date" onChange={this.handleFieldChange} />
                <label htmlFor="event-time">Time</label>
                <input type="time" required id="event-time" onChange={this.handleFieldChange} />
                <div className="form-button-container">
                    <button id="save-event-button" onClick={this.buildEvent}>Save Event</button>
                    <button id="leave-event-form" onClick={this.props.renderAddBtn}>Go Back</button>
                </div>
            </div>
        )
    }
}