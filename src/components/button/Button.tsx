import React from 'react';
import st from './Button.module.scss'

type ButtonPropsType = {
    isDisabled?: boolean
    name: string
    callback: () => void
}
export const Button = (props: ButtonPropsType) => {
    return (
        <button
            className={st.button}
            disabled={props.isDisabled}
            onClick={() => props.callback()}>{props.name}</button>
    )
}


