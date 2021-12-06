import {TasksStateType} from "../App";
import {v1} from "uuid";
import {TaskType} from "../Todolist";
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";


export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    taskId: string
    todolistId: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK',
    title: string
    todolistId: string
}
export type ChangeTaskStatus = {
    type: 'CHANGE-STATUS-TASK',
    taskId: string
    isDone: boolean
    todolistId: string

}
export type ChangeTaskTitle = {
    type: 'CHANGE-TITLE-TASK',
    taskId: string
    title: string
    todolistId: string

}

type ActionsType =
    RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatus
    | ChangeTaskTitle
    | AddTodolistActionType
    | RemoveTodolistActionType


export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case  'REMOVE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].filter(task => task.id !== action.taskId)}
        case  'ADD-TASK':
            let newTask: TaskType = {id: action.todolistId, title: action.title, isDone: false}
            return {
                ...state,
                [action.todolistId]: [newTask, ...state[action.todolistId]]
            }
        case 'CHANGE-STATUS-TASK':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(task => task.id === action.taskId ? {
                    ...task,
                    isDone: action.isDone
                } : task)
            }

        case "CHANGE-TITLE-TASK":
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(task => task.id === action.taskId ? {
                    ...task,
                    title: action.title
                } : task)
            }
        case 'ADD-TODOLIST': {
            return {...state, [action.todolistId]: []}
        }
        case 'REMOVE-TODOLIST': {

let copyState= {...state}
            delete copyState[action.id]
            return copyState

            // деструктуризация
            //     let copyState = {...state}
            //     const {[ action.id]: [], ...obj} = copyState
            //     delete copyState[action.id]
            //     return copyState
        }
        default:
            throw new Error("I don't understand this action type")
    }
}


export const RemoveTasksAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: "REMOVE-TASK", taskId, todolistId} as const
}
export const AddTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return {type: 'ADD-TASK', title, todolistId} as const
}

export const ChangeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): ChangeTaskStatus => {
    return {type: 'CHANGE-STATUS-TASK', taskId, isDone, todolistId} as const
}

export const ChangeTaskTitleAC = (taskId: string, title: string, todolistId: string): ChangeTaskTitle => {
    return {type: 'CHANGE-TITLE-TASK', taskId, title, todolistId} as const
}
