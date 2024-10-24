import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate } from 'react-router-dom';
import ReservationCalendarModal from '../userModal/ReservationCalendarModal/ReservationCalendarModal';
import ReservationDetail from '../userModal/ReservationDetail/ReservationDetail';

function UserSubContainer({ children }) {
    const nav = useNavigate();

    const [reservationModalElement, serReservationModalElement] = useState(<></>);
    const [reservationDetailModalElement, setReservationDetailModalElement] = useState(<></>)

    const containerRef = useRef();

    useEffect(() => {
        if (!!containerRef) {
            serReservationModalElement(<ReservationCalendarModal containerRef={containerRef} />)
            setReservationDetailModalElement(<ReservationDetail containerRef={containerRef} />)
        }
    }, [containerRef])

    const handleDashboardOnClick = () => {
        nav("/dashboard")
    }

    const handleReservationOnClick = () => {
        nav("/reservation")
    }

    const handleReservationListOnClick = () => {
        nav("/reservationlist")
    }

    const handleReviewOnClick = () => {
        nav("/review")
    }

    return (
        <div css={s.layout} ref={containerRef}>
            {reservationModalElement}
            {reservationDetailModalElement}
            {children}
            <div css={s.footer}>
                <button onClick={handleDashboardOnClick}>홈</button>
                <button onClick={handleReservationOnClick}>예약 하기</button>
                <button onClick={handleReservationListOnClick}>예약 조회</button>
                <button onClick={handleReviewOnClick}>리뷰</button>
            </div>
        </div>
    );
}

export default UserSubContainer;