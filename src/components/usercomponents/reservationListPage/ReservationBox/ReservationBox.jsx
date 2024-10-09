import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function ReservationBox({ reservation }) {
    console.log(reservation)
    return (
        <div css={s.layout}>
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
                <p>{reservation.doctor?.name}</p>
                <p>{reservation.doctor?.depart}</p>
            </div>
        </div>
    );
}

export default ReservationBox;