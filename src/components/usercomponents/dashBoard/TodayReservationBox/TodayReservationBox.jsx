import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useQueryClient } from 'react-query';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

function TodayReservationBox({ reservations, link }) {
    const queryClient = useQueryClient();
    const authState = queryClient.getQueryState("accessTokenValidQuery")
    const nav = useNavigate();

    const parse = (value) => (value < 10 ? "0" : "") + value

    const now = new Date();
    const year = now.getFullYear();
    const month = parse(now.getMonth() + 1);
    const date = parse(now.getDate());

    const handleReservationListOnClick = () => {
        nav(link)
    }

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
                                        <div>
                                            <p>시간: </p> 
                                            <p>{reservation?.reservationDate.slice(11, 16)}</p>
                                        </div>
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
                                            <div>
                                                <p>부서: </p> 
                                                <p>{reservation?.doctor?.depart?.name}</p>
                                            </div>
                                            <div>
                                                <p>의사명: </p> 
                                                <p>{reservation?.doctor?.user?.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div css={s.buttonBox}>
                                        <button onClick={handleReservationListOnClick} link={link}>전체보기 <IoIosArrowForward /></button>
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