import React, { Component } from "react";
import TaskCard from "./TaskDetails"
import TaskForm from "./TaskForm"
export default class TaskList extends Component {   
    render(){
        return (
            <div>
                <div>
            <TaskForm addTask={this.props.addTask} {...this.props}/>
            </div>
            <div>
            {
                    this.props.tasks.map(task =>
                        <TaskCard key={task.id} task={task} taskComplete={this.props.taskComplete} editTask={this.props.editTask} deleteTask={this.props.deleteTask} {...this.props} />
                    )
                }
            </div>
            </div>
        )
    }
}