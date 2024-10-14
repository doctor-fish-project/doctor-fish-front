import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import SubLayout from '../../../components/usercomponents/SubLayout/SubLayout';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import { useQueryClient } from 'react-query';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MyReviewsPage from '../MyReviewsPage/MyReviewsPage';
import MyCommentsPage from '../MyCommentsPage/MyCommentsPage';
import Swal from 'sweetalert2';

function MyProfilePage(props) {
    const nav = useNavigate();

    const [isShow, setShow] = useState(true);

    const queryClient = useQueryClient()
    const userInfo = queryClient.getQueryData("userInfoQuery")

    const [user, setUser] = useState(userInfo?.data)

    const handleMyReviewsOnClick = () => {
        nav("/dashboard/myprofile/myreviews")
    }

    const handleMyCommentsOnClick = () => {
        nav("/dashboard/myprofile/mycomments")
    }

    const handleSignoutOnClick = () => {
        Swal.fire({
            icon: 'question',
            text: '로그아웃 하시겠습니까?',
            backdrop: false,
            showCancelButton: true,
            confirmButtonText: '확인',
            cancelButtonText: '취소',
            customClass: {
                popup: 'custom-confirm-swal',
                container: 'container',
                confirmButton: 'confirmButton',
            }
        }).then(result => {
            if (result.isConfirmed) {
                localStorage.removeItem("accessToken");
                window.location.replace("/");
            } 
        })
    }

    return (
        <SubLayout isShow={isShow}>
            <SubContainer>
                <BackButton setShow={setShow} />
                <div css={s.layout}>
                    <img src="" alt="" />
                    <div css={s.userInfo}>
                        <input type="text" name="email" id="" value={user?.email} readOnly />
                        <input type="text" name="name" id="" value={user?.name} />
                        <input type="text" name="address" id="" value={user?.address} placeholder='주소' />
                        <input type="text" name="phoneNumber" id="" value={user?.phoneNumber} />
                        <div css={s.userInfoBox}>
                            <button>회원정보 변경</button>
                            <button>비밀번호 변경</button>
                        </div>
                    </div>
                    <div css={s.userRecord}>
                        <button onClick={handleMyReviewsOnClick}>내가 작성 한 리뷰</button>
                        <button onClick={handleMyCommentsOnClick}>내가 작성 한 댓글</button>
                    </div>
                    <div css={s.logoutBox}>
                        <button onClick={handleSignoutOnClick}>로그아웃</button>
                    </div>
                </div>
            </SubContainer>
            <Routes>
                <Route path='/myreviews' element={<MyReviewsPage />} />
                <Route path='/mycomments' element={<MyCommentsPage />} />
            </Routes>
        </SubLayout>

    );
}

export default MyProfilePage;