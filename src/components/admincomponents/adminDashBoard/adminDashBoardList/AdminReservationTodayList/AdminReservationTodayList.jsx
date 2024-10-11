import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminDashBoardLayout from '../../adminDashBoardComponents/AdminDashBoardLayout/AdminDashBoardLayout';
import AdminContainerTitle from '../../adminDashBoardComponents/AdminDashBoardTitle/AdminDashBoardTitle';
import AdminReservationCurrent from '../../adminDashBoardComponents/AdminDashBoardToday/AdminDashBoardToday';
import AdminDashBoardButton from '../../adminDashBoardComponents/AdminDashBoardButton/AdminDashBoardButton';

function AdminReservationTodayList(props) {
    return (
        <AdminDashBoardLayout>
            <AdminContainerTitle title={"당일예약"} />
            <div css={s.layout}>
                <AdminReservationCurrent />
            </div>
            <AdminDashBoardButton />
        </AdminDashBoardLayout>
    );
}

export default AdminReservationTodayList;