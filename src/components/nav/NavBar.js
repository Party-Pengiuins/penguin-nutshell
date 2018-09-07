import React, { Component } from "react";

export default class NavBar extends Component {
    state = {
        loggedIn: true
    }

    handleLogout = () => {
        sessionStorage.removeItem("user")
        window.location.reload();
    }

    returnHome = () => {
        sessionStorage.removeItem("friend");
        this.props.history.push("/userpage")
    }
    
    render(){
        return (
            <nav>
                <h1>Nutshell</h1>
                {
                    sessionStorage.getItem("friend") &&
                    <button onClick={this.returnHome}>Return Home?</button>
                }
                <button onClick={this.handleLogout}>Logout</button>
            </nav>
        )
    }
}