import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function TimeBox({ time, reservationTime, setReservationTime }) {

    const handleReservationTimeOnClick = (e, time) => {
        e.stopPropagation();
        setReservationTime(time === reservationTime ? "" : time)
    }

    return (
        <button css={s.layout(time, reservationTime)} onClick={(e) => handleReservationTimeOnClick(e, time)}>
            {time}
        </button>
    );
}

export default TimeBox;