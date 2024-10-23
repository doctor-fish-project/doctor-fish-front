import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import { useMutation, useQueryClient } from 'react-query';
import ReviewBox from '../../../components/usercomponents/reviewPage/ReviewBox/ReviewBox';
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import ReviewComment from '../../../components/usercomponents/reviewPage/ReviewComment/ReviewComment';
import { instance } from '../../../apis/utils/instance';
import Swal from 'sweetalert2';

function ReviewDetailPage(props) {
    const nav = useNavigate();

    const params = useParams();
    const reviewId = params.reviewId;

    const [isShow, setShow] = useState(true);

    const queryClient = useQueryClient();
    const userInfo = queryClient.getQueryData("userInfoQuery");
    const reviews = queryClient.getQueryData("reviewsQuery");

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

    return (
        <UserSubLayout isShow={isShow}>
            <UserSubContainer>
                <div css={s.buttonBox}>
                    <BackButton setShow={setShow} />
                    {
                        userInfo?.data?.id === reviews?.data?.reviews.find(review => review.id === parseInt(reviewId)).userId &&
                        <div>
                            <button>수정</button>
                            <button onClick={() => deleteReview.mutateAsync().catch(() => {})}>삭제</button>
                        </div>
                    }

                </div>
                <div css={s.container}>
                    <ReviewBox review={reviews?.data?.reviews.find(review => review.id === parseInt(reviewId))} />
                    <div css={s.commentBox}>
                        <p>댓글</p>
                        <ReviewComment />
                        <ReviewComment />

                    </div>
                </div>
            </UserSubContainer>
        </UserSubLayout>
    );
}

export default ReviewDetailPage;