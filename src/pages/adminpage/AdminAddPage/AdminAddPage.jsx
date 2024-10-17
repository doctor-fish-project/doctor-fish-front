import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';

function AdminAddPage(props) {
    const [ id, setId ] = useState("");

    const handleOnChange = (e) => {
        setId(e.target.value)
    }
    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"관리자 추가"}>
                    <div css={s.layout}>
                        <div css={s.signupContainer}>
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
                            <div css={s.selectBox}>
                                <p>무슨 권한을 줄 것 인가요?</p>
                                <select name="role" id="" onChange={handleOnChange}>
                                    <option value="1">관리자</option>
                                    <option value="2">원무과</option>
                                    <option value="3">의사</option>
                                </select>
                            </div>
                            {
                                id === "3" &&
                                <div css={s.selectBox}>
                                    <p>부서가 어디인가요?</p>
                                    <select name="role" id="">
                                        <option value="medicine">내과</option>
                                        <option value="surgery">외과</option>
                                        <option value="otolaryngology">이비인후과</option>
                                        <option value="ophthalmology">안과</option>
                                    </select>
                                </div>
                            }
                        </div>
                        {
                            id === "3" &&
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
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminAddPage;