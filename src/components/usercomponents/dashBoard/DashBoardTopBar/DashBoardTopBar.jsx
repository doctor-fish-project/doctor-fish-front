import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaRegBell } from "react-icons/fa";
import { BsPencilSquare } from 'react-icons/bs';

function DashBoardTopBar({ title, icon, click }) {
    return (
        <div css={s.layout}>
            <div css={s.topBar}>
                <p>{title}</p>
                {
                    icon == 'create' 
                    ?
                    <BsPencilSquare onClick={click} />
                    :
                    <FaRegBell />
                }
            </div>
        </div>
    );
}

export default DashBoardTopBar;