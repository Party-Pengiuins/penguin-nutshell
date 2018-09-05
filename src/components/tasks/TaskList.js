import React, { Component } from "react";
import TaskCard from "./TaskDetails"
export default class TaskList extends Component {   
    componentDidMount(){
        console.log("I'm a real boy now")
    }
    render(){
        return (
            <div>
            <div>
            {
                    this.props.tasks.map(task =>
                        <TaskCard key={task.id} task={task} {...this.props} />
                    )
                }
            </div>
            <button>Add New Task</button>
            </div>
        )
    }
}