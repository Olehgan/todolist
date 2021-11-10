import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type propsType = {
    title: string
    setTitle: (title: string) => void
    addTask: (todolistID: string, title: string) => void
    todolistID: string;
}

export const NewInput = (props: propsType) => {


    let [error, setError] = useState<string | null>(null)

    // const addTask = () => {
    //     if (title.trim() !== "") {
    //         props.addTask(props.todolistID, title.trim());
    //         setTitle("");
    //     } else {
    //         setError("Title is required");
    //     }
    // }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            props.addTask(props.todolistID,props.title)
            props.setTitle("")
        }
    }

    return (
        <div>

            <input value={props.title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            {/*<button onClick={addTask}>+</button>*/}
            {error && <div className="error-message">{error}</div>}
        </div>

    )

}