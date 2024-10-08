import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import DayBox from '../DayBox/DayBox';

function MonthBox({ month, DateOfReservationsData}) {
    const entriesOfReservationsData = Object.entries(DateOfReservationsData);
    return (
        <div css={s.layout}>
            <p>{month}월</p>
            {/* {
                entriesOfReservationsData?.map(([date, reservations]) =>
                    <DayBox key={year + month} date={date} reservations={reservations} />)
            } */}
            <DayBox date={"05"} reservationInfo={"예약 정보: 시간, 의사, 부서, 예약 상태 "}/>
            <DayBox date={"05"} reservationInfo={"예약 정보: 시간, 의사, 부서, 예약 상태 "}/>
        </div>
    );
}

export default MonthBox;