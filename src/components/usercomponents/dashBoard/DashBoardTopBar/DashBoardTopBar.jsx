import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";


function DashBoardTopBar({ title, icon, onClick }) {
    return (
        <div css={s.layout}>
            <p>{title}</p>
            <div css={s.iconBox} onClick={onClick}>
                {icon}
            </div>
        </div>
    );
}

export default DashBoardTopBar;