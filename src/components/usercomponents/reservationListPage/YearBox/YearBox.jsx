import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import MonthBox from '../MonthBox/MonthBox';

function YearBox({ year, monthOfReservationsData }) {
    const entriesOfReservationsData = Object.entries(monthOfReservationsData);

    return (
        <div css={s.layout}>
            <p>{year}</p>
            {/* {
                entriesOfReservationsData?.map(([month, DateOfReservationsData]) =>
                    <MonthBox key={year + month} month={month} DateOfReservationsData={DateOfReservationsData} />)
            } */}
            <MonthBox month={10} />
        </div>
    );
}

export default YearBox;