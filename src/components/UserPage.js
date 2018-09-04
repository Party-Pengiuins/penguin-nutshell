import { Component } from "react";
import React from "react";
import DataManager from "./modules/DataManager";
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./userPage.css"
// import ArticleList from "./articles/ArticleList";
import EventList from "./events/EventList";
import TaskList from "./tasks/TaskList";
import { Tabs, Tab, TabList, Icon, TabLink } from "bloomer";
import 'bulma/css/bulma.css'

export default class UserPage extends Component {
    state = {
        user: {},
        events: [],
        tasks: [],
        articles: [],
        messages: [],
        friends: [],
        articleShow: true,
        eventShow: false,
        taskShow: false
    }

    componentDidMount(){
        let newState = {};
        let localUser = JSON.parse(localStorage.getItem("user"));
        newState.user = localUser;
        DataManager.getUserData("events", localUser.id)
        .then(events => {newState.events = events})
        .then(() => DataManager.getUserData("tasks", localUser.id))
        .then(tasks => {newState.tasks = tasks})
        .then(() => DataManager.getUserData("articles", localUser.id))
        .then(articles => {newState.articles = articles})
        .then(() => DataManager.getUserData("messages", localUser.id))
        .then(messages => {newState.messages = messages})
        .then(() => DataManager.getUserData("friends", localUser.id))
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
            articleShow: false,
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
                    <h2>Stuffs!</h2>
                </div>
                <div className="mid-container">
                    <Tabs>
                        <TabList>
                            <Tab isActive>
                                <TabLink>
                                    <Icon isSize='small'><span className='fa fa-image' aria-hidden='true' /></Icon>
                                    <span>Articles</span>
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
                    {/* {
                        this.state.articleShow === true &&
                        <ArticleList articles={this.state.articles}/>
                    } */}
                    {
                        this.state.eventShow === true &&
                        <EventList events={this.state.events}/>
                    }
                    {
                        this.state.taskShow === true &&
                        <TaskList tasks={this.props.tasks}/>
                    }
                </div>
                <div className="right-container">
                    <h2>More Stuffs!</h2>
                </div>
            </div>
        )
    }
}