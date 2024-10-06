import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate } from 'react-router-dom';

function SubContainer({ children }) {
    const nav = useNavigate();

    const handleDashboardOnClick = () => {
        nav("/dashboard")
    }

    const handleReservationOnClick = () => {
        nav("/dashboard/reservation")
    }

    const handleReservationListOnClick = () => {
        nav("/dashboard/reservationlist")
    }

    const handleReviewOnClick = () => {
        nav("/dashboard/review")
    }
    
    return (
        <div css={s.layout}>
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

export default SubContainer;