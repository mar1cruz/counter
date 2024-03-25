import React from 'react';
import {Input} from "../../../input/Input";
import st from './InputSettings.module.scss';
import {ErrorsInputsType} from "../Settings";

type InputSettingsPropsType = {
    minInputValue: number
    maxInputValue: number
    errorsInputs: ErrorsInputsType
    onChangeMaxInput: (value: number) => void
    onChangeMinInput: (value: number) => void
}

export const InputSettings = (props: InputSettingsPropsType) => {
    return (
        <div className={st.wrapper}>
            <div>
                <span>max value</span> <Input error={props.errorsInputs.errorMaxInput}
                                              value={props.maxInputValue}
                                              onChange={props.onChangeMaxInput}/>
            </div>

            <div>
                <span>min value</span> <Input error={props.errorsInputs.errorMinInput}
                                              value={props.minInputValue}
                                              onChange={props.onChangeMinInput}/>
            </div>
        </div>
    );
};