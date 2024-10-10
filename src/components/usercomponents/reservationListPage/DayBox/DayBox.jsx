import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ReservationBox from '../ReservationBox/ReservationBox';

function DayBox({ date, reservations }) {

    return (
        <div css={s.layout}>
            <p>{date}</p>
            {
                reservations?.map(reservation => 
                    <ReservationBox key={reservation.id} reservation={reservation} />
                )
            }
        </div>
    );
}

export default DayBox;