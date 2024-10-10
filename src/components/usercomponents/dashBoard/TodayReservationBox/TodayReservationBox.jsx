import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function TodayReservationBox({ reservations }) {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();

    return (
        <div css={s.layout}>
            <p>{year}년 {month}월 {date}일</p>
            <div css={s.container}>
                {
                    reservations?.map(reservation =>
                        <div key={reservation.id}>
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
                                    <p>부서 : {reservation.doctor?.depart}</p>
                                    <p>의사명 : {reservation.doctor?.name}</p>
                                </div>
                                <p>{reservation.registerDate.slice(0, 10)}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default TodayReservationBox;