import React, {useEffect, useState} from 'react';
import {Settings} from "./settings/Settings";
import {Table} from "./table/Table";
import st from './Counter.module.scss'
import {log} from "util";

export type GlobalParamsType = {
    value: number
    minValue: number
    maxValue: number
    isChange: boolean
    errorInCorrect: boolean
}

export const Counter = () => {

    const storedGlobalParams = localStorage.getItem('globalParams')
    const initialState = storedGlobalParams
        ? JSON.parse(storedGlobalParams)
        : {value: 0, minValue: 0, maxValue: 5, isChange: false, errorInCorrect: false}

    const [globalParams, setGlobalParams] = useState<GlobalParamsType>(initialState)

    useEffect(() => {
        localStorage.setItem('globalParams', JSON.stringify(globalParams))
    }, [globalParams])

    return (
        <div className={st.wrapper}>
            <Settings setGlobalParams={setGlobalParams} globalParams={globalParams}/>

            <Table globalParams={globalParams}
                   setGlobalParams={setGlobalParams}
            />
        </div>
    );
};