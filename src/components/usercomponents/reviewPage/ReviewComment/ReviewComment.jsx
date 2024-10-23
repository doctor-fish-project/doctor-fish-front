import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function ReviewComment(props) {
    return (
        <div css={s.layout}>
            <div>
                <div css={s.imgBox}>
                    <img src="" alt="" />
                </div>
            </div>
            <div css={s.commentBox}>
                <span>백승주</span>
                <span>안녕하세요. 이런저런일로 댓글 달았습니다.</span>
            </div>
        </div>
    );
}

export default ReviewComment;