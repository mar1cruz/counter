import React from 'react';
import st from './Dashboard.module.scss'
import {GlobalParamsType} from "../../Counter";

type DashboardPropsType = {
    globalParams: GlobalParamsType
}

export const Dashboard = ({ globalParams}: DashboardPropsType) => {
    const {errorInCorrect : isError, isChange} = globalParams
    const finalClassName = globalParams.value === globalParams.maxValue ? st.disabled : ''

    return (
        <div className={st.wrapper}>
            {isError ? <div style={{color: "red"}}>incorrect value</div>
                : isChange ?
                <div>enter values and press 'set'</div> :
                <div className={finalClassName}>{globalParams.value}</div>
            }
        </div>
    );
};