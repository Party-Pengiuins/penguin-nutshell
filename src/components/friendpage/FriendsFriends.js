import React, { Component } from "react";

export default class FriendsList extends Component {
    
    handleAddFriend = (friend) => {
        let newFriendShip = {
            userId: JSON.parse(localStorage.getItem("user")).id,
            friendId: friend.id
        }
        this.props.addFriend(newFriendShip)
    }

    render(){
        return (
            <React.Fragment>
                <div className="friends-list">
                    {
                        this.props.friends.map(friendship => {
                            let friend = this.props.allUsers.find(u => u.id === friendship.friendId)
                            return (
                                <div key={friend.id} className="friend-card">
                                    <span>{friend.username}</span>
                                    {
                                        !this.props.loginUserFriends.find(f => f.friendId === friend.id) &&
                                        friend.username !== JSON.parse(localStorage.getItem("user")).username &&
                                        <button onClick={() => {this.handleAddFriend(friend)}}>Add to friends?</button>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}