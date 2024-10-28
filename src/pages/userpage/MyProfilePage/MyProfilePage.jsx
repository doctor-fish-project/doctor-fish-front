import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import { useMutation, useQueryClient } from 'react-query';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MyReviewsPage from '../MyReviewsPage/MyReviewsPage';
import MyCommentsPage from '../MyCommentsPage/MyCommentsPage';
import Swal from 'sweetalert2';
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import { v4 as uuid } from 'uuid'
import { instance } from '../../../apis/utils/instance';
import ModifyProfilePage from '../ModifyProfilePage/ModifyProfilePage';

function MyProfilePage(props) {
    const nav = useNavigate();

    const queryClient = useQueryClient();
    const userInfo = queryClient.getQueryData("userInfoQuery");

    const [isShow, setShow] = useState(true);
    const [userInput, setUserInput] = useState(userInfo?.data);

    useEffect(() => {
        setUserInput(userInfo?.data);
    }, [userInfo])

    const modifyUser = useMutation(
        async () => await instance.put("/user", userInput),
        {
            onSuccess: response => {
                Swal.fire({
                    icon: 'success',
                    text: '수정 완료',
                    backdrop: false,
                    showConfirmButton: false,
                    timer: 1000,
                    willClose: () => {
                        queryClient.invalidateQueries("userInfoQuery");
                    },
                    customClass: {
                        popup: 'custom-timer-swal',
                        container: 'container'
                    }
                })
            }
        }
    )

    const handleUserOnChange = (e) => {
        setUserInput(userInput => ({
            ...userInput,
            [e.target.name]: e.target.value
        }))
    }

    const handleChangeStateOnClick = () => {
        setUserInput(userInfo?.data);
    }

    const handleChangeUserOnClick = () => {
        console.log("요청")
    }

    const handleModifyProfileOnClick = () => {
        nav("/dashboard/myprofile/modifyprofile")
    }

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
        <>
            <UserSubLayout isShow={isShow}>
                <SubContainer>
                    <BackButton setShow={setShow} title={"마이페이지"} />
                    <div css={s.layout}>
                        <img src={userInfo?.data?.img} onClick={handleModifyProfileOnClick} alt="" />
                        <div css={s.userInfo}>
                            <p>{userInfo?.data?.name}</p>
                            <p>{userInfo?.data?.email}</p>
                        </div>
                        <div css={s.userButtonBox}>
                            <div css={s.userModify}>
                                <div>
                                    <button onClick={handleModifyProfileOnClick}>내 정보 수정</button>
                                </div>
                            </div>
                            <div css={s.userRecord}>
                                <div>
                                    <button onClick={handleMyReviewsOnClick}>내 작성 리뷰</button>
                                </div>
                                <div>
                                    <button onClick={handleMyCommentsOnClick}>내 작성 댓글</button>
                                </div>
                            </div>
                        </div>
                        <div css={s.logoutBox}>
                            <div>
                                <button onClick={handleSignoutOnClick}>로그아웃</button>
                            </div>
                            <div>
                                <button>회원탈퇴</button>
                            </div>
                        </div>
                    </div>
                </SubContainer>
            </UserSubLayout>
            <Routes>
                <Route path='/modifyprofile' element={<ModifyProfilePage />} />
                <Route path='/myreviews' element={<MyReviewsPage />} />
                <Route path='/mycomments' element={<MyCommentsPage />} />
            </Routes>
        </>
    );
}

export default MyProfilePage;