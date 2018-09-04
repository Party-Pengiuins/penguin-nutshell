import React, { Component } from "react";
import EventCard from "./EventCard";
import EventAdd from "./EventAdd";

export default class EventList extends Component {
    state = {
        events: [],
        addEvent: false
    }

    componentDidMount(){
        console.log("I got here")
        this.setState({
            events: this.props.events
        })
    }

    renderEventForm(){
        this.setState({addEvent: true})
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
                    <EventAdd />
                }
                {
                    this.state.events.map(event => {
                        return <EventCard key={event.id} event={event} />
                    })
                }
            </div>
        )
    }
}