import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function AdminDashBoardTitle({title}) {
    return (
        <div css={s.layout}>
            <p>{title}</p>
        </div>
    );
}

export default AdminDashBoardTitle;