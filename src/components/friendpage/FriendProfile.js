import React, { Component } from "react"
import "../profile/profileCard.css";

export default class ProfileCard extends Component {
 
    render(){
        return (
            <React.Fragment>
                <div id="profile-content">
                    <img src={this.props.user.image} alt={this.props.user.username} id="profile-image" />
                    <h2 id="profile-username">{this.props.user.username}</h2>
                    <h5 id="profile-birthday">{this.props.user.birthday}</h5>
                    <p id="profile-bio">{this.props.user.bio}</p>
                </div> 
            </React.Fragment>
        )
    }
}