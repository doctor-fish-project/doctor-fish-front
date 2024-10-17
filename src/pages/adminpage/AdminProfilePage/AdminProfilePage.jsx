import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';

function AdminProfilePage(props) {
    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"프로필 수정"}>
                    <div css={s.layout}>
                        <div css={s.imgBox}>
                            <img src="" alt="" />
                        </div>
                        <div css={s.inputContainer}>
                            <div css={s.singupContainer}>
                                <div css={s.inputBox}>
                                    <label htmlFor="">아이디</label>
                                    <input type="text" />
                                </div>
                                <div css={s.inputBox}>
                                    <label htmlFor="">비밀번호</label>
                                    <input type="text" />
                                </div>
                                <div css={s.inputBox}>
                                    <label htmlFor="">성명</label>
                                    <input type="text" />
                                </div>
                                <div css={s.inputBox}>
                                    <label htmlFor="">휴대폰 번호</label>
                                    <input type="text" />
                                </div>
                            </div>
                            {
                                <div css={s.textContainer}>
                                    <div css={s.textareaBox}>
                                        <label>소개글</label>
                                        <textarea name="" id="" placeholder='내용을 입력하세요.'></textarea>
                                    </div>
                                    <div css={s.textareaBox}>
                                        <label>약력</label>
                                        <textarea name="" id="" placeholder='내용을 입력하세요.'></textarea>
                                    </div>
                                </div>
                            }
                        </div>
                      
                    </div>
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminProfilePage;