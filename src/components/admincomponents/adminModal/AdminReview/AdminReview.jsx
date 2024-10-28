import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminModalLayout from '../AdminModalLayout/AdminModalLayout';
import { adminReviewModalAtom } from '../../../../atoms/modalAtoms';
import { useRecoilState } from 'recoil';
import { reviewIdAtom } from '../../../../atoms/adminAtoms';
import { IoIosClose } from "react-icons/io"
import ReviewComment from '../../../usercomponents/reviewPage/ReviewComment/ReviewComment';
import ReviewBox from '../../../usercomponents/reviewPage/ReviewBox/ReviewBox';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query';
import { adminInstance } from '../../../../apis/utils/instance';


function AdminReview({ containerRef }) {
    const loadMoreRef = useRef(null);

    const queryClient  = useQueryClient();
    const userInfo = queryClient.getQueryData("userInfoQuery");

    const [reviewOpen, setReviewOpen] = useRecoilState(adminReviewModalAtom);
    const [reviewId, setReviewId] = useRecoilState(reviewIdAtom);

    const limit = 10;

    const reviewByreviewId = useQuery(
        ["reviewByreviewIdQuery"],
        async () => await adminInstance.get(`/admin/review/${reviewId}`),
        {
            enabled: reviewOpen,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const comments = useInfiniteQuery(
        ["commentsQuery"],
        async ({ pageParam = 1 }) => await adminInstance.get(`/admin/review/${reviewId}/comments?page=${pageParam}&limit=${limit}`),
        {
            enabled: reviewOpen,
            refetchOnWindowFocus: false,
            getNextPageParam: (lastPage, allPage) => {
                const totalPageCount = lastPage.data.commentCount % limit === 0
                    ? lastPage.data.commentCount / limit
                    : Math.floor(lastPage.data.commentCount / limit) + 1;

                return totalPageCount !== allPage.length ? allPage.length + 1 : null;
            }
        }
    );

    const delteReview = useMutation(
        async (reviewId) => adminInstance.delete(`/admin/review/${reviewId}`),
        {
            onSuccess: response => {
                setReviewOpen(false);
            }
        }
    )

    const deleteComment = useMutation(
        async (commentId) => adminInstance.delete(`/review/comment/${commentId}`),
        {
            onSuccess: response => {
                alert("삭제 완료");
                comments.refetch();
            },
            onError: error => {
                alert("삭제 실패");
            }
        }
    )

    useEffect(() => {
        if (!comments.hasNextPage || !loadMoreRef.current || comments?.data?.pages[0].data?.commentCount < 10) {
            return;
        }

        const observer = new IntersectionObserver(([intersectionObserver]) => {
            if (intersectionObserver.isIntersecting) {
                comments.fetchNextPage();
            }
        }, { threshold: 1.0 });

        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();
    }, [comments.hasNextPage]);

    const handleDelteReviewOnClick = (reviewId) => {
        if(window.confirm("삭제 하시겠습니까?")) {
            delteReview.mutateAsync(reviewId).catch(() => {})
        }
    }

    const handleDeleteCommentOnClick = (commentId) => {
        if(window.confirm("삭제 하시겠습니까?")) {
            deleteComment.mutateAsync(commentId).catch(() => {})
        }
    }

    const closeModal = () => {
        setReviewOpen(false)
        setReviewId(0)
        reviewByreviewId.remove();
    }

    return (
        <AdminModalLayout containerRef={containerRef} isOpen={reviewOpen} closeModal={closeModal}>
            <div css={s.layout}>
                <div css={s.cancelButtonBox}>
                    <button onClick={closeModal}><IoIosClose /></button>
                </div>
                <div css={s.container}>
                    <div css={s.reviewBox}>
                        <ReviewBox review={reviewByreviewId?.data?.data} />
                    </div>
                    <div css={s.commentBox} ref={loadMoreRef}>
                        {
                            comments?.data?.pages?.map(page => page?.data?.comments?.map(comment =>
                                <ReviewComment key={comment.id} comment={comment} userInfo={userInfo?.data} onClick={() => handleDeleteCommentOnClick(comment?.id)}/>
                            ))
                        }
                    </div>
                </div>
                <div css={s.buttonBox}>
                    <button onClick={() => handleDelteReviewOnClick(reviewByreviewId?.data?.data?.id)}>게시물삭제</button>
                </div>
            </div>
        </AdminModalLayout>
    );
}

export default AdminReview;