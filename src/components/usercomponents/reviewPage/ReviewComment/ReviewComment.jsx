import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useMutation, useQueryClient } from 'react-query';
import { adminInstance } from '../../../../apis/utils/instance';

function ReviewComment({ comment, userInfo }) {

    const queryClient = useQueryClient();

    const deleteComment = useMutation(
        async () => await adminInstance.delete(`/admin/review/comment/${comment?.id}`),
        {
            onSuccess: response => {
                alert("삭제 성공");
                queryClient.invalidateQueries("commentsQuery")
            }
        }
    )

    const handleDeleteCommentOnClick = () => {
        if(window.confirm("삭제 하시겠습니까?")) {
            deleteComment.mutateAsync().catch(() => {})
        }
    }
 
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
                (userInfo?.id === comment?.userId || userInfo?.roles?.some(role => [2, 3, 4].includes(role.id))) && (
                    <div css={s.buttonBox}>
                        <button onClick={handleDeleteCommentOnClick} >삭제</button>
                    </div>
                )
            }

        </div>
    );
}

export default ReviewComment;