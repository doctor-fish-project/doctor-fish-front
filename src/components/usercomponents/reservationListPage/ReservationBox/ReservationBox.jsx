import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useSetRecoilState } from 'recoil';
import { reservationDetailModalAtom } from '../../../../atoms/modalAtoms';
import { reservationAtom } from '../../../../atoms/reservations';

function ReservationBox({ reservation }) {

    const setReservationDetailOpen = useSetRecoilState(reservationDetailModalAtom);
    const setReservation = useSetRecoilState(reservationAtom);

    const handleReservationDetailOnClick = () => {
        setReservationDetailOpen(true);
        setReservation(reservation)
    }

    return (
        <div css={s.layout} onClick={handleReservationDetailOnClick}>
            <div css={s.header}>
                <p>{reservation?.reservationDate.slice(11, 16)}</p>
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
                    <p>부서 : {reservation.doctor?.depart?.name}</p>
                    <p>의사명 : {reservation.doctor?.user?.name}</p>
                </div>
                <p>{reservation.registerDate.slice(0, 10)}</p>
            </div>
        </div>
    );
}

export default ReservationBox;