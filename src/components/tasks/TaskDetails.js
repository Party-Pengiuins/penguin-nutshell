import React from "react"

const TaskCard = ({task}) => {
    return (
        <div className="card task-card">
            <div className="card-body">
                <h4 className="card-title">{task.title}</h4>
                <p>{task.description}</p>
                <a href={task.url}>{task.url}</a>
                <p>{task.date}</p>
                    <button
                        className="card-link">Task Complete
                    </button>
                    <button
                        className="card-link">Delete Task
                    </button>
                    <button
                        className="card-link">Edit Task
                    </button>
                </div>
        </div>
    )
}

export default TaskCard