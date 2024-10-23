import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSigninPage from "../../pages/adminpage/AdminSigninPage/AdminSigninPage";
import AdminDashBoard from "../../pages/adminpage/AdminDashBoard/AdminDashBoard";
import AdminReservationAllPage from "../../pages/adminpage/AdminReservationAllPage/AdminReservationAllPage";
import AdminReservationTodayPage from "../../pages/adminpage/AdminReservationTodayPage/AdminReservationTodayPage";
import AdminReviewPage from "../../pages/adminpage/AdminReviewPage/AdminReviewPage";
import AdminNoticePage from "../../pages/adminpage/AdminNoticePage/AdminNoticePage";
import AdminSettingPage from "../../pages/adminpage/AdminSettingPage/AdminSettingPage";
import AdminUsersPage from "../../pages/adminpage/AdminUsersPage/AdminUsersPage";
import AdminAddPage from "../../pages/adminpage/AdminAddPage/AdminAddPage";
import AdminProfilePage from "../../pages/adminpage/AdminProfilePage/AdminProfilePage";
import AdminAuthHook from '../../hooks/AdminAuthHook';
import AdminMainLayout from '../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminLeaveAddPage from '../../pages/adminpage/AdminLeaveAddPage/AdminLeaveAddPage';
import AdminLeaveListPage from '../../pages/adminpage/AdminLeaveListPage/AdminLeaveListPage';

function AdminRoute(props) {
    AdminAuthHook();
    return (
        <AdminMainLayout>
            <Routes>
                <Route path="/signin" element={<AdminSigninPage />} />
                <Route path="/dashboard/*" element={<AdminDashBoard />} />
                <Route path='/users' element={<AdminUsersPage />} />
                <Route path='/reservation' element={<AdminReservationAllPage />} />
                <Route path='/reservationtoday' element={<AdminReservationTodayPage />} />
                <Route path='/review' element={<AdminReviewPage />} />
                <Route path='/notice' element={<AdminNoticePage />} />
                <Route path='/setting' element={<AdminSettingPage />} />
                <Route path='/add' element={<AdminAddPage />} />
                <Route path='/profile' element={<AdminProfilePage />} />
                <Route path='/leave' element={<AdminLeaveAddPage />} />
                <Route path='/leavelist' element={<AdminLeaveListPage />} />
                <Route path='/*' element={<AdminSigninPage />} />
            </Routes>
        </AdminMainLayout>
    );
}

export default AdminRoute;