import React, { Component } from "react";
import FriendCard from "./FriendCard";
import FriendForm from "./FriendForm";

export default class FriendsList extends Component {
    render(){
        return (
            <React.Fragment>
                <div className="friends-list">
                    <FriendForm allUsers={this.props.allUsers} saveFriend={this.props.saveFriend} user={this.props.user} />
                    {
                        this.props.friends.map(friend =>
                            <FriendCard key={friend.id} allUsers={this.props.allUsers} friend={friend} />
                        )
                    }
                </div>
            </React.Fragment>
        )
    }
}