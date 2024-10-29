import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import ReviewComment from '../../../components/usercomponents/reviewPage/ReviewComment/ReviewComment';
import { useInfiniteQuery, useMutation } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import Swal from 'sweetalert2';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ReviewDetailPage from '../ReviewDetailPage/ReviewDetailPage';

function MyCommentsPage(props) {
    const nav = useNavigate();

    const loadMoreRef = useRef(null);
    const [isShow, setShow] = useState(true);

    const limit = 10;

    const myComments = useInfiniteQuery(
        ["myCommentsQuery"],
        async ({ pageParam = 1 }) => await instance.get(`/review/comments/me?page=${pageParam}&limit=${limit}`),
        {
            refetchOnWindowFocus: false,
            getNextPageParam: (lastPage, allPage) => {
                const totalPageCount = lastPage.data.commentCount % limit === 0
                    ? lastPage.data.commentCount / limit
                    : Math.floor(lastPage.data.commentCount / limit) + 1;

                return totalPageCount !== allPage.length ? allPage.length + 1 : null;
            }
        }
    );

    useEffect(() => {
        if (!myComments.hasNextPage || !loadMoreRef.current || myComments?.data?.pages[0].data?.commentCount < 10) {
            return;
        }

        const observer = new IntersectionObserver(([intersectionObserver]) => {
            if (intersectionObserver.isIntersecting) {
                myComments.fetchNextPage();
            }
        }, { threshold: 1.0 });

        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();
    }, [myComments.hasNextPage]);

    const deleteComment = useMutation(
        async (commentId) => await instance.delete(`/review/comment/${commentId}`),
        {
            onSuccess: response => {
                myComments.refetch();
            }
        }
    )

    const handleDeleteCommentOnClcik = (commentId) => {
        Swal.fire({
            icon: 'info',
            text: '삭제 하시겠습니까?',
            backdrop: false,
            showCancelButton: true,
            confirmButtonText: '확인',
            cancelButtonText: '취소',
            allowOutsideClick: false,
            customClass: {
                popup: 'custom-confirm-swal',
                container: 'container',
                confirmButton: 'confirmButton',
            }
        }).then(result => {
            if (result.isConfirmed) {
                deleteComment.mutateAsync(commentId).catch(() => { })
            }
        })
    }

    const handleReviewDetailOnClick = (reviewId) => {
        nav(`/dashboard/myprofile/mycomments/${reviewId}`, { replace: true })
    }

    return (
        <>
            <UserSubLayout isShow={isShow}>
                <UserSubContainer>
                    <BackButton setShow={setShow} title={"내 댓글"} />
                    <div css={s.layout} ref={loadMoreRef}>
                        <div css={s.reviewContainer}>
                            {
                                myComments?.data?.pages?.map(page => page?.data?.comments?.map(comment =>
                                    <>
                                        <div key={comment.id} css={s.imgAndReview} onClick={() => handleReviewDetailOnClick(comment?.id)}>
                                            <div>
                                                <div css={s.imgBox}>
                                                    <img src={comment?.userImg} alt="" />
                                                </div>
                                            </div>
                                            <div css={s.reviewBox}>
                                                <span>{comment?.userName}</span>
                                                <span>{comment?.content}</span>
                                            </div>
                                        </div>
                                        {
                                            comment?.comment?.map(com => {
                                                const myComment = {
                                                    userName: com?.user?.name,
                                                    userImg: com?.user?.img,
                                                    content: com?.content
                                                }
                                                return <div key={com?.id} css={s.commentBox}><ReviewComment comment={myComment} onClick={() => handleDeleteCommentOnClcik(com?.id)} /></div>
                                            })
                                        }
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </UserSubContainer>
            </UserSubLayout>
            <Routes>
                <Route path='/:reviewId' element={<ReviewDetailPage />}/>
            </Routes>
        </>
    );
}

export default MyCommentsPage;