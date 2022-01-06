import React, {useEffect, useState} from 'react'
import {todolistApi} from "./api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodos().then((res) => {
            let todos = res.data
            setState(todos)
        })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const title = 'React'
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.creatTodo(title).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const todolistId = "a53f9aff-f240-4812-bf0d-5c4a62e785af"
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.deleteTodos(todolistId).then((res) => {
         setState(res.data)
        })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    let todolistId = "13698375-7e70-4431-8713-18ec4502f4fd"
    let title = 'Angular'
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.updateTodoTitle(todolistId,title).then((res)=>{
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

