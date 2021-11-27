import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

//
// export type RemoveTodolistActionType = {
//     type: 'REMOVE-TODOLIST',
//     id: string
// }
// export type AddTodolistActionType = {
//     type: 'ADD-TODOLIST',
//     title: string
// }
// export type ChangeTodolistTitleActionType = {
//     type: 'CHANGE-TODOLIST-TITLE',
//     id: string
//     title: string
// }
// export type ChangeTodolistFilterActionType = {
//     type: 'CHANGE-TODOLIST-FILTER',
//     id: string
//     filter: FilterValuesType
// }
//
// type Actionstype =
//     RemoveTodolistActionType
//     | AddTodolistActionType
//     | ChangeTodolistTitleActionType
//     | ChangeTodolistFilterActionType
//

export const todolistsReducer = (state: Array<TodolistType>, action: TsarType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            let newState = [...state]
            return newState.filter(t => t.id !== action.todolistId)
        }
        case 'ADD-TODOLIST': {
            return [...state, {id: v1(), title: action.title, filter: "all"},]
        }
        case 'CHANGE-TODOLIST-TITLE' : {
            return state.map(m => m.id === action.todolistId ? {...m, title: action.title} : m)
        }

        case  'CHANGE-TODOLIST-FILTER': {
            return state.map(m=> m.id === action.todolistId ? { ...m,filter:action.filter}:m)
        }

        default:
            throw new Error("I don't understand this action type")
    }
}
type TsarType =
    RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType

type RemoveTodolistActionType = ReturnType<typeof RemoveTodolistActionAC>
export const RemoveTodolistActionAC = (todolistId: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        todolistId
    } as const
}
type AddTodolistActionType = ReturnType<typeof AddTodolistActionAC>
export const AddTodolistActionAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        title
    } as const
}

type ChangeTodolistTitleActionType = ReturnType<typeof ChangeTodolistTitleActionAC>
export const ChangeTodolistTitleActionAC = (todolistId: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        todolistId,
        title
    } as const
}
type ChangeTodolistFilterActionType = ReturnType<typeof ChangeTodolistFilterActionAC>
export const ChangeTodolistFilterActionAC = (todolistId: string, filter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        todolistId,
        filter
    } as const
}