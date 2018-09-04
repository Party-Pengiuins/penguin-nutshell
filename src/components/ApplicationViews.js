import React, { Component } from 'react';

// import "./applicationViews.css";

import { Route, Redirect } from "react-router-dom";
import DataManager from "./modules/DataManager";
import UserPage from "./UserPage";
import NavBar from "./nav/NavBar";




export default class ApplicationViews extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        const newState = {}

        DataManager.getAll("articles")
        .then(allArticles => newState.articles = allArticles)
        .then(() => {
            this.setState(newState)
        })

    }



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