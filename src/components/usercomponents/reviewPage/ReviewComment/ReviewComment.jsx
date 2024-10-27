import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function ReviewComment({ comment }) {
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
            <div css={s.buttonBox}>
                <button>삭제</button>
            </div>
        </div>
    );
}

export default ReviewComment;