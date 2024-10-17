import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function AdminDashBoardButton({ onClick }) {
    return (
        <div css={s.layout}>
            <button onClick={onClick}>더보기</button>
        </div>
    );
}

export default AdminDashBoardButton;