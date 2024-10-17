import React from 'react';
import AdminDashBoardLayout from '../../AdminDashBoardLayout/AdminDashBoardLayout';
import AdminDashBoardTitle from '../../AdminDashBoardTitle/AdminDashBoardTitle';
import AdminChartBar from '../../AdminChartBar/AdminChartBar';
/** @jsxImportSource @emotion/react */


function AdminReservationGraphsBox(props) {
    
    return (
        <AdminDashBoardLayout>
            <AdminDashBoardTitle title={"예약통계"} />
            <AdminChartBar />
        </AdminDashBoardLayout>
    );
}

export default AdminReservationGraphsBox;