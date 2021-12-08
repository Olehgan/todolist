import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

let initalState: Array<TodolistType> = [
    {id: "todolistId1", title: "What to learn", filter: "all"},
    {id: "todolistId2",  title: "What to buy", filter: "all"}
]

export const todolistsReducer = (state = initalState, action: TsarType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            let newState = [...state]
            return newState.filter(t => t.id !== action.id)
        }
        case 'ADD-TODOLIST': {
            return [...state, {id: action.todolistId, title: action.title, filter: "all"},]
        }
        case 'CHANGE-TODOLIST-TITLE' : {
            return state.map(m => m.id === action.todolistId2 ? {...m, title: action.newTodolistTitle} : m)
        }

        case  'CHANGE-TODOLIST-FILTER': {
            return state.map(m => m.id === action.todolistId2 ? {...m, filter: action.filter} : m)
        }

        default:
            return state
        // throw new Error("I don't understand this action type")
    }
}
type TsarType =
    RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType

export type RemoveTodolistActionType = ReturnType<typeof RemoveTodolistAC>
export const RemoveTodolistAC = (todolistId: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        id: todolistId
    } as const
}
export type AddTodolistActionType = ReturnType<typeof AddTodolistAC>
export const AddTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        title,
        todolistId: v1()
    } as const
}

type ChangeTodolistTitleActionType = ReturnType<typeof ChangeTodolistTitleActionAC>
export const ChangeTodolistTitleActionAC = (todolistId: string, newTodolistTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        todolistId2: todolistId,
        newTodolistTitle
    } as const
}
type ChangeTodolistFilterActionType = ReturnType<typeof ChangeTodolistFilterActionAC>
export const ChangeTodolistFilterActionAC = (filter: FilterValuesType, todolistId: string) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        todolistId2: todolistId,
        filter
    } as const
}