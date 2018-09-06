import React, { Component } from "react";


export default class ProfileEdit extends Component {
    state = {}

    componentDidMount(){
        this.setState(this.props.user)
    }
    
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id.split("-")[1]] = evt.target.value
        this.setState(stateToChange)
    }

    saveProfile = () => {
        this.props.editProfile(this.state)
        .then(() => this.props.renderProfile())
    }

    render(){
        return (
            <div id="profile-form">
                <input type="date" id="add-birthday" onChange={this.handleFieldChange} />
                <input type="text" id="add-image" defaultValue="Paste a URL from any image on the web" onChange={this.handleFieldChange} />
                <textarea defaultValue={this.props.user.bio} id="add-bio" onChange={this.handleFieldChange}></textarea>
                <div className="profile-button-container">    
                    <button id="leave-profile-form" onClick={this.props.renderProfile}>Go Back</button>
                    <button id="save-profile" onClick={this.saveProfile}>Save Changes</button>
                </div>
            </div>
        ) 
    }
}