import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import AdminDashBoardReservationBox from '../../AdminDashBoardReservationBox/AdminDashBoardReservationBox';
import { adminInstance } from '../../../../../apis/utils/instance';
import AdminDashBoardLayout from '../../AdminDashBoardLayout/AdminDashBoardLayout';
import AdminDashBoardTitle from '../../AdminDashBoardTitle/AdminDashBoardTitle';
import AdminDashBoardButton from '../../AdminDashBoardButton/AdminDashBoardButton';

function AdminReservationAllBox(props) {
    const nav = useNavigate();

    const handleNavOnClick = () => {
        nav("/admin/reservation")
    }

    const reservationsAll = useQuery(
        ["reservationsAllQuery"],
        async () => await adminInstance.get("/admin/reservation/dashboard/all")
    )

    return (
        <AdminDashBoardLayout>
            <AdminDashBoardTitle title={"전체예약"} />
            <div css={s.layout}>
                {
                    reservationsAll?.data?.data?.reservations?.map(reservation => 
                        <AdminDashBoardReservationBox key={reservation.id} reservation={reservation} />
                    )
                }
            </div>
            <AdminDashBoardButton onClick={handleNavOnClick} />
        </AdminDashBoardLayout>
    );
}

export default AdminReservationAllBox;