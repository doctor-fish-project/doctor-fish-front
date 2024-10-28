import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { FaRegCalendarAlt } from "react-icons/fa";

function BoxTopBar({ title1 }) {

    return (
        <div css={s.layout}>
            <p><FaRegCalendarAlt />{title1}</p>
        </div>
    );
}

export default BoxTopBar;