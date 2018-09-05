import React, { Component } from "react";
import EventCard from "./EventCard";
import EventAdd from "./EventAdd";

export default class EventList extends Component {
    state = {
        
        addEvent: false
    }


    renderEventForm = () => {
        this.setState({
            addEvent: true
        })
    }

    renderAddBtn = () => {
        this.setState({addEvent: false})
    }


    
    render(){
        return (
            <div>
                {
                    this.state.addEvent === false &&
                    <button onClick={this.renderEventForm}>Add Event</button>
                }
                {
                    this.state.addEvent === true &&
                    <EventAdd addEvent={this.props.addEvent} renderAddBtn={this.renderAddBtn} />
                }
                {
                    this.props.events.map(event => {
                        return <EventCard key={event.id} event={event} removeEvent={this.props.removeEvent} />
                    })
                }
            </div>
        )
    }
}