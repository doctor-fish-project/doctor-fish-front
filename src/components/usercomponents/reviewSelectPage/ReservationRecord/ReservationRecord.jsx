import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useLocation } from 'react-router-dom';

function ReservationRecord({ reservation, onClick }) {
    const location = useLocation();

    return (
        <div css={s.layout}>
            <div css={s.container}>
                <div css={s.infoBox}>
                    <div>
                        <p>{reservation?.reservationDate?.slice(0, 16).replace("T", "-")}</p>
                        <p>{reservation?.doctor?.user?.name}</p>
                    </div>
                    {
                        location.pathname !== "/review/select/write" &&
                        <button onClick={onClick}>리뷰쓰기</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default ReservationRecord;