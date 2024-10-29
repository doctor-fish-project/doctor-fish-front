import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";


function DashBoardTopBar({ title, icon, onClick, toggleState, isLatest, latestOnClick, longestOnClick }) {

    return (
        <div css={s.layout}>
            <p>{title}</p>
            <div css={s.iconBox} onClick={onClick}>
                {icon}
                {
                    <div css={s.togleBox(isLatest, toggleState)}>
                        <p onClick={latestOnClick}>최신순</p>
                        <p onClick={longestOnClick}>오래된 순</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default DashBoardTopBar;