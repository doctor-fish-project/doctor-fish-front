import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useParams } from 'react-router-dom';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import { useQueryClient } from 'react-query';
import ReviewBox from '../../../components/usercomponents/reviewPage/ReviewBox/ReviewBox';
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';

function ReviewDetailPage(props) {
    const params = useParams();
    const reviewId = params.reviewId;

    const [isShow, setShow] = useState(true);

    const queryClient = useQueryClient();
    const reviews = queryClient.getQueryData("reviewsQuery");
    const review = reviews?.data?.reviews.find(review => review.id === parseInt(reviewId))
    console.log(review)

    return (
        <UserSubLayout isShow={isShow}>
            <UserSubContainer>
                <div css={s.buttonBox}>
                    <BackButton setShow={setShow} />
                    <div>
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                </div>
                <div css={s.container}>
                    <ReviewBox review={review} />
                </div>
            </UserSubContainer>
        </UserSubLayout>
    );
}

export default ReviewDetailPage;