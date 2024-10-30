import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useLocation } from 'react-router-dom';
import { SlOptions } from "react-icons/sl";

function ReviewComment({ comment, userInfo, onDeleteOnClick, onEditOnClick }) {
    const location = useLocation();

    const [toggleState, setToggleState] = useState(false);

    const handleChangeToggleStateOnClick = () => {
        setToggleState(!toggleState)
    }

    console.log(comment?.content)

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
                        {comment?.content}
                        {
                            location.pathname !== "/dashboard/myprofile/mycomments" 
                            ?
                            (userInfo?.id === comment?.userId || userInfo?.id === comment?.user?.id || userInfo?.roles?.some(role => [2, 3, 4].includes(role.id))) &&
                            <div css={s.buttonContainer}>
                                    <SlOptions onClick={handleChangeToggleStateOnClick} />
                                {
                                    <div css={s.buttonBox(toggleState)}>
                                        <div>
                                            <button onClick={toggleState ? onEditOnClick : () => {}}>수정</button>
                                            <button onClick={toggleState ? onDeleteOnClick : () => {}} >삭제</button>
                                        </div>
                                    </div>
                                }
                            </div>
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ReviewComment;