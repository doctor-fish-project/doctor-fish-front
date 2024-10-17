import React, { useState } from 'react';
import AdminChartBar from '../../adminDashBoardComponents/AdminChartBar/AdminChartBar';
/** @jsxImportSource @emotion/react */
import AdminContainerTitle from '../../adminDashBoardComponents/AdminDashBoardTitle/AdminDashBoardTitle';
import AdminDashBoardLayout from '../../adminDashBoardComponents/AdminDashBoardLayout/AdminDashBoardLayout';
import { useQuery } from 'react-query';
import { instance } from '../../../../../apis/utils/instance';

function AdminReservationStateList(props) {

    const year = '2024'

    const graphs = useQuery(
        ["graphsQuery"],
        async () => await instance.get(`/reservation/list/month/${year}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    return (
        <AdminDashBoardLayout>
            <AdminContainerTitle title={"예약통계"} />
            <AdminChartBar monthList={graphs?.data?.data?.months?.map(i => i.month)} reservationMonths={graphs?.data?.data?.getReservationMonths}/>

        </AdminDashBoardLayout>
    );
}

export default AdminReservationStateList;