import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useLocation } from 'react-router-dom';

function ReviewComment({ comment, userInfo, onDeleteOnClick, onEditOnClick}) {
    const location = useLocation();

    return (
        <div css={s.layout}>
            <div css={s.container}>
                <div>
                    <div css={s.imgBox}>
                        <img src={comment?.userImg} alt="" />
                    </div>
                </div>
                <div css={s.commentContainer}>
                    <div css={s.commentBox}>
                        <span>{comment?.userName}</span>
                        <span>{comment?.content}</span>
                    </div>
                    {
                        (userInfo?.id === comment?.userId || userInfo?.id === comment?.user?.id || userInfo?.roles?.some(role => [2, 3, 4].includes(role.id))) && (
                            <div css={s.buttonBox}>
                                {
                                    location.pathname !== "/dashboard/myprofile/mycomments" &&
                                    <div>
                                        <button onClick={onEditOnClick}>수정</button>
                                        <button onClick={onDeleteOnClick} >삭제</button>
                                    </div>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ReviewComment;