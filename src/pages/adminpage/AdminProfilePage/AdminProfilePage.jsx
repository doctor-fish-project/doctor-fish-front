import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageLayout from '../../../components/admincomponents/AdminPageLayout/AdminPageLayout';
import { useMutation, useQueryClient } from 'react-query';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import { v4 as uuid } from 'uuid'
import { adminInstance } from '../../../apis/utils/instance';
import { RingLoader } from "react-spinners";

function AdminProfilePage(props) {

    const queryClient = useQueryClient();
    const userInfo = queryClient.getQueryData("userInfoQuery")

    const [modifyUser, setModifyUser] = useState(userInfo?.data);
    const [uploadState, setUploadState] = useState(false)
    const [editState, setEditState] = useState(false)

    useEffect(() => {
        setModifyUser(userInfo?.data)
    }, [userInfo])

    const modifyAdmin = useMutation(
        async () => await adminInstance.put(`/admin/user/${modifyUser.id}`, modifyUser),
        {
            onSuccess: response => {
               window.location.reload();
            }
        }
    )

    const modifyUserProfileImgOnClick = () => {
        if (window.confirm("프로필 사진을 변경하시겠습니까?")) {
            const fileInput = document.createElement("input");
            fileInput.setAttribute("type", "file");
            fileInput.setAttribute("accept", "image/*");
            fileInput.click();

            fileInput.onchange = (e) => {
                const files = Array.from(e.target.files);
                const profileImage = files[0];

                const storageRef = ref(storage, `admin/profile/${uuid()}_${profileImage.name}`);
                const uploadTask = uploadBytesResumable(storageRef, profileImage);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        setUploadState(true);
                    },
                    (error) => {
                        console.error(error);
                    },
                    async (success) => {
                        const url = await getDownloadURL(storageRef);
                        setModifyUser(modifyUser => ({
                            ...modifyUser,
                            img: url
                        }))
                        setUploadState(false);
                    }
                );

            }
        }
    }

    const handleEditStateOnClick = () => {
        setEditState(true)
    }

    const handleCancelOnClick = () => {
        setEditState(false)
    }

    const modifyUserInfoOnChange = (e) => {
        setModifyUser(modifyUser => ({
            ...modifyUser,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <AdminContainer>
            {
                uploadState && 
                <div css={s.loadingLayout}>
                    <RingLoader />        
                </div>
            }
            <AdminPageLayout title={"프로필 수정"} onClick={handleEditStateOnClick} onCheckClick={() => modifyAdmin.mutateAsync().catch(() => {})} onCancelClick={handleCancelOnClick} editState={editState}>
                <div css={s.layout}>
                    <div css={s.imgBox(editState)} onClick={editState ? modifyUserProfileImgOnClick : () => {}}>
                        <img src={modifyUser?.img} alt="" />
                    </div>
                    <div css={s.inputContainer}>
                        <div css={s.singupContainer}>
                            <div css={s.inputBox}>
                                <label htmlFor="">아이디</label>
                                <input type="text" name='email' value={modifyUser?.email} onChange={modifyUserInfoOnChange} disabled={true} />
                            </div>
                            <div css={s.inputBox}>
                                <label htmlFor="">비밀번호</label>
                                <input type="password" name='password' value={modifyUser?.password} onChange={modifyUserInfoOnChange} disabled={true}/>
                            </div>
                            <div css={s.inputBox}>
                                <label htmlFor="">성명</label>
                                <input type="text" name='name' value={modifyUser?.name} onChange={modifyUserInfoOnChange} disabled={!editState}/>
                            </div>
                            <div css={s.inputBox}>
                                <label htmlFor="">휴대폰 번호</label>
                                <input type="text" name='phoneNumber' value={modifyUser?.phoneNumber} onChange={modifyUserInfoOnChange} disabled={!editState}/>
                            </div>
                        </div>
                        {
                            modifyUser?.roles?.find(role => role.id === 3) &&
                            <div css={s.textContainer}>
                                <div css={s.textareaBox}>
                                    <label>소개글</label>
                                    <textarea name="comment" id="" placeholder='내용을 입력하세요.' value={modifyUser?.comment} onChange={modifyUserInfoOnChange} disabled={!editState}></textarea>
                                </div>
                                <div css={s.textareaBox}>
                                    <label>약력</label>
                                    <textarea name="record" id="" placeholder='내용을 입력하세요.' value={modifyUser?.record} onChange={modifyUserInfoOnChange} disabled={!editState}></textarea>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </AdminPageLayout>
        </AdminContainer>
    );
}

export default AdminProfilePage;