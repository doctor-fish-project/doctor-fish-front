import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function CountDownTimer({ reservation }) {

    const reservationDate = new Date(reservation?.reservationDate);
    const today = new Date();

    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const left = reservationDate - today;

            const days = Math.floor(left / (1000 * 60 * 60 * 24));
            const hours = Math.floor((left / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((left / 1000 / 60) % 60);
            const seconds = Math.floor((left / 1000) % 60);

            setTimeLeft(`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`);

            if(reservation.status === 1) {
                clearInterval(interval);
                setTimeLeft('예약 신청이 진행 중 입니다.');
                return;
            }
            if(reservation.status === 3) {
                clearInterval(interval);
                setTimeLeft('예약 신청이 취소 되었습니다..');
                return;
            }
            if (left < 0) {
                clearInterval(interval);
                setTimeLeft('예약 시간이 만료되었습니다.');
                return;
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [today]);

    return (
        <div css={s.timeBox}>
            <p>{reservation?.reservationDate?.slice(0, 16).replace("T", "-")}</p>
            <div css={s.timeLimitBox}>
                <p>{timeLeft}</p>
            </div>
        </div>
    );
}

export default CountDownTimer;