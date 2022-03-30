export const actions = {
    addTask: 'ADD_TASK',
    deleteTask: 'DELETE_TASK',
    editTask: 'EDIT_TASK'
}

export const addTask = (task) => ({
    type: actions.addTask,
    payload: task
})

export const deleteTask = (id) => ({
    type: actions.deleteTask,
    payload: id
})

export const editTask = (task) => ({
    type: actions.editTask,
    payload: task
})