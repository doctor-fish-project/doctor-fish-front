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

    const modifyUserProfileImgOnClick = () => {
        Swal.fire({
            icon: 'question',
            text: '사진을 변경하시겠습니까?',
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
                const fileInput = document.createElement("input");
                fileInput.setAttribute("type", "file");
                fileInput.setAttribute("accept", "image/*");
                fileInput.click();

                fileInput.onchange = (e) => {
                    const reviewImage = Array.from(e.target.files)[0];
                    const storageRef = ref(storage, `user/profile/${uuid()}_${reviewImage.name}`);
                    const uploadTask = uploadBytesResumable(storageRef, reviewImage);
                    uploadTask.on(
                        "state_changed",
                        (snapshot) => {
                            Swal.fire({
                                text: '사진 등록 중...',
                                backdrop: false,
                                allowOutsideClick: false,
                                didOpen: () => {
                                    Swal.showLoading();
                                },
                                customClass: {
                                    popup: 'custom-loading-swal',
                                    container: 'container'
                                }
                            });
                        },
                        (error) => {
                            console.error(error);
                        },
                        async (success) => {
                            Swal.close();
                            const url = await getDownloadURL(storageRef);
                            setUserInput(userInput => ({
                                ...userInput,
                                img: url
                            }))
                        }
                    );
                }
            }
        })
    }

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
                        <img src={userInfo?.data?.img} onClick={modifyUserProfileImgOnClick} alt="" />
                        <div css={s.userInfo}>
                            <p>{userInfo?.data?.name}</p>
                            <p>{userInfo?.data?.email}</p>
                            {/* <input type="text" name="email" id="" defaultValue={userInput?.email} readOnly />
                            <input type="text" name="name" onChange={handleUserOnChange} value={userInput?.name} />
                            <input type="text" name="phoneNumber" onChange={handleUserOnChange} value={userInput?.phoneNumber} /> */}
                            <div css={s.userInfoBox}>

                                
                                    {/* <button onClick={() => modifyUser.mutateAsync().catch(() => { })} disabled={JSON.stringify(userInput) === JSON.stringify(userInfo?.data)}>확인</button>
                                    <button onClick={handleChangeStateOnClick}>취소</button>
                                
                                    <button onClick={handleChangeStateOnClick}>회원정보 변경</button>
                                    <button>비밀번호 변경</button> */}

                                
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
            </UserSubLayout>
            <Routes>
                <Route path='/myreviews' element={<MyReviewsPage />} />
                <Route path='/mycomments' element={<MyCommentsPage />} />
            </Routes>
        </>
    );
}

export default MyProfilePage;