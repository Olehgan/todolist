import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import style from './Input.module.css'

type InputPropsTYpe = {
    callBack: (title: string) => void

}

export const Input = (props: InputPropsTYpe) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        let newTitle = title.trim();
        if (newTitle !== "") {
            props.callBack(newTitle);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }
    return (
        <div>
            <TextField id="outlined-basic" label={error ? "Title is required" : "Title"} variant="outlined"
                       value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       size="small"
                       error={!!error}/>
            {/*<input value={title}*/}
            {/*       onChange={onChangeHandler}*/}
            {/*       onKeyPress={onKeyPressHandler}*/}
            {/*       className={error ? "error" : ""}*/}
            {/*/>*/}
            <Button className={style.currentButton} onClick={addTask} variant="contained" color="primary"
                    style={{maxWidth: '60px', maxHeight: '60px', minWidth: '30px', minHeight: '30px'}}>
                +
            </Button>
            {/*<button onClick={addTask}>+</button>*/}
            {/*{error && <div className="error-message">{error}</div>}*/}
        </div>

    )
}