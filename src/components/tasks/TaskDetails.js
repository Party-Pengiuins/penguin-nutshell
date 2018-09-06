import React from "react"

const TaskCard = ({task, deleteTask}) => {
    return (
        <div className="card task-card" key= {task.id}>
            <div className="card-body">
                <h4 className="card-title">{task.title}</h4>
                <p>{task.description}</p>
                <a href={task.url}>{task.url}</a>
                <p>{task.date}</p>
                    <button
                        className="card-link task-complete">Task Complete
                    </button>
                    <button
                    onClick={() => deleteTask(task.id)}
                        className="card-link task-delete">Delete Task
                    </button>
                    <button
                        className="card-link task-edit">Edit Task
                    </button>
                </div>
        </div>
    )
}

export default TaskCard