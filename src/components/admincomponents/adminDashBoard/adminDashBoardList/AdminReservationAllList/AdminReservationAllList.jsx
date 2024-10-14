import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminContainerTitle from '../../adminDashBoardComponents/AdminDashBoardTitle/AdminDashBoardTitle';
import AdminDashBoardLayout from '../../adminDashBoardComponents/AdminDashBoardLayout/AdminDashBoardLayout';
import AdminDashBoardAllDay from '../../adminDashBoardComponents/AdminDashBoardAllDay/AdminDashBoardAllDay';
import AdminDashBoardButton from '../../adminDashBoardComponents/AdminDashBoardButton/AdminDashBoardButton';

function AdminReservationAllList(props) {
    return (
        <AdminDashBoardLayout>
            <AdminContainerTitle title={"전체예약"} />
            <div>
                <AdminDashBoardAllDay />
            </div>
            <AdminDashBoardButton />
        </AdminDashBoardLayout>
    );
}

export default AdminReservationAllList;