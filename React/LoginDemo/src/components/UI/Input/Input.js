import classes from "./Input.module.css"
import {useRef, useEffect, useImperativeHandle} from "react";
import React from "react";

//这里有ref仅仅只是因为需要传到Login.js里面，才会告诉用户是密码错了还是邮箱错了
const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();
    const activate = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
        return {
            focus: activate
        }
    })

    return (
        <div
            className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ''
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
})

export default Input;
