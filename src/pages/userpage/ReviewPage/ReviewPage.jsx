import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import ReviewBox from '../../../components/usercomponents/reviewPage/ReviewBox/ReviewBox';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import { BsPencilSquare } from 'react-icons/bs';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import ReviewDetailPage from '../ReviewDetailPage/ReviewDetailPage';
import ReviewSelectPage from '../ReviewSelectPage/ReviewSelectPage';

function ReviewPage(props) {
    const nav = useNavigate();

    const handleReviewDetailOnClick = (reviewId) => {
        nav(`/review/${reviewId}`)
    }

    const handleReviewSelectOnClick = () => {
        nav("/review/select");
    }

    const reviews = useQuery(
        ["reviewsQuery"],
        async () => await instance.get("/review/list"),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0,
        }
    )

    return (
        <>
            <SubContainer>
                <DashBoardTopBar title={"리뷰"} icon={<BsPencilSquare />} onClick={handleReviewSelectOnClick} />
                <div css={s.layout}>
                    {
                        reviews?.data?.data?.reviews?.map(review =>
                            <ReviewBox key={review.id} review={review} onClick={() => handleReviewDetailOnClick(review.id)} />
                        )
                    }
                </div>
            </SubContainer>
            <Routes>
                <Route path='/select/*' element={<ReviewSelectPage />} />
                <Route path='/:reviewId' element={<ReviewDetailPage />} />
            </Routes>
        </>
    );
}

export default ReviewPage;