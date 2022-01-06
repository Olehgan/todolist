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

