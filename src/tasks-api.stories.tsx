import React, {useEffect, useState} from 'react'
import {taskApi} from "./api/task-api";

export default {
    title: 'API-TASK'
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "21c101b8-2448-401d-984d-b7bd4f612cee"
        taskApi.getTasks(todolistId).then((res) => {
            let tasks = res.data
            setState(tasks)
        })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const todolistId = "21c101b8-2448-401d-984d-b7bd4f612cee"
    const title = 'JS'

    const [state, setState] = useState<any>(null)
    useEffect(() => {
        taskApi.creatTask(todolistId, title).then((res) => {
            debugger
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const todolistId = "21c101b8-2448-401d-984d-b7bd4f612cee"
    const taskId = "3fc4e9bb-baa8-4713-b430-95e5ee9328c2"
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        taskApi.deleteTask(todolistId,taskId).then((res) => {
            setState(res.data)
        })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

