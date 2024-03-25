import React from 'react';
import {Button} from "../../../button/Button";
import st from './ControlSettings.module.scss'

type ControlSettingsPropsType = {
    isDisabled: boolean
    callback: () => void
}

export const ControlSettings = (props: ControlSettingsPropsType) => {
    return (
        <div className={st.wrapper}>
            <Button isDisabled={props.isDisabled} name='set' callback={() => props.callback()}/>
        </div>
    );
};

