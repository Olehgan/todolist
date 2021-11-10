import React from "react";
import style from './Button.module.css'
import {FilterValuesType} from "./App";

type ButtonPropsType = {
    name: string
    callback: () => void
    filter?: FilterValuesType
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button className={props.filter === props.name ? style.activeFilter : ""}
                onClick={onClickHandler}>{props.name}</button>
    )
}