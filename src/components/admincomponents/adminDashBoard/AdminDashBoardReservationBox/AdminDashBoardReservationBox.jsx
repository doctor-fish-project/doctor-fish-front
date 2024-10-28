import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function AdminDashBoardReservationBox({ reservation }) {

    return (
        <div css={s.layout}>
            <p>{reservation?.registerDate?.slice(0, 10)}</p>
            <p>{reservation?.user?.name}</p>
            <p>{reservation?.reservationDate?.slice(0, 10)}</p>
            <p>
                {
                    reservation?.status === 1 ? "진행 중"
                        : reservation?.status === 2 ? "완료"
                            : "취소"
                }
            </p>
        </div>
    );
}

export default AdminDashBoardReservationBox;