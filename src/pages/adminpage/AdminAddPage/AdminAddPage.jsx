import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';

function AdminAddPage(props) {
    const [ adminInput, setAdminInput ] = useState({
        roleId: 0,
        departId: 0,
        username: "",
        password: "",
        name: "",
        phoneNumber: "",
        comment: "",
        record: ""
    });

    // const roles = useQuery(
    //     ["rolesQuery"],
    //     async () => await instance.get("/role"),
    //     {
    //         enabled: true,
    //         refetchOnWindowFocus: false,
    //         retry: 0,
    //     }
    // )

    // const departs = useQuery(
    //     ["departsQuery"],
    //     async () => await instance.get("/departs"),
    //     {
    //         enabled: true,
    //         refetchOnWindowFocus: false,
    //         retry: 0,
    //     }
    // )

    const adminSignup = useMutation(
        async () => await instance.post("/")
    )

    const adminInputOnChange = (e) => {
        setAdminInput(adminInput => ({
            ...adminInput,
            [e.target.name]: e.target.value
        }))
    }
    console.log(adminInput)
    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"관리자 추가"}>
                    <div css={s.layout}>
                        <div css={s.signupContainer}>
                            <div css={s.inputBox}>
                                <label htmlFor="">아이디</label>
                                <input type="text" onChange={adminInputOnChange} />
                            </div>
                            <div css={s.inputBox}>
                                <label htmlFor="">비밀번호</label>
                                <input type="text" onChange={adminInputOnChange}/>
                            </div>
                            <div css={s.inputBox}>
                                <label htmlFor="">성명</label>
                                <input type="text" onChange={adminInputOnChange}/>
                            </div>
                            <div css={s.inputBox}>
                                <label htmlFor="">휴대폰 번호</label>
                                <input type="text" onChange={adminInputOnChange}/>
                            </div>
                            <div css={s.selectBox}>
                                <p>무슨 권한을 줄 것 인가요?</p>
                                <select name="roleId" id="" onChange={adminInputOnChange} >
                                    <option value={1} >관리자</option>
                                    <option value={2} >원무과</option>
                                    <option value={3} >의사</option>
                                </select>
                            </div>
                            {
                                adminInput.roleId === '3' &&
                                <div css={s.selectBox}>
                                    <p>부서가 어디인가요?</p>
                                    <select name="departId" id="" >
                                        <option value="medicine" onChange={adminInputOnChange}>내과</option>
                                        <option value="surgery" onChange={adminInputOnChange}>외과</option>
                                        <option value="otolaryngology" onChange={adminInputOnChange}>이비인후과</option>
                                        <option value="ophthalmology" onChange={adminInputOnChange}>안과</option>
                                    </select>
                                </div>
                            }
                        </div>
                        {
                            adminInput.roleId === "3" &&
                            <div css={s.textContainer}>
                                <div css={s.textareaBox}>
                                    <label>소개글</label>
                                    <textarea name="" id="" placeholder='내용을 입력하세요.' onChange={adminInputOnChange}></textarea>
                                </div>
                                <div css={s.textareaBox}>
                                    <label>약력</label>
                                    <textarea name="" id="" placeholder='내용을 입력하세요.' onChange={adminInputOnChange}></textarea>
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