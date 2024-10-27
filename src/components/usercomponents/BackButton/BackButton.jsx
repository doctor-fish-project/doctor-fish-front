import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

function BackButton({ setShow, title }) {
    const nav = useNavigate()

    const handleBackClick = () => {
        setShow(false);
        setTimeout(() => {
            nav(-1);
        }, 400)
    }

    return (
        <div css={s.layout}>
            <button onClick={handleBackClick}><IoIosArrowBack /></button>
            <div>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default BackButton;