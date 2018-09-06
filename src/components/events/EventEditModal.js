import React, { Component } from 'react';
import { Button, Modal, ModalFooter } from 'reactstrap';
import "./eventEditModal.css";

export default class EventEditModal extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            event: this.props.event
        };

        this.toggle = this.toggle.bind(this);
    }

    handleFieldChange = evt => {
        const stateToChange = this.state.event
        stateToChange[evt.target.id.split("-")[1]] = evt.target.value
        this.setState({event: stateToChange})
    }

    handleSave = () => {
        console.log("edit initiated")
        this.props.editEvent(this.state.event.id, this.state.event);
        this.toggle();
    }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggle}>Edit</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <div className="event-form">
                        <label htmlFor="event-title">Title</label>
                        <input type="text" id="event-title" defaultValue={this.props.event.title} onChange={this.handleFieldChange} />
                        <label htmlFor="event-location">Location</label>
                        <input type="text" id="event-location" defaultValue={this.props.event.location} onChange={this.handleFieldChange} />
                        <label htmlFor="event-date">Date</label>
                        <input type="date" id="event-date" defaultValue={this.props.event.date} onChange={this.handleFieldChange} />
                        <label htmlFor="event-time">Time</label>
                        <input type="time" id="event-time" onChange={this.handleFieldChange} />
                        <ModalFooter>
                            <Button color="primary" onClick={this.handleSave}>Save Changes</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </div>
                </Modal>
            </div>
        );
    }
}

