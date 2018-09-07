import React, { Component } from "react";

export default class NavBar extends Component {
    state = {
        loggedIn: true
    }

    handleLogout = () => {
        sessionStorage.removeItem("user")
        window.location.reload();
    }
    
    render(){
        return (
            <nav>
                <h1>Nutshell</h1>
                <button onClick={this.handleLogout}>Logout</button>
            </nav>
        )
    }
}