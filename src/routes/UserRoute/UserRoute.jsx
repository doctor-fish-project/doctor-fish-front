import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexPage from "../../pages/userpage/IndexPage/IndexPage";
import DashBoard from "../../pages/userpage/DashBoard/DashBoard";
import ReservationPage from "../../pages/userpage/ReservationPage/ReservationPage";
import ReservationListPage from "../../pages/userpage/ReservationListPage/ReservationListPage";
import ReviewPage from "../../pages/userpage/ReviewPage/ReviewPage";
import AuthHook from '../../hooks/AuthHook';
import UserMainLayout from '../../components/usercomponents/UserMainLayout/UserMainLayout';
import NoticeDetailPage from '../../pages/userpage/NoticeDetailPage/NoticeDetailPage';
import NoticeListPage from '../../pages/userpage/NoticeListPage/NoticeListPage';
import DoctorDetailPage from '../../pages/userpage/DoctorDetailPage/DoctorDetailPage';

function UserRoute(props) {
    AuthHook();
    return (
        <UserMainLayout>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/dashboard/*" element={<DashBoard />} />
                <Route path="/reservation" element={<ReservationPage />}/>
                <Route path="/reservationlist" element={<ReservationListPage />}/>
                <Route path="/review/*" element={<ReviewPage />}/>
                <Route path="/notice/*" element={<NoticeDetailPage />} />
                <Route path="/noticelist" element={<NoticeListPage />} />
                
            </Routes>  
        </UserMainLayout>
    );
}

export default UserRoute;