import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function TimeBox({ time, reservationTime  ,setReservationTime, disabled }) {

    const handleReservationTimeOnClick = (time) => {
        setReservationTime(time)
    }
    
    return (
        <button css={s.layout(reservationTime, time.time)} value={time.time} disabled={disabled} onClick={() => handleReservationTimeOnClick(time.time)}>
            {time.time}
        </button>
    );
}

export default TimeBox;