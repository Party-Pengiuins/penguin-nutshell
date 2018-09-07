import React, { Component } from "react";

export default class FriendCard extends Component {
    state = {
        friend: {}
    }

    componentDidMount(){
        let friend = this.props.allUsers.find(u => u.id === this.props.friend.friendId)
        this.setState({friend: friend})
    }

    viewFriend = () => {
        sessionStorage.setItem("friend", JSON.stringify(this.state.friend))
        this.props.history.push(`/friends/friendpage/${this.state.friend.username}`)
    }
    
    render(){
        return (
            <div className="friend-card"><span>{this.state.friend.username}</span><button onClick={this.viewFriend}>View Profile</button><button onClick={() => this.props.removeFriend(this.props.friend.id)}>Remove</button></div>
        )
    }
}