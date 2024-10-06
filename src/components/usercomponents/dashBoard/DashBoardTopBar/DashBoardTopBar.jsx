import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaRegBell } from "react-icons/fa";

function DashBoardTopBar(props) {
    return (
        <div css={s.layout}>
            <div css={s.topBar}>
                <p>MEDIBOOK</p>
                <FaRegBell />
            </div>
        </div>
    );
}

export default DashBoardTopBar;