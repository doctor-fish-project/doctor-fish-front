import React, { useState } from 'react';
import AdminDashBoardLayout from '../../AdminDashBoardLayout/AdminDashBoardLayout';
import AdminDashBoardTitle from '../../AdminDashBoardTitle/AdminDashBoardTitle';
import AdminWeekReservationChartBar from '../../AdminWeekReservationChartBar/AdminWeekReservationChartBar';

function AdminWeekReservationGraphsBox(props) {

    return (
        <AdminDashBoardLayout>
            <AdminDashBoardTitle title={"예약 주간 통계"} />
            <AdminWeekReservationChartBar />
        </AdminDashBoardLayout>
    );
}

export default AdminWeekReservationGraphsBox;