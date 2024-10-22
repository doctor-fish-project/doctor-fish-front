import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function ReservationRecord({ onClick }) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <div css={s.infoBox}>
                    <div>
                        <p>2024-10-22</p>
                        <p>백승주 의사</p>
                    </div>
                    <button onClick={onClick}>리뷰쓰기</button>
                </div>
            </div>
        </div>
    );
}

export default ReservationRecord;