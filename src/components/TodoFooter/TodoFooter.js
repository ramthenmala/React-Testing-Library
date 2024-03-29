import React from 'react'
import "./TodoFooter.css"
import { Link } from "react-router-dom"

function TodoFooter({
    numberOfIncompleteTasks
}) {
    return (
      <div className="todo-footer">
        {/* The Test fails due to the visibility is none */}
        {/* <p style={{opacity: 0}}>
          {numberOfIncompleteTasks}{' '}
          {numberOfIncompleteTasks === 1 ? 'task' : 'tasks'} left
        </p> */}
        <p data-testid='para'>
          {numberOfIncompleteTasks}{' '}
          {numberOfIncompleteTasks === 1 ? 'task' : 'tasks'} left
        </p>
        <Link to="/followers">Followers</Link>
      </div>
    );
}

export default TodoFooter
