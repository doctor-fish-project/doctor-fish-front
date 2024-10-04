import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaRegBell } from "react-icons/fa";

function DashBoardTopBar({ children }) {
    return (
        <div css={s.layout}>
            <div css={s.topBar}>
                <div css={s.logoBox}>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <h3>MEDIBOOK</h3>
                </div>
                <div css={s.iconBox}>
                    <FaRegBell />
                </div>
            </div>
            {children}
        </div>
    );
}

export default DashBoardTopBar;