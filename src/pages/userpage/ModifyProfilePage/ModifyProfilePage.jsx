import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import { useMutation, useQueryClient } from 'react-query';
import { v4 as uuid } from 'uuid'
import Swal from 'sweetalert2';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import { instance } from '../../../apis/utils/instance';
import { useNavigate } from 'react-router-dom';

function ModifyProfilePage(props) {
    const nav = useNavigate();

    const [isShow, setShow] = useState(true);

    const queryClient = useQueryClient();
    const userInfo = queryClient.getQueryData("userInfoQuery");

    const [userInput, setUserInput] = useState({});

    useEffect(() => {
        setUserInput(userInfo?.data)
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

    const handleModifyCancelOnClick = () => {
        setShow(false);
        setTimeout(() => {
            nav(-1);
        }, 400)
    }

    return (
        <UserSubLayout isShow={isShow}>
            <UserSubContainer>
                <BackButton setShow={setShow} title={"내 정보 수정"} />
                <div css={s.layout}>
                    <img src={userInfo?.data?.img} onClick={modifyUserProfileImgOnClick} alt="" />
                    <div css={s.userInfo}>
                    <p>{userInfo?.data?.name}</p>
                    <p>{userInfo?.data?.email}</p>
                </div>
                <div css={s.inputBox}>
                    <input type="text" name="name" onChange={handleUserOnChange} value={userInput?.name} />
                    <input type="text" name="phoneNumber" onChange={handleUserOnChange} value={userInput?.phoneNumber} />
                </div>
                <div css={s.buttonBox}>
                    <div>
                        <button onClick={() => modifyUser.mutateAsync().catch(() => { })} disabled={JSON.stringify(userInput) === JSON.stringify(userInfo?.data)}>확인</button>
                    </div>
                    <div>
                        <button onClick={handleModifyCancelOnClick}>취소</button>
                    </div>
                </div>
            </div>
        </UserSubContainer>
        </UserSubLayout >
    );
}

export default ModifyProfilePage;