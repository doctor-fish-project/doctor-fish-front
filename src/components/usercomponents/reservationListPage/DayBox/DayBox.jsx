import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ReservationBox from '../ReservationBox/ReservationBox';

function DayBox({ date, reservations }) {
    const [ newList, setNewList ] = useState([]);

    useEffect(() => {
        setNewList(reservations.reverse())
    }, [reservations])
    
    return (
        <div css={s.layout}>
            <p>{date}</p>
            {
                newList?.map(reservation =>
                    <ReservationBox key={reservation.id} reservation={reservation} />
                )
            }
        </div>
    );
}

export default DayBox;