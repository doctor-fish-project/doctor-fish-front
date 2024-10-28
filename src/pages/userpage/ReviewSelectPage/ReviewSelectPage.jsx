import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import ReservationRecord from '../../../components/usercomponents/reviewSelectPage/ReservationRecord/ReservationRecord';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ReviewWritePage from '../ReviewWritePage/ReviewWritePage';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../apis/utils/instance';

function ReviewSelectPage(props) {
    const queryClient = useQueryClient();
    const authState = queryClient.getQueryState("accessTokenValidQuery")

    const nav = useNavigate();
    const [isShow, setIsShow] = useState(true);
    const [reservationId, setReservationId] = useState(0);

    const reservationSelect = useQuery(
        ["reservationSelectQuery"],
        async () => await instance.get("/reservation/end"),
        {
            enabled: authState?.data?.data,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const handleReviewWriteOnClick = (reservationId) => {
        setReservationId(reservationId)
        nav("/review/select/write")
    }

    return (
        <>
            <UserSubLayout isShow={isShow}>
                <UserSubContainer>
                    <BackButton setShow={setIsShow} title={"리뷰"} />
                    <div css={s.layout}>
                        {
                            reservationSelect?.data?.data?.reservations?.map(reservation =>
                                <ReservationRecord key={reservation.id} reservation={reservation} onClick={() => handleReviewWriteOnClick(reservation.id)} />
                            )
                        }
                    </div>
                </UserSubContainer>
            </UserSubLayout>
            <Routes>
                <Route path='/write' element={<ReviewWritePage reservation={reservationSelect?.data?.data?.reservations?.find(reservation => reservation.id === reservationId)} />} />
            </Routes>
        </>
    );
}

export default ReviewSelectPage;