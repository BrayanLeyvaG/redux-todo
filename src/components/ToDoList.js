import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../redux/actions'


export const ToDoList = () => {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()


  return (
    <ol>
        {
            tasks.map(task => (
                <li key={task.id}>
                    <h3>{task.title}</h3>
                    <span>{task.isCompleted? "Completed" : "To do"}</span>
                    <div className="buttons">
                        <button onClick={() => dispatch({type: "SELECT_TASK", payload: task})}>Edit</button>
                        <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                    </div>
                </li>
            ))
        }
    </ol>
 )
}
