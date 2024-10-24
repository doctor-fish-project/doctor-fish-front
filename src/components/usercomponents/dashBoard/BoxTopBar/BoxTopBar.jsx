import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';

function BoxTopBar({title1, title2, link, icon}) {
    const nav = useNavigate();

    const handleReservationListOnClick = () => {
        nav(link)
    }

    return (
        <div css={s.layout}>
            <p>{title1}</p>
            <button onClick={handleReservationListOnClick}>{title2}{icon}</button>
        </div>
    );
}

export default BoxTopBar;