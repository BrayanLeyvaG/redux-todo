import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, editTask } from '../redux/actions'

export const ToDoForm = () => {

    const [title, setTitle] = useState("")
    const [isCompleted, setIsCompleted] = useState(false)
    const dispatch = useDispatch()
    const taskSelected = useSelector(state => state.taskSelected)

    useEffect(() => {
        if (taskSelected) {
            setTitle(taskSelected.title)
            setIsCompleted(taskSelected.isCompleted)
        }

    }, [taskSelected])
    

    function submit(e) {
        e.preventDefault()
        const task = {
            id: Date.now(),
            title,
            isCompleted
        }

        if (taskSelected) {
            dispatch(editTask(task))
            
        }else{
            dispatch(addTask(task))
        }
        reset()
    }

    function reset() {
        setTitle("")
        setIsCompleted("")
    }

  return (
    <form onSubmit={submit}>
        <div>
            <label htmlFor='title'>Task</label>
            <input type='text' id='title' value={title} onChange={e => setTitle(e.target.value)} ></input>
        </div>
        <div>
            <label htmlFor='isCompleted'>Completed</label>
            <input type='checkbox' id='isCompleted' checked={isCompleted} onChange={e => setIsCompleted(e.target.checked)}></input>
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}
