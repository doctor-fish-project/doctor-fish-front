import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { FcLike } from "react-icons/fc";

function ReviewBox({ title, name, registerDate, likeCount }) {
    return (
        <div css={s.layout}>
            <div css={s.titleAndDate}>
                <p>{title}sdfffffffffffffffffffffffffffff</p>
                <p>{registerDate}</p>
            </div>
            <div css={s.nameAndLike}>
                <p>{name}</p>
                <p><FcLike />{likeCount}</p>

            </div>
        </div>
    );
}

export default ReviewBox;