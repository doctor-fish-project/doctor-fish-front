import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import Calendar from 'react-calendar';
import { useSearchParams } from 'react-router-dom';

function ReservationCalendar({ date, setReservationDate }) {

    const handleReservationDateOnChange = (value) => {
        setReservationDate(value)
    }

    const tileClassName = ({ date, view }) => {
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
                value={date}
                locale='ko'
                formatDay={(locale, ReservationDate) => ReservationDate.getDate()}
                calendarType='gregory'
            />
        </div>
    );
}

export default ReservationCalendar;