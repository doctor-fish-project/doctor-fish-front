import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useQueryClient } from 'react-query';

function TodayReservationBox({ reservations }) {
    const queryClient = useQueryClient();
    const authState = queryClient.getQueryState("accessTokenValidQuery")

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();

    console.log(reservations)

    return (
        <div css={s.layout}>
            <p>{year}년 {month}월 {date}일</p>
            <div css={s.container}>
                {   
                    authState?.data?.data ?
                        reservations?.length === 0
                        ? <div css={s.defaultBox}>
                            <p>진료 예약이 없습니다.</p>
                        </div> : 
                        reservations?.map(reservation =>
                            <div key={reservation.id} css={s.reservationBox} >
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
                                        <p>부서 : {reservation?.doctor?.depart?.name}</p>
                                        <p>의사명 : {reservation?.doctor?.user?.name}</p>
                                    </div>
                                    <p>{reservation.registerDate.slice(0, 10)}</p>
                                </div>
                            </div>
                        )
                        :
                        <div css={s.defaultBox}>
                            <p>로그인 후 이용가능합니다.</p>
                        </div>
                }
            </div>
        </div>
    );
}

export default TodayReservationBox;