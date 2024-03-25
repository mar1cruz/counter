import React, {useEffect, useState} from 'react';
import {InputSettings} from "./InputSettings/InputSettings";
import {ControlSettings} from "./ControlSettings/ControlSettings";
import st from './Settings.module.scss'
import {GlobalParamsType} from "../Counter";


type SettingsPropsType = {
    globalParams: GlobalParamsType
    setGlobalParams: (globalParams: GlobalParamsType) => void
}

export type ErrorsInputsType = {
    errorMaxInput: boolean
    errorMinInput: boolean
}

export const Settings = (props: SettingsPropsType) => {
    const [minInputValue, setMinInputValue] = useState<number>(props.globalParams.minValue)
    const [maxInputValue, setMaxInputValue] = useState<number>(props.globalParams.maxValue)

    const setSettings = () => {
        props.setGlobalParams({
            ...props.globalParams,
            minValue: minInputValue,
            maxValue: maxInputValue,
            value: minInputValue,
            isChange: false,
        });
    }

    const onChangeMaxInput = (value: number) => {
        setMaxInputValue(value)
        props.setGlobalParams({...props.globalParams, isChange: true})
    }

    const onChangeMinInput = (value: number) => {
        setMinInputValue(value)
        props.setGlobalParams({...props.globalParams, isChange: true})
    }

    const isDisabledSet = props.globalParams.errorInCorrect || !props.globalParams.isChange
    const newMinError = minInputValue < 0 || minInputValue >= maxInputValue
    const newMaxError = maxInputValue < 0 || maxInputValue <= minInputValue

    useEffect(() => {
        const isError = newMinError || newMaxError
        props.setGlobalParams({...props.globalParams, errorInCorrect: isError})
    }, [newMaxError, newMinError]);

    return (
        <div className={st.setWrapper}>
            <InputSettings errorsInputs={{errorMaxInput: newMaxError, errorMinInput: newMinError}}
                           minInputValue={minInputValue}
                           maxInputValue={maxInputValue}
                           onChangeMaxInput={onChangeMaxInput}
                           onChangeMinInput={onChangeMinInput}
            />

            <ControlSettings isDisabled={isDisabledSet}
                             callback={setSettings}/>
        </div>
    );
};
