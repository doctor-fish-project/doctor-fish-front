import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminNoticeBox from '../../../components/admincomponents/adminDashBoard/adminDashBoardBox/AdminNoticeBox/AdminNoticeBox';
import AdminReservationTodayBox from '../../../components/admincomponents/adminDashBoard/adminDashBoardBox/AdminReservationTodayBox/AdminReservationTodayBox';
import AdminReservationAllBox from '../../../components/admincomponents/adminDashBoard/adminDashBoardBox/AdminReservationAllBox/AdminReservationAllBox';
import { useQueryClient } from 'react-query';
import AdminWeekReservationGraphsBox from '../../../components/admincomponents/adminDashBoard/adminDashBoardBox/AdminWeekReservationGraphsBox/AdminWeekReservationGraphsBox';
import AdminMonthAndDoctorReservationGraphsBox from '../../../components/admincomponents/adminDashBoard/adminDashBoardBox/AdminMonthAndDoctorReservationGraphsBox/AdminMonthAndDoctorReservationGraphsBox';
import AdminMonthReservationGraphsBox from '../../../components/admincomponents/adminDashBoard/adminDashBoardBox/AdminMonthReservationGraphsBox/AdminMonthReservationGraphsBox';

function AdminDashBoard(props) {
    const queryClient = useQueryClient();
    const userInfo = queryClient.getQueryData("userInfoQuery");

    return (
        <AdminContainer>
            <div css={s.layout}>
                <AdminMonthAndDoctorReservationGraphsBox />
                <AdminNoticeBox />
                {
                    userInfo?.data?.roles[0]?.id !== 4 ?
                    <>
                        <AdminReservationTodayBox />
                        <AdminReservationAllBox />
                    </> :
                    <>
                        <AdminWeekReservationGraphsBox />
                        <AdminMonthReservationGraphsBox />
                    </>
                }
            </div>
        </AdminContainer>
    );
}

export default AdminDashBoard;