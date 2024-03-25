import React from 'react';
import {Control} from "./Control/Control";
import {Dashboard} from "./Dashboard/Dashboard";
import st from './Table.module.scss'
import {GlobalParamsType} from "../Counter";

type TablePropsType = {
    globalParams: GlobalParamsType
    setGlobalParams: (globalParams: GlobalParamsType) => void
}

export const Table = ({globalParams, setGlobalParams}: TablePropsType) => {

    return (
        <div className={st.wrapper}>

            <Dashboard globalParams={globalParams}/>

            <Control setGlobalParams={setGlobalParams}
                     globalParams={globalParams}/>
        </div>
    );
};

