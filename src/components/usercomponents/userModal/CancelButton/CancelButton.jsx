import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { IoIosClose } from "react-icons/io"

function CancelButton({ onClick}) {
    return (
        <div css={s.layout}>
            <button onClick={onClick}><IoIosClose /></button>
        </div>
    );
}

export default CancelButton;