import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import Calendar from 'react-calendar';

function ReservationCalendar({ reservationDate, setReservationDate, setReservationTime }) {

    const handleReservationDateOnChange = (value) => {
        setReservationTime("");
        setReservationDate(value);
    }

    const tileClassName = ({ date, view }) => {
        if(date.toDateString() === reservationDate.toDateString()) {
            return 'react-calendar__tile--select';
        }

        if (view === 'month') {
            const day = date.getDay();
            if (day === 0) {
                return 'sunday';
            }
            if (day === 6) {
                return 'saturday';
            }
        }
        return null;
    };

    return (
        <div css={s.layout}>
            <Calendar
                tileClassName={tileClassName}
                onChange={handleReservationDateOnChange}
                value={reservationDate}
                locale='ko'
                formatDay={(locale, ReservationDate) => ReservationDate.getDate()}
                calendarType='gregory'
            />
        </div>
    );
}

export default ReservationCalendar;