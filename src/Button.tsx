import React from "react";

import style from './Button.module.css'
import {FilterValuesType} from "./App";

type ButtonPropsType = {
    name: FilterValuesType
    callback: (todolistID: string, value: FilterValuesType) => void
    todolistID: string
    filter: FilterValuesType
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback(props.todolistID,props.name)
    }
    return (
        <button className={props.filter===props.name? style.activeFilter : ""} onClick={onClickHandler}>{props.name}</button>
    )
}
