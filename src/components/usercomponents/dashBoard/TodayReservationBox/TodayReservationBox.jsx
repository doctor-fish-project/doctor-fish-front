import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

function TodayReservationBox({ reservation, link, onClick }) {
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
            <div css={s.timeBox}>
                <p>{year}년 {month}월 {date}일</p>
                <IoIosArrowForward onClick={onClick} />
            </div>
            <div css={s.container}>
                {
                    <div key={reservation.id} css={s.reservationBox} >
                        <div css={s.header}>
                            <div>
                                <p>시간: </p>
                                <p>{reservation.reservationDate.slice(11, 16)}</p>
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
                }
            </div>
        </div>
    );
}

export default TodayReservationBox;