import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminNoticeBox from '../../../components/admincomponents/adminDashBoard/adminDashBoardBox/AdminNoticeBox/AdminNoticeBox';
import AdminReservationGraphsBox from '../../../components/admincomponents/adminDashBoard/adminDashBoardBox/AdminReservationGraphsBox/AdminReservationGraphsBox';
import AdminReservationTodayBox from '../../../components/admincomponents/adminDashBoard/adminDashBoardBox/AdminReservationTodayBox/AdminReservationTodayBox';
import AdminReservationAllBox from '../../../components/admincomponents/adminDashBoard/adminDashBoardBox/AdminReservationAllBox/AdminReservationAllBox';
import { useQueryClient } from 'react-query';

function AdminDashBoard(props) {
    const queryClient = useQueryClient();
    const userInfo = queryClient.getQueryData("userInfoQuery");

    return (
        <AdminContainer>
            <div css={s.layout}>
                <AdminReservationGraphsBox />
                <AdminNoticeBox />
                {
                    userInfo?.data?.roles[0]?.id !== 4 &&
                    <>
                        <AdminReservationTodayBox />
                        <AdminReservationAllBox />
                    </>
                }
            </div>
        </AdminContainer>
    );
}

export default AdminDashBoard;