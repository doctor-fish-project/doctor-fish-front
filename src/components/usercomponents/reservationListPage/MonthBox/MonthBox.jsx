import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import DayBox from '../DayBox/DayBox';

function MonthBox({ month, DateOfReservationsData}) {
    const entriesOfReservationsData = Object.entries(DateOfReservationsData);
    return (
        <div css={s.layout}>
            <p>{month}월</p>
            {
                entriesOfReservationsData?.map(([date, reservations]) =>
                    <DayBox key={date} date={date} reservations={reservations} />)
            }
        </div>
    );
}

export default MonthBox;