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

