import React, { Component } from "react";

export default class FriendTasks extends Component {
    render(){
        return (
            <div className="task-list-container">
                {
                    this.props.tasks.map(task => {
                        return (
                            <div key={task.id} className="card task-card">
                                <div className="card-body">
                                    <h4 className="card-title">{task.title}</h4>
                                    <p>{task.description}</p>
                                    <p>{task.date}</p> 
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}