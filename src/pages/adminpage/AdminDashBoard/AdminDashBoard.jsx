import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminNoticeBox from '../../../components/admincomponents/adminDashBoard/adminDashBoardBox/AdminNoticeBox/AdminNoticeBox';
import AdminReservationGraphsBox from '../../../components/admincomponents/adminDashBoard/adminDashBoardBox/AdminReservationGraphsBox/AdminReservationGraphsBox';
import AdminReservationTodayBox from '../../../components/admincomponents/adminDashBoard/adminDashBoardBox/AdminReservationTodayBox/AdminReservationTodayBox';
import AdminReservationAllBox from '../../../components/admincomponents/adminDashBoard/adminDashBoardBox/AdminReservationAllBox/AdminReservationAllBox';

function AdminDashBoard(props) {
    return (
        <AdminContainer>
            <div css={s.layout}>
                <AdminReservationGraphsBox />
                <AdminNoticeBox />
                <AdminReservationTodayBox />
                <AdminReservationAllBox />
            </div>
        </AdminContainer>
    );
}

export default AdminDashBoard;