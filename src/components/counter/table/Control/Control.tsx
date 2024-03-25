import React from 'react';
import {Button} from "../../../button/Button";
import st from './Control.module.scss'
import {GlobalParamsType} from "../../Counter";

type ControlPropsType = {
    globalParams: GlobalParamsType
    setGlobalParams: (globalParams: GlobalParamsType) => void
}
export const Control = ({globalParams, setGlobalParams}: ControlPropsType) => {
    const onIncrement = () => {
        setGlobalParams({...globalParams, value: globalParams.value + 1})
    }
    const onReset = () => {
        setGlobalParams({...globalParams, value: globalParams.minValue})
    }

    const isDisabledRes = globalParams.isChange
    const isDisabledInc = globalParams.value === globalParams.maxValue || isDisabledRes


    return (
        <div className={st.wrapper}>
            <Button name='inc' callback={onIncrement} isDisabled={isDisabledInc}/>

            <Button name='res' callback={onReset} isDisabled={isDisabledRes}/>
        </div>
    );
};