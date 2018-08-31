import React from "react";
import { Component } from "react";
import "./login.css";
import loginAnimation from "../modules/loginAnimation";
import DataManager from "../modules/DataManager";

export default class Login extends Component {
    state = {
        username: "",
        email: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogin = (e) => {
        if(!this.state.username && !this.state.email){
            loginAnimation(e)
        } else if(this.state.username && this.state.email){
            DataManager.getAll("users").then((users)=>{
                let loginUser = users.find(user => user.username === this.state.username && user.email === this.state.email)
                if(loginUser){
                    console.log("hello")
                    localStorage.setItem("user", JSON.stringify(loginUser))
                    this.props.history.push("/userpage")
                } else {
                    alert("Please actually login you piece of shit")
                }
            })
        }
    }
    
    render() {
        return (    
            <div className="login-container">
                <div className="form-collection">
                    <div className="card elevation-3 limit-width log-in-card below turned">
                        <div className="card-body">
                            <h2>Register</h2>
                            <div className="input-group username">
                                <input type="text" placeholder="Create a Username" id="username" onChange={this.handleFieldChange} />
                            </div>
                            <div className="input-group email">
                                <input type="text" placeholder="Register Your Email" id="email" onChange={this.handleFieldChange} />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="signup-btn" onClick={this.handleLogin}>Sign Up</button>
                        </div>
                    </div>
                    <div className="card elevation-2 limit-width sign-up-card above">
                        <div className="card-body">
                            <h2>Welcome to NutShell</h2>
                            <small>Another dumb-ass Social Network</small>
                            <div className="input-group username">
                                <input type="text" placeholder="Username" id="username" onChange={this.handleFieldChange} />
                            </div>
                            <div className="input-group email">
                                <input type="email" placeholder="Email" id="email" onChange={this.handleFieldChange} />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="login-btn" onClick={this.handleLogin}>Log in</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}