import React, { useState } from 'react';
import AdminChartBar from '../../adminDashBoardComponents/AdminChartBar/AdminChartBar';
/** @jsxImportSource @emotion/react */
import AdminContainerTitle from '../../adminDashBoardComponents/AdminDashBoardTitle/AdminDashBoardTitle';
import AdminDashBoardLayout from '../../adminDashBoardComponents/AdminDashBoardLayout/AdminDashBoardLayout';
import { useQuery } from 'react-query';
import { instance } from '../../../../../apis/utils/instance';

function AdminReservationStateList(props) {

    const year = '2024'

    
    return (
        <AdminDashBoardLayout>
            <AdminContainerTitle title={"예약통계"} />
            <AdminChartBar />

        </AdminDashBoardLayout>
    );
}

export default AdminReservationStateList;