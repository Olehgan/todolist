import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button} from "./Button";
import {FilterValuesType} from "../App";
import {NewInput} from "./NewInput";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todolistID: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistId: string, taskId: string) => void
    changeFilter: (todolistID: string, value: FilterValuesType) => void
    addTask: (todolistID: string, title: string) => void
    changeTaskStatus: (todolistID: string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
}

export function TodoList(props: PropsType) {


    // const allFilterHandler = () => { props.changeFilter( props.todolistID,'All')}
    // const activeFilterHandler = () => { props.changeFilter( props.todolistID,'Active')}
    // const completedFilterHandler = () => { props.changeFilter( props.todolistID,'Completed')}

    const tsarFooHandler = (filterValue:FilterValuesType)=>{
        props.changeFilter(props.todolistID,filterValue,)
    }

    let [title, setTitle] = useState("")
    const addTaskHandler=()=>{
        if(title.trim()!== ''){
            props.addTask(props.todolistID,title)
            setTitle("")
        }

    }

    return <div>
        <h3>{props.title}</h3>
        <div className={'both'}>

            <NewInput title={title} setTitle={setTitle} addTask={props.addTask} todolistID={props.todolistID} />
            <Button name={'+'}  callback={addTaskHandler} />

            {/*<input value={title}*/}
            {/*       onChange={onChangeHandler}*/}
            {/*       onKeyPress={onKeyPressHandler}*/}
            {/*       className={error ? "error" : ""}*/}
            {/*/>*/}
            {/*<button onClick={addTask}>+</button>*/}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const removeHandler = () =>
                        props.removeTask(props.todolistID, t.id)

                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(props.todolistID, t.id, e.currentTarget.checked);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                        {/*<button onClick={onClickHandler}>x</button>*/}
                        <Button name={'x'} callback={removeHandler}/>
                    </li>
                })
            }
        </ul>
        <div>
            <Button name={'All'} callback={()=>{tsarFooHandler('All')}}/>
            <Button name={'Active'} callback={()=>{tsarFooHandler('Active')}}/>
            <Button name={'Completed'} callback={()=>{tsarFooHandler('Completed')}}/>


            {/*<Button name={'All'} callback={props.changeFilter} todolistID={props.todolistID} filter={props.filter}/>*/}
            {/*<Button name={'Active'} callback={props.changeFilter} todolistID={props.todolistID} filter={props.filter}/>*/}
            {/*<Button name={'Completed'} callback={props.changeFilter} todolistID={props.todolistID} filter={props.filter}/>*/}

        </div>
    </div>
}
