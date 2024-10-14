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

function ReviewPage(props) {
    const nav = useNavigate();

    const handleReviewWriteOnClick = () => {
        nav("/review/write")
    }

    const reviews = useQuery(
        ["reviewsQuery"],
        async () => await instance.get("/review/me"),
        {
            onSuccess: respone => {

            },
            onError: error => {

            }
        }
    )

    console.log(reviews?.data?.data?.reviews)

    return (
        <MainLayout>
            <SubContainer>
                <DashBoardTopBar title={"리뷰"} icon={<BsPencilSquare />} onClick={handleReviewWriteOnClick} />
                <div css={s.layout}>
                    {
                        reviews?.data?.data?.reviews?.map(review =>
                            <ReviewBox review={review}/>
                        )
                    }
                </div>
            </SubContainer>
            <Routes>
                <Route path='/write' element={<ReviewWritePage />} />
            </Routes>
        </MainLayout>
    );
}

export default ReviewPage;