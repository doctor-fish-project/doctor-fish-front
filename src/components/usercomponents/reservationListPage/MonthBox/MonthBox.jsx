import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import DayBox from '../DayBox/DayBox';

function MonthBox({ month, dayGroup}) {
    return (
        <div css={s.layout}>
            <p>{month}월</p>
            <DayBox day={"05"} reservationInfo={"예약 정보: 시간, 의사, 부서, 예약 상태 "}/>
            <DayBox day={"05"} reservationInfo={"예약 정보: 시간, 의사, 부서, 예약 상태 "}/>
        </div>
    );
}

export default MonthBox;