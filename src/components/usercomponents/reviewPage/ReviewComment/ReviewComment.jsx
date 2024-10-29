import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function ReviewComment({ comment, userInfo, onDeleteOnClick, onEditOnClick}) {

    return (
        <div css={s.layout}>
            <div css={s.container}>
                <div>
                    <div css={s.imgBox}>
                        <img src={comment?.userImg} alt="" />
                    </div>
                </div>
                <div css={s.commentBox}>
                    <span>{comment?.userName}</span>
                    <span>{comment?.content}</span>
                </div>
            </div>
            {
                (userInfo?.id === comment?.userId || userInfo?.roles?.some(role => [2, 3, 4].includes(role.id))) &&
                    <div css={s.buttonBox}>
                        <button onClick={onEditOnClick}>수정</button>
                        <button onClick={onDeleteOnClick}>삭제</button>
                    </div>
            }
        </div>
    );
}

export default ReviewComment;