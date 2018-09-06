import { Component } from "react";
import React from "react";
import DataManager from "./modules/DataManager";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./userPage.css"
import ArticleList from "./articles/ArticleList";
import EventList from "./events/EventList";
import TaskList from "./tasks/TaskList";

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
        .then(() => DataManager.getUserData("articles", localUser.id, "id", "asc"))
        .then(articles => {newState.articles = articles})
        .then(() => DataManager.getUserData("messages", localUser.id))
        .then(messages => {newState.messages = messages})
        .then(() => DataManager.getUserData("friends", localUser.id))
        .then(friends => {newState.friends = friends})
        .then(() => {
            this.setState(newState)
        })
    }

    showArticles = () => {
        this.setState({
            articleShow: true,
            eventShow: false,
            taskShow: false
        })
    }
    addArticle = (string, article) => {
        let localUser = JSON.parse(localStorage.getItem("user"));
        DataManager.add(string, article)
        .then(() => DataManager.getUserData("articles", localUser.id))
        .then(articles => this.setState({
        articles: articles
        }))
    }
    deleteArticle = (string, article) => {
        let localUser = JSON.parse(localStorage.getItem("user"));
        DataManager.remove(string, article)
        .then(() => DataManager.getUserData("articles", localUser.id))
        .then(articles => this.setState({
            articles: articles
        }))

    }
    
    showEvents = () => {
        console.log("events clicked")
        this.setState({
            articleShow: false,
            eventShow: true,
            taskShow: false
        })
    }
    showTasks = () => {
        this.setState({
            articleShow: false,
            eventShow: false,
            taskShow: true
        })
    }
    deleteTask = (string,task) => {
            let localUser = JSON.parse(localStorage.getItem("user"));
            DataManager.remove(string, task)
            .then(() => DataManager.getUserData("tasks", localUser.id))
        .then(tasks => this.setState({
            tasks: tasks
        }))
    }
    addTask = (string, task) => {
    let localUser = JSON.parse(localStorage.getItem("user"));
    DataManager.add(string, task)
    .then(() => DataManager.getUserData("tasks", localUser.id))
        .then(tasks => this.setState({
        tasks: tasks
    }))
}
    render(){
        return (
            <div className="content-container">
                <div className="left-container">
                    <h2>Stuffs!</h2>
                </div>
                <div className="mid-container">
                    <Pagination size="md" aria-label="Page navigation example">
                        <PaginationItem>
                            <PaginationLink previous href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" onClick={this.showArticles}>Articles</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" onClick={this.showEvents}>Events</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" onClick={this.showTasks}>Tasks</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next href="#" />
                        </PaginationItem>
                    </Pagination>
                    {
                        this.state.articleShow === true &&
                        <ArticleList articles={this.state.articles} addArticle={this.addArticle} deleteArticle={this.deleteArticle}/>
                    }
                    {
                        this.state.eventShow === true &&
                        <EventList events={this.state.events}/>
                    }
                    {
                        this.state.taskShow === true &&
                        <TaskList deleteTask={this.deleteTask} addTask={this.addTask} tasks={this.state.tasks}/>
                    }
                </div>
                <div className="right-container">
                    <h2>More Stuffs!</h2>
                </div>
            </div>
        )
    }
}