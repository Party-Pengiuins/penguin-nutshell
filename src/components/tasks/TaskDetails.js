import EditTask from "./TaskEditForm"
import React, { Component } from "react";

export default class TaskCard extends Component {

    render(){
        let taskisComplete={completed:true}
        return (
            <div className="card task-card">
             <div className="card-body">
                 <h4 className="card-title">{this.props.task.title}</h4>
                 <p>{this.props.task.description}</p>
                <p>{this.props.task.date}</p>
                     <button
                    onClick={() => this.props.taskComplete(this.props.task.id, taskisComplete)}
                        className="card-link task-complete">Task Complete
                    </button>
                    <button
                    onClick={() => this.props.deleteTask("tasks", this.props.task.id)}
                        className="card-link task-delete">Delete Task
                    </button>
                    <EditTask taskId={this.props.task.id} taskDescription={this.props.task.description} taskDate={this.props.task.date} taskTitle={this.props.task.title} editTask={this.props.editTask}/>
                </div>
        </div>
        )
    }
}