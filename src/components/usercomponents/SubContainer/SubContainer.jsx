import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashBoard from '../../../pages/userpage/DashBoard/DashBoard';

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
            <Routes>
                <Route path='/dashboard' element={<DashBoard />} />
                {/* <Route path='/reservation' element={<ReservationPage />} /> */}
                {/* <Route path='/reservationlist' element={<ReservationListPage />} /> */}
                {/* <Route path='/review' element={<ReviewPage />} /> */}
                {/* <Route path='/settings' element={<SettingsPage />} /> */}
            </Routes>
        </div>
    );
}

export default SubContainer;