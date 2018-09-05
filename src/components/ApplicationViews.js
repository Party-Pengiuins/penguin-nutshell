import React, { Component } from 'react';

// import "./applicationViews.css";

import { Route, Redirect } from "react-router-dom";
import UserPage from "./UserPage";
import NavBar from "./nav/NavBar";




export default class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    this.props.isAuthenticated() &&
                    <div className="viewArea">
                        <NavBar />
                        <Route exact path="/userpage" render={(props) => {
                                return <UserPage />
                            }} />
                    </div>
                }
                {
                    !this.props.isAuthenticated() &&
                    <Redirect to="/login" />
                }
            </React.Fragment>
        )
    }
}