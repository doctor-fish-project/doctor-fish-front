import React from 'react';
import AdminChartBar from '../../adminDashBoardComponents/AdminChartBar/AdminChartBar';
/** @jsxImportSource @emotion/react */
import AdminContainerTitle from '../../adminDashBoardComponents/AdminDashBoardTitle/AdminDashBoardTitle';
import AdminDashBoardLayout from '../../adminDashBoardComponents/AdminDashBoardLayout/AdminDashBoardLayout';

function AdminReservationStateList({ title }) {
    return (
        <AdminDashBoardLayout>
            <AdminContainerTitle title={"예약통계"} />
            <div>
                <AdminChartBar />
            </div>
        </AdminDashBoardLayout>
    );
}

export default AdminReservationStateList;