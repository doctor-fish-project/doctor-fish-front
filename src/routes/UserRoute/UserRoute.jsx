import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexPage from "../../pages/userpage/IndexPage/IndexPage";
import DashBoard from "../../pages/userpage/DashBoard/DashBoard";
import ReservationPage from "../../pages/userpage/ReservationPage/ReservationPage";
import ReservationListPage from "../../pages/userpage/ReservationListPage/ReservationListPage";
import ReviewPage from "../../pages/userpage/ReviewPage/ReviewPage";
import AuthHook from '../../hooks/AuthHook';
import MainLayout from '../../components/usercomponents/UserMainLayout/UserMainLayout';
import UserMainLayout from '../../components/usercomponents/UserMainLayout/UserMainLayout';

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
            </Routes>  
        </UserMainLayout>
    );
}

export default UserRoute;