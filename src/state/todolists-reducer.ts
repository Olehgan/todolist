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
            throw new Error("I don't understand this action type")
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
export const ChangeTodolistTitleActionAC = (todolistId2: string, newTodolistTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        todolistId2,
        newTodolistTitle
    } as const
}
type ChangeTodolistFilterActionType = ReturnType<typeof ChangeTodolistFilterActionAC>
export const ChangeTodolistFilterActionAC = (todolistId2: string, filter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        todolistId2,
        filter
    } as const
}