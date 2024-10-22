import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import ReservationRecord from '../../../components/usercomponents/reviewSelectPage/ReservationRecord/ReservationRecord';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ReviewWritePage from '../ReviewWritePage/ReviewWritePage';

function ReviewSelectPage(props) {
    const nav = useNavigate();
    const [isShow, setIsShow] = useState(true);

    const handleReviewWriteOnClick = () => {
        nav("/review/write")
    }

    return (
        <>
            <UserSubLayout isShow={isShow}>
                <UserSubContainer>
                    <div css={s.buttonBox}>
                        <BackButton setShow={setIsShow} />
                    </div>
                    <div css={s.layout}>
                        <ReservationRecord onClick={handleReviewWriteOnClick}/>
                    </div>
                </UserSubContainer>
            </UserSubLayout>
            <Routes>
                <Route>
                    <Route path='/write' element={<ReviewWritePage />} />
                </Route>
            </Routes>
        </>
    );
}

export default ReviewSelectPage;