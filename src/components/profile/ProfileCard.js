import React, { Component } from "react"
import ProfileEdit from "./ProfileEdit";
import "./profileCard.css";

export default class ProfileCard extends Component {
    state = {
        edit: false
    }
    
    renderProfileEdit = () => {
        this.setState({edit: true})
    }

    renderProfile = () => {
        this.setState({edit: false})
    }

    render(){
        return (
            <React.Fragment>
                {
                    this.state.edit === false &&
                    <div id="profile-content">
                        <img src={this.props.user.image} alt={this.props.user.username} id="profile-image" />
                        <h2 id="profile-username">{this.props.user.username}</h2>
                        <h5 id="profile-birthday">{this.props.user.birthday}</h5>
                        <p id="profile-bio">{this.props.user.bio}</p>
                        <button onClick={this.renderProfileEdit}>Update Profile</button>
                    </div>
                }
                {
                    this.state.edit === true &&
                    <ProfileEdit user={this.props.user} renderProfile={this.renderProfile} editProfile={this.props.editProfile} />
                }
                
            </React.Fragment>
        )
    }
}