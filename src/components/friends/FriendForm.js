import React, { Component } from "react";

export default class FriendForm extends Component {
    state = {
        username: "",
        found: false
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    searchFriend = () => {
        let friend = this.props.allUsers.find(u => u.username === this.state.username)
        if(friend){
            this.setState({found: true})
        } else {
            alert("No user was found")
        }
    }
    
    changeMind = () => {
        this.setState({username: "", found: false})
    }

    addFriend = () => {
        let newFriend = this.props.allUsers.find(u => u.username === this.state.username);
        let newFriendship = {
            userId: this.props.user.id,
            friendId: newFriend.id
        }
        this.props.saveFriend(newFriendship)
        .then(()=> this.setState({username: "", found: false}))
    }

    render(){
        return (
            <React.Fragment>
                {
                    this.state.found === false &&
                    <div>
                        <input id="username" onChange={this.handleFieldChange} defaultValue={this.state.username}/>
                        <button onClick={this.searchFriend}>Find</button>
                    </div>
                } 
                {
                    this.state.found === true &&
                    <div>
                        <h6>{this.state.username} was found!</h6>
                        <button onClick={this.addFriend}>Add to Friends?</button>
                        <button onClick={this.changeMind}>Commitment scares you</button>
                    </div>
                }
            </React.Fragment>
        )
    }
}