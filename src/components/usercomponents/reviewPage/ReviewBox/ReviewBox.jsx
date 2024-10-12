import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { FcLike } from "react-icons/fc";

function ReviewBox({ }) {
    return (
        <div css={s.layout}>
            <div css={s.nameBox}>
                <p>이름</p>
            </div>
            <div css={s.imgBox}>
                <img src="" alt="" />
            </div>
            <div css={s.dateAndLike}>
                <p>날짜</p>
                <p><FcLike />10</p>
            </div>
        </div>
    );
}

export default ReviewBox;