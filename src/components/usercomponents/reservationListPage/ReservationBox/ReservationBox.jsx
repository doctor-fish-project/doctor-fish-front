import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function ReservationBox({ reservation }) {
    return (
        <div css={s.layout}>
            <div css={s.header}>
                <p>{reservation?.reservationDate.slice(11, 16)}</p>
                {
                    reservation?.status === 1
                        ? <p>진행 중</p>
                        : reservation?.status === 2
                            ? <p>완료</p>
                            : <p>취소</p>
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