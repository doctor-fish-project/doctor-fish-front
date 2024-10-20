import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import Calendar from 'react-calendar';

function ReservationCalendar({ reservationDate, setReservationDate, setReservationTime }) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const handleReservationDateOnChange = (value) => {
        setReservationTime("");
        setReservationDate(value);
    }

    function tileDisabled({ date, view }) {
        return view === 'month' && date < today
    }

    const tileClassName = ({ date, view }) => {
        if (view === 'month' && date < today) {
            return 'disabled-date';
        }

        if (date.toDateString() === reservationDate.toDateString()) {
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
                tileDisabled={tileDisabled}
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