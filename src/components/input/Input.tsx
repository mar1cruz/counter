import React from "react";
import st from './Input.module.scss'

type InputPropsType = {
    error: boolean
    value: number
    onChange: (value: number) => void
}

export const Input = ({value, onChange,error}: InputPropsType) => {
    return <input className={error ? st.error : ''} value={value} type='number' onChange={(e) => onChange(+e.currentTarget.value)}/>
};
