import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useSetRecoilState } from 'recoil';
import { reservationDetailModalAtom } from '../../../../atoms/modalAtoms';
import { reservationIdAtom } from '../../../../atoms/reservations';

function ReservationBox({ reservation }) {

    const setReservationDetailOpen = useSetRecoilState(reservationDetailModalAtom);
    const setReservationId = useSetRecoilState(reservationIdAtom);

    const handleReservationDetailOnClick = (reservationId) => {
        setReservationDetailOpen(true);
        setReservationId(reservationId)
    }

    return (
        <div css={s.layout} onClick={() => handleReservationDetailOnClick(reservation.id)}>
            <p>{reservation?.reservationDate.slice(0, 4)}년 {reservation?.reservationDate.slice(5, 7)}월 {reservation?.reservationDate.slice(8, 10)}일</p>
            <div css={s.header}>
                <div>
                    <p>시간: </p>
                    <p>{reservation?.reservationDate.slice(11, 16)}</p>
                </div>
                {
                    reservation?.status === 1
                        ? <p>예약 진행 중</p>
                        : reservation?.status === 2
                            ? <p>예약 완료</p>
                            : <p>예약 취소</p>
                }
            </div>
            <div css={s.body}>
                <div css={s.doctorInfoBox}>
                    <div>
                        <p>부서: </p>
                        <p>{reservation.doctor?.depart?.name}</p>
                    </div>
                    <div>
                        <p>의사명: </p>
                        <p>{reservation.doctor?.user?.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReservationBox;