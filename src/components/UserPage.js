import { Component } from "react";
import React from "react";
import DataManager from "./modules/DataManager";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./userPage.css"
// import ArticleList from "./articles/ArticleList";
import TaskList from "./tasks/TaskList"
import ArticleList from "./articles/ArticleList";
import EventList from "./events/EventList";
import MessageList from "./messages/MessagesList";
import { Tabs, Tab, TabList, Icon, TabLink } from "bloomer";
import 'bulma/css/bulma.css'
import ProfileCard from "./profile/ProfileCard";

export default class UserPage extends Component {
    state = {
        user: {},
        allUsers: [],
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
        let localUser = JSON.parse(sessionStorage.getItem("user"));
        newState.user = localUser;
        DataManager.getUserData("events", localUser.id)
        .then(events => {newState.events = events})
        .then(() => DataManager.getUnfinishedTasks("tasks", localUser.id))
        .then(tasks => {newState.tasks = tasks})
        .then(() => DataManager.getUserData("articles", localUser.id, "id", "asc"))
        .then(articles => {newState.articles = articles})
        .then(() => DataManager.getAll("messages"))
        .then(messages => {newState.messages = messages})
        .then(() => DataManager.getAll("users"))
        .then(users => {newState.allUsers = users})
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
            articleShow: true,
            eventShow: false,
            taskShow: false
        })
    }
    addArticle = (string, article) => {
        DataManager.add(string, article)
        .then(() => DataManager.getUserData("articles", this.state.user.id))
        .then(articles => this.setState({
        articles: articles
        }))
    }
    deleteArticle = (string, article) => {
        DataManager.remove(string, article)
        .then(() => DataManager.getUserData("articles", this.state.user.id))
        .then(articles => this.setState({
            articles: articles
        }))

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


    deleteMessage = (id) => {
        DataManager.remove("messages", id).then(() => {
            DataManager.getAll("messages")
            .then(allMessages => this.setState({
                messages: allMessages
            }))
        })
    }

    addMessage = (message) => DataManager.add("messages", message)
    .then(() => DataManager.getAll("messages"))
    .then(messages => this.setState({
    messages: messages
    }))

    editMessage = (id, newEntry) => DataManager.edit("messages", id, newEntry)
    .then(() => DataManager.getAll("messages"))
    .then(messages => this.setState({
    messages: messages

    }))
    taskComplete = (id, object) => {
        let localUser = JSON.parse(sessionStorage.getItem("user"));
        DataManager.edit("tasks", id, object)
        .then(() => DataManager.getUnfinishedTasks("tasks", localUser.id))
        .then((tasks) => {this.setState({tasks: tasks})})
    }
    editTask = (id, object) => {
        let localUser = JSON.parse(sessionStorage.getItem("user"));
        DataManager.edit("tasks", id, object)
        .then(() => DataManager.getUnfinishedTasks("tasks", localUser.id))
        .then((tasks) => {this.setState({tasks: tasks})})
    }
    deleteTask = (string,task) => {
            let localUser = JSON.parse(sessionStorage.getItem("user"));
            DataManager.remove(string, task)
            .then(() => DataManager.getUnfinishedTasks("tasks", localUser.id))
        .then(tasks => this.setState({
            tasks: tasks
        }))
    }
    addTask = (string, task) => {
    let localUser = JSON.parse(sessionStorage.getItem("user"));
    DataManager.add(string, task)
    .then(() => DataManager.getUnfinishedTasks("tasks", localUser.id))
        .then(tasks => this.setState({
        tasks: tasks
    }))
}

    addEvent = (object) => {
        let user = this.state.user
        DataManager.add("events", object)
        .then(() => DataManager.getUserData("events", user.id))
        .then((events) => {this.setState({events: events})})
    }
    
    removeEvent = (id) => {
        let user = this.state.user
        DataManager.remove("events", id)
        .then(() => DataManager.getUserData("events", user.id))
        .then((events) => {this.setState({events: events})})
    }

    editEvent = (id, object) => {
        DataManager.edit("events", id, object)
        .then(() => DataManager.getUserData("events", this.state.user.id))
        .then((events) => {this.setState({events: events})})
    }

    editProfile = (object) => {
        return DataManager.edit("users", this.state.user.id, object)
        .then(() => DataManager.get("users", JSON.parse(sessionStorage.getItem("user")).id))
        .then((user) => {
            sessionStorage.setItem("user", JSON.stringify(user));
            this.setState({user: user})
        })
    }

    render(){
        return (
            <div className="content-container">
                <div className="left-container">
                    <h2>Stuffs!</h2>
                    <ProfileCard user={this.state.user} editProfile={this.editProfile} />
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
                        <ArticleList user={this.state.user} articles={this.state.articles} addArticle={this.addArticle} deleteArticle={this.deleteArticle}/>
                    }
                    {
                        this.state.eventShow === true &&
                        <EventList events={this.state.events} addEvent={this.addEvent} removeEvent={this.removeEvent} editEvent={this.editEvent} />
                    }
                    {
                        this.state.taskShow === true &&
                        <TaskList deleteTask={this.deleteTask} editTask={this.editTask} addTask={this.addTask} taskComplete={this.taskComplete} tasks={this.state.tasks}/>
                    }
                </div>
                <div className="right-container">
                    <MessageList messages={this.state.messages} deleteMessage = {this.deleteMessage} addMessage = {this.addMessage} user = {this.state.user} allUsers = {this.state.allUsers} editMessage ={this.editMessage}/>
                </div>
                
            </div>
        )
    }
}