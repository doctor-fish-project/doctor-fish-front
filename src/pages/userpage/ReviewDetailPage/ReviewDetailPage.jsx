import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query';
import ReviewBox from '../../../components/usercomponents/reviewPage/ReviewBox/ReviewBox';
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import ReviewComment from '../../../components/usercomponents/reviewPage/ReviewComment/ReviewComment';
import { instance } from '../../../apis/utils/instance';
import Swal from 'sweetalert2';

function ReviewDetailPage(props) {
    const nav = useNavigate();
    const loadMoreRef = useRef(null);

    const params = useParams();
    const reviewId = params.reviewId;

    const [isShow, setShow] = useState(true);
    const [commentInput, setCommentInput] = useState({
        reviewId: 0,
        content: ""
    })

    const queryClient = useQueryClient();
    const userInfo = queryClient.getQueryData("userInfoQuery");

    const limit = 10;

    const review = useQuery(
        ["reviewQuery"],
        async () => await instance.get(`/review/${reviewId}`),
        {
            enabled: !!reviewId,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )    

    const comments = useInfiniteQuery(
        ["commentsQuery"],
        async ({ pageParam = 1 }) => await instance.get(`/review/${reviewId}/comments?page=${pageParam}&limit=${limit}`),
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
        setCommentInput(commentInput => ({
            ...commentInput,
            reviewId: reviewId
        }))
    }, [reviewId])
   
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

    const deleteReview = useMutation(
        async () => await instance.delete(`/review/${reviewId}`),
        {
            onSuccess: response => {
                Swal.fire({
                    icon: 'success',
                    text: '삭제 성공',
                    backdrop: false,
                    showConfirmButton: false,
                    timer: 1000,
                    willClose: () => {
                        nav("/review", { replace: true })
                        queryClient.invalidateQueries("reviewsQuery")
                    },
                    customClass: {
                        popup: 'custom-timer-swal',
                        container: 'container'
                    }
                })
            },
            onError: error => {
                Swal.fire({
                    icon: 'error',
                    text: '삭제 실패',
                    backdrop: false,
                    showConfirmButton: false,
                    timer: 1000,
                    customClass: {
                        popup: 'custom-timer-swal',
                        container: 'container'
                    }
                })
            }
        }
    )

    const writeComment = useMutation(
        async () => await instance.post("/review/comment", commentInput),
        {
            onSuccess: response => {
                setCommentInput(commentInput => ({
                    ...commentInput,
                    content: ""
                }))
                comments.refetch();
            },
            onError: error => {
                Swal.fire({
                    icon: 'error',
                    text: error?.response?.data[0]?.defaultMessage,
                    backdrop: false,
                    showConfirmButton: false,
                    timer: 1000,
                    customClass: {
                        popup: 'custom-timer-swal',
                        container: 'container'
                    }
                })
            }
        }
    )

    const handleCommentInputOnChange = (e) => {
        setCommentInput(commentInput => ({
            ...commentInput,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <UserSubLayout isShow={isShow}>
            <UserSubContainer>
                <div css={s.buttonBox}>
                    <BackButton setShow={setShow} />
                    {
                        userInfo?.data?.id === review?.data?.data?.userId &&
                        <div>
                            <button>수정</button>
                            <button onClick={() => deleteReview.mutateAsync().catch(() => { })}>삭제</button>
                        </div>
                    }
                </div>
                <div css={s.container}>
                    <ReviewBox review={review?.data?.data} />
                    <div css={s.commentBox}>
                        <p>댓글</p>
                        <div css={s.commentInput}>
                            <input type="text" name='content' value={commentInput.content} placeholder='댓글' onChange={handleCommentInputOnChange} />
                            <button onClick={() => writeComment.mutateAsync().catch(() => { })}>작성</button>
                        </div>
                        {
                            comments?.data?.pages?.map(page => page?.data?.comments?.map(comment =>
                                <ReviewComment key={comment.id} comment={comment} />
                            ))

                        }
                    </div>
                    <div ref={loadMoreRef}></div>
                </div>
            </UserSubContainer>
        </UserSubLayout>
    );
}

export default ReviewDetailPage;