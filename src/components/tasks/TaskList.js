import React, { Component } from "react";
import TaskCard from "./TaskDetails"
import TaskForm from "./TaskForm"
export default class TaskList extends Component {   
    render(){
        return (
            <div>
            <div>
            {
                    this.props.tasks.map(task =>
                        <TaskCard key={task.id} task={task} deleteTask={this.props.deleteTask} {...this.props} />
                    )
                }
            </div>
            <TaskForm addTask={this.props.addTask} {...this.props}/>
            </div>
        )
    }
}