import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaRegBell } from "react-icons/fa";
import { BsPencilSquare } from 'react-icons/bs';

function DashBoardTopBar({ title, icon, onClick }) {
    return (
        <div css={s.layout}>
            <p>{title}</p>
            {
                icon == 'create'
                    ?
                    <BsPencilSquare onClick={onClick} />
                    :
                    <FaRegBell />
            }
        </div>
    );
}

export default DashBoardTopBar;