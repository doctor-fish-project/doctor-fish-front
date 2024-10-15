import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import MainLayout from '../../../components/usercomponents/MainLayout/MainLayout';
import ReviewBox from '../../../components/usercomponents/reviewPage/ReviewBox/ReviewBox';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import { BsPencilSquare } from 'react-icons/bs';
import ReviewWritePage from '../ReviewWritePage/ReviewWritePage';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import ReviewDetailPage from '../ReviewDetailPage/ReviewDetailPage';

function ReviewPage(props) {
    const nav = useNavigate();

    const handleReviewDetailOnClick = (reviewId) => {
        nav(`/review/${reviewId}`)
    }

    const handleReviewWriteOnClick = () => {
        nav("/review/write")
    }

    const reviews = useQuery(
        ["reviewsQuery"],
        async () => await instance.get("/review/me"),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0,
        }
    )

    return (
        <MainLayout>
            <SubContainer>
                <DashBoardTopBar title={"리뷰"} icon={<BsPencilSquare />} onClick={handleReviewWriteOnClick} />
                <div css={s.layout}>
                    {
                        reviews?.data?.data?.reviews?.map(review =>
                            <ReviewBox key={review.id} review={review} onClick={() => handleReviewDetailOnClick(review.id)}/>
                        )
                    }
                </div>
            </SubContainer>
            <Routes>
                <Route path='/write' element={<ReviewWritePage />} />
                <Route path='/:reviewId' element={<ReviewDetailPage />}/>
            </Routes>
        </MainLayout>
    );
}

export default ReviewPage;