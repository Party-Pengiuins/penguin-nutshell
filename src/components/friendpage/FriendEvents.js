import React, { Component } from "react";
import "../events/eventCard.css"

export default class EventCard extends Component {

    render(){
        return (
            <React.Fragment>
                <div className="event-container">
                    {
                        this.props.events.map(friendEvent => {
                            return (
                                <div key={friendEvent.id} className="event-card">
                                    <h5 className="event-date">{friendEvent.date.split("-")[1]} / {friendEvent.date.split("-")[0]}</h5>
                                    <h5 className="event-day">{friendEvent.date.split("-")[2]}</h5>
                                    <h3 className="event-title">{friendEvent.title}</h3>
                                    <h5 className="event-location">{friendEvent.location}</h5>
                                    <h5 className="event-time">{friendEvent.time}</h5>
                                </div>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}