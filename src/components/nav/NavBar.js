import React, { Component } from "react";
import "./NavBar.css"

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
            <nav className="nutshell-nav">
                <div className="nav-welcome">
                    <h1>Nutshell</h1>
                    <h3>Welcome, <span>{this.props.user.username}</span></h3>
                </div>
                <div>
                    {
                        sessionStorage.getItem("friend") &&
                        <button onClick={this.returnHome}>Return Home?</button>
                    }
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            </nav>
        )
    }
}