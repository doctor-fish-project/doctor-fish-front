import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import MainLayout from '../../../components/usercomponents/MainLayout/MainLayout';
import ReviewBox from '../../../components/usercomponents/reviewPage/ReviewBox/ReviewBox';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ReviewWrite from '../../../components/usercomponents/reviewPage/ReviewWrite/ReviewWrite';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';

function ReviewPage(props) {
    const nav = useNavigate();

    const handleReviewWriteOnClick = () => {
        nav("/dashboard/review/write")
    }

    return (
        <MainLayout>
            <SubContainer>
                <DashBoardTopBar title={"리뷰"} icon={"create"} onClick={handleReviewWriteOnClick} /> 
                <div css={s.layout}>
                    <div css={s.reviewContainer}> 
                        <ReviewBox  title={"testTitle"} name={"testName"} registerDate={"2024-10-04"} likeCount={10}/>
                        <ReviewBox  title={"testTitle1"} name={"testName1"} registerDate={"2024-10-04"} likeCount={9}/>
                        <ReviewBox  title={"testTitle2"} name={"testName2"} registerDate={"2024-10-04"} likeCount={8}/>
                    </div>
                </div>
            </SubContainer>
            <Routes>
                <Route path='/write' element={<ReviewWrite />}/>
            </Routes>
        </MainLayout>
    );
}

export default ReviewPage;