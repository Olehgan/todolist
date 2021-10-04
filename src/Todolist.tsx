import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    filter: FilterValuesType
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    changeTasksStatus: (id: string, isDone: boolean) => void
    addTask: (title: string) => void

}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("")
    const [error, setError] = useState<boolean>(false)

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
        setError(false)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addTask(newTaskTitle);
            setNewTaskTitle("")
        }
    }

    const addTask = () => {
        const trimmedTitle = newTaskTitle.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
        } else {
            setError(true)
        }
        setNewTaskTitle("")
    }

    const onAllClickHandler = () => {
        props.changeFilter("all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter("active")
    }
    const onCompletedClickHandler = () => {
        props.changeFilter("completed")
    }

    const allBtnClass = props.filter === "all" ? "active-filter" : "";
    const activeBtnClass = props.filter === "active" ? "active-filter" : "";
    const completedBtnClass = props.filter === "completed" ? "active-filter" : "";
    const userMsg = error
        ? <div style={{color: "red"}}>Title is required</div>
        : null   // : <div>Enter title!</div>
    //JSX
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                className={error ? "error" : ""}
                value={newTaskTitle}
                onChange={onNewTitleChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
            {userMsg}
        </div>
        <ul>
            {props.tasks.map(t => {

                const onRemoveHandler = () => {
                    props.removeTask(t.id)
                }
                const changeTasksStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeTasksStatus(t.id, e.currentTarget.checked)
                return <li key={t.id}>
                    <input

                        type={"checkbox"}
                        checked={t.isDone}
                        onChange={changeTasksStatus}
                    />
                    <span>{t.title}</span>
                    <button onClick={onRemoveHandler}>x
                    </button>
                </li>
            })

            }


        </ul>
        <div>
            <button
                className={allBtnClass} onClick={onAllClickHandler}
            >All
            </button>
            <button
                className={activeBtnClass} onClick={onActiveClickHandler}
            >Active
            </button>
            <button
                className={completedBtnClass} onClick={onCompletedClickHandler}
            >Completed
            </button>
        </div>
    </div>
}

