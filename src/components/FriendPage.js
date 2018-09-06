import { Component } from "react";
import React from "react";
import DataManager from "./modules/DataManager";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./userPage.css"

import { Tabs, Tab, TabList, Icon, TabLink } from "bloomer";
import 'bulma/css/bulma.css'
import FriendProfile from "./friendpage/FriendProfile";
import FriendArticles from "./friendpage/FriendArticles";
import FriendEvents from "./friendpage/FriendEvents";


export default class FriendPage extends Component {
    state = {
        user: {},
        events: [],
        tasks: [],
        articles: [],
        messages: [],
        friends: [],
        allUsers: [],
        articleShow: true,
        eventShow: false,
        taskShow: false
    }

    componentDidMount(){
        let newState = {};
        DataManager.getUser(this.props.match.params.username)
        .then(user => {newState.user = user[0]})
        .then(() => DataManager.getUserData("events", newState.user.id))
        .then(events => {newState.events = events})
        .then(() => DataManager.getUserData("tasks", newState.user.id))
        .then(tasks => {newState.tasks = tasks})
        .then(() => DataManager.getUserData("articles", newState.user.id, "id", "asc"))
        .then(articles => {newState.articles = articles})
        .then(() => DataManager.getAll("messages"))
        .then(messages => {newState.messages = messages})
        .then(() => DataManager.getAll("users"))
        .then(users => {newState.allUsers = users})
        .then(() => DataManager.getUserData("friends", newState.user.id))
        .then(friends => {newState.friends = friends})
        .then(() => {
            this.setState(newState)
        })
    }

    showArticles = (e) => {
        e.target.parentElement.parentElement.parentElement.children[1].classList.remove("is-active")
        e.target.parentElement.parentElement.parentElement.children[2].classList.remove("is-active")
        e.target.parentElement.parentElement.classList.add("is-active")
        this.setState({
            articleShow: true,
            eventShow: false,
            taskShow: false
        })
    }
    
    showEvents = (e) => {
        console.log("events clicked")
        e.target.parentElement.parentElement.parentElement.children[0].classList.remove("is-active")
        e.target.parentElement.parentElement.parentElement.children[2].classList.remove("is-active")
        e.target.parentElement.parentElement.classList.add("is-active")
        this.setState({
            articleShow: false,
            eventShow: true,
            taskShow: false
        })
    }
    showTasks = (e) => {
        e.target.parentElement.parentElement.parentElement.children[0].classList.remove("is-active")
        e.target.parentElement.parentElement.parentElement.children[1].classList.remove("is-active")
        e.target.parentElement.parentElement.classList.add("is-active")
        this.setState({
            articleShow: false,
            eventShow: false,
            taskShow: true
        })
    }

    

    render(){
        return (
            <div className="content-container">
                <div className="left-container">
                    <FriendProfile user={this.state.user} />
                </div>
                <div className="mid-container">
                    <Tabs>
                        <TabList>
                            <Tab isActive>
                                <TabLink>
                                    <Icon isSize='small'><span className='fa fa-image' aria-hidden='true' /></Icon>
                                    <span onClick={this.showArticles}>Articles</span>
                                </TabLink>
                            </Tab>
                            <Tab>
                                <TabLink>
                                    <Icon isSize='small'><span className='fa fa-music' aria-hidden='true' /></Icon>
                                    <span onClick={this.showEvents}>Events</span>
                                </TabLink>
                            </Tab>
                            <Tab>
                                <TabLink>
                                    <Icon isSize='small'><span className='fa fa-film' aria-hidden='true' /></Icon>
                                    <span onClick={this.showTasks}>Tasks</span>
                                </TabLink>
                            </Tab>
                        </TabList>
                    </Tabs>
                    {
                        this.state.articleShow === true &&
                        <FriendArticles articles={this.state.articles} />
                    }
                    {
                        this.state.eventShow === true &&
                        <FriendEvents events={this.state.events} />
                    }
                    {
                        this.state.taskShow === true &&
                        <h1>hello</h1>
                    }
                </div>
                <div className="right-container">
                    <h2>More Stuffs!</h2>
                    
                </div>
            </div>
        )
    }
}