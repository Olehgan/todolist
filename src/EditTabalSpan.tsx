import React, {ChangeEvent, useState} from "react";


type EditableSpanPropsType = {
    title: string
    callBack:(title:string)=>void
}


export const EditableSpan = (props: EditableSpanPropsType) => {
    let [edit, setEdit] = useState(false);
    let [title, setTitle] = useState(props.title)

    const activeClick = () => {
        setEdit(true)

    }
    const deActiveClick = () => {
        setEdit(false)
        props.callBack(title)
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
    }


    return (
        edit
            ? <input value={title} onBlur={deActiveClick} autoFocus onChange={onChangeHandler}/>
            : <span onDoubleClick={activeClick}>{props.title}</span>

    )


}