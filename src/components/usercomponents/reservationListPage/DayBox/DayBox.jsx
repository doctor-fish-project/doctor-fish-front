import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function DayBox({ day, reservationInfo }) {
    return (
        <div css={s.layout}>
            <p>{day}일</p>
            <div>
                {reservationInfo}
            </div>
        </div>
    );
}

export default DayBox;