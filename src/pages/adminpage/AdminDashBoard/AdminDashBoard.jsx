import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminNoticeList from '../../../components/admincomponents/adminDashBoard/adminDashBoardList/AdminNoticeList/AdminNoticeList';
import AdminReservationStateList from '../../../components/admincomponents/adminDashBoard/adminDashBoardList/AdminReservationStateList/AdminReservationStateList';
import AdminReservationTodayList from '../../../components/admincomponents/adminDashBoard/adminDashBoardList/AdminReservationTodayList/AdminReservationTodayList';
import AdminReservationAllList from '../../../components/admincomponents/adminDashBoard/adminDashBoardList/AdminReservationAllList/AdminReservationAllList';

function AdminDashBoard(props) {
    return (
        <AdminMainLayout >
            <AdminContainer>
                <div css={s.layout}>
                    <div css={s.container}>
                        <AdminReservationStateList />
                        <AdminNoticeList />
                    </div>
                    <div css={s.container}>
                        <AdminReservationTodayList/>
                        <AdminReservationAllList />
                    </div>
                </div>
            </AdminContainer>
        </AdminMainLayout>

    );
}

export default AdminDashBoard;