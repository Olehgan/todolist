import React, {ChangeEvent, useCallback} from 'react';
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {TaskType} from "./Todolist";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";

type Task1PropsType = {
    todolistId: string
    taskId: string
}

export const Task1 = React.memo((props: Task1PropsType) => {

    console.log('task1 ')

    const task = useSelector<AppRootStateType, TaskType>(state => state.tasks[props.todolistId].filter(
     el=> el.id === props.taskId
    )
        [0]
)

    const dispatch = useDispatch()

    const onClickHandler = () => dispatch(removeTaskAC(props.taskId, props.todolistId))
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        dispatch(changeTaskStatusAC(props.taskId,newIsDoneValue, props.todolistId))
    }
    const onTitleChangeHandler = useCallback((newValue: string) => {
        dispatch(changeTaskTitleAC(props.taskId, newValue,props.todolistId))
    }, [props.taskId, props.todolistId])

    return (
        <div className={task.isDone ? "is-done" : ""}>
            <Checkbox
                checked={task.isDone}
                color="primary"
                onChange={onChangeHandler}
            />

            <EditableSpan value={task.title} onChange={onTitleChangeHandler}/>
            <IconButton onClick={onClickHandler}>
                <Delete/>
            </IconButton>
        </div>
    )
})