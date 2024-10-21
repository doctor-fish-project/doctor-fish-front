import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { adminInstance, instance } from '../../../../../apis/utils/instance';
import AdminDashBoardReservationBox from '../../AdminDashBoardReservationBox/AdminDashBoardReservationBox';
import AdminDashBoardTitle from '../../AdminDashBoardTitle/AdminDashBoardTitle';
import AdminDashBoardLayout from '../../AdminDashBoardLayout/AdminDashBoardLayout';
import AdminDashBoardButton from '../../AdminDashBoardButton/AdminDashBoardButton';

function AdminReservationTodayBox(props) {
    const nav = useNavigate();

    const reservationsToday = useQuery(
        ["reservationsTodayQuery"],
        async () => await adminInstance.get("/reservation/dashboard/today")
    )

    const handleNavOnClick = () => {
        nav("/admin/reservationtoday")
    }

    return (
        <AdminDashBoardLayout>
            <AdminDashBoardTitle title={"당일예약"} />
            <div css={s.layout}>
                {
                    reservationsToday?.data?.data?.reservations?.map(reservation =>
                        <AdminDashBoardReservationBox key={reservation.id} reservation={reservation} />
                    )
                }
            </div>
            <AdminDashBoardButton onClick={handleNavOnClick} />
        </AdminDashBoardLayout>
    );
}

export default AdminReservationTodayBox;