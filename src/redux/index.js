import { actions } from "./actions"

const INITIAL_STATE = {
    tasks: [
        {
            id: 1,
            title: 'Hacer tarea',
            isCompleted: false
        },
        {
            id: 2,
            title: 'Hacer ejercicio',
            isCompleted: true
        }
    ],
    taskSelected: null
}

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){
            case actions.addTask:
                return{
                    ...state,
                    tasks: [...state.tasks, action.payload]
                }
            
            case actions.deleteTask:
                return{
                    ...state,
                    tasks: state.tasks.filter((task => task.id !== action.payload))
                }

            case "SELECT_TASK":
                return{
                    ...state,
                    taskSelected: action.payload
                }

            case actions.editTask:
                const index = state.tasks.findIndex(task => task.id === action.payload.id)
                state.tasks[index] = action.payload
                return{
                    ...state,
                    tasks: [...state.tasks],
                    taskSelected: null
                }


        default:
            return state;
    }
}

export default reducer;