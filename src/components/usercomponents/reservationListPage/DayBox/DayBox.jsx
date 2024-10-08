import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function DayBox({ date, reservations }) {
    return (
        <div css={s.layout}>
            <p>{date}일</p>
            <div>
                {reservations}
            </div>
        </div>
    );
}

export default DayBox;