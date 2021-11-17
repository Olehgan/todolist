import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {EditableSpan} from "./component/EditTabalSpan";
import {Input} from "./component/Input";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string,) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    updateTask: (title: string, todolistId: string, tId: string) => void
    changeNameTodolist: (title: string, todolistId: string) => void

}

export function Todolist(props: PropsType) {

    const removeTodolist = () => props.removeTodolist(props.id);
    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);

   return <div>
            <h3>
                <EditableSpan title={props.title} callBack={(title) => props.changeNameTodolist(title, props.id)}/>
                <IconButton aria-label="delete">
                    <Delete fontSize="small" onClick={removeTodolist}/>
                </IconButton>
            </h3>
            <Input callBack={(title) => props.addTask(title, props.id)}/>
            <ul>
                {
                    props.tasks.map(t => {
                        const onClickHandler = () => props.removeTask(t.id, props.id)
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            let newIsDoneValue = e.currentTarget.checked;
                            props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                        }

                        return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                            <Checkbox
                                onChange={onChangeHandler}
                                checked={t.isDone}
                                defaultChecked
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <EditableSpan title={t.title}
                                          callBack={(title) => props.updateTask(title, props.id, t.id)}/>
                            <IconButton aria-label="delete">
                                <Delete onClick={onClickHandler} fontSize="small"/>
                            </IconButton>
                        </li>
                    })
                }
            </ul>
            <div>


                <Button onClick={onAllClickHandler} variant={props.filter === "all" ? "contained" : "outlined"}
                        color="primary">
                    All
                </Button>
                <Button onClick={onActiveClickHandler} variant={props.filter === "active" ? "contained" : "outlined"}
                        color="secondary">
                    Active
                </Button>
                <Button onClick={onCompletedClickHandler}
                        variant={props.filter === "completed" ? "contained" : "outlined"}>
                    Completed
                </Button>
            </div>
        </div>

}


