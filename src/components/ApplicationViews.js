import React, { Component } from 'react';

// import "./applicationViews.css";

import { Route, Redirect } from "react-router-dom";
import UserPage from "./UserPage";
import FriendPage from "./FriendPage";




export default class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    this.props.isAuthenticated() &&
                    <div className="viewArea">
                        <Route exact path="/userpage" render={(props) => {
                                return <UserPage {...props} />
                            }} />
                        <Route exact path="/friends/friendpage/:username" render={(props) => {
                                return <FriendPage {...props} />
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