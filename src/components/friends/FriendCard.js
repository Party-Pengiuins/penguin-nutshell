import React, { Component } from "react";

export default class FriendCard extends Component {
    state = {
        friend: {}
    }

    componentDidMount(){
        let friend = this.props.allUsers.find(u => u.id === this.props.friend.friendId)
        this.setState({friend: friend})
    }
    
    render(){
        return (
            <div><span>{this.state.friend.username}</span><button>View Profile</button><button>Remove</button></div>
        )
    }
}