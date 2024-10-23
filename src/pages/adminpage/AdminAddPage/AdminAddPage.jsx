import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import { useMutation, useQuery } from 'react-query';
import { adminInstance, instance } from '../../../apis/utils/instance';
import AdminPageLayout from '../../../components/admincomponents/AdminPageLayout/AdminPageLayout';

function AdminAddPage(props) {
    const [adminInput, setAdminInput] = useState({
        roleId: 0,
        departId: 0,
        username: "",
        password: "",
        checkPassword: "",
        name: "",
        phoneNumber: "",
        comment: "",
        record: ""
    });

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        email: <></>,
        password: <></>,
        checkPassword: <></>,
        name: <></>,
        phoneNumber: <></>
    });

    const roles = useQuery(
        ["rolesQuery"],
        async () => await adminInstance.get("/admin/roles"),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0,
        }
    )

    useEffect(() => {
        setAdminInput(adminInput => ({
            ...adminInput,
            roleId: roles?.data?.data[0].id
        }))

    }, [roles.isSuccess])

    const departs = useQuery(
        ["departsQuery"],
        async () => await adminInstance.get("/admin/departs"),
        {
            enabled: adminInput.roleId === '3' ? true : false,
            refetchOnWindowFocus: false,
            retry: 0,
        }
    )

    useEffect(() => {
        setAdminInput(adminInput => ({
            ...adminInput,
            departId: departs?.data?.data[0].id
        }))

    }, [departs.isSuccess])

    const adminSignup = useMutation(
        async () => await adminInstance.post("/admin/auth/signup", adminInput),
        {
            onSuccess: respone => {
                alert("등록 성공")
            },
            onError: error => {
                const response = error.response;
                const fieldErrors = response.data.map(fieldError => ({ field: fieldError.field, defaultMessage: fieldError.defaultMessage }))
                showFieldErrorMessage(fieldErrors);
                return
            }
        }
    )

    const adminInputOnChange = (e) => {
        setAdminInput(adminInput => ({
            ...adminInput,
            [e.target.name]: e.target.value
        }))
    }

    const showFieldErrorMessage = (fieldErrors) => {
        let EmptyFieldErros = {
            email: <></>,
            password: <></>,
            checkPassword: <></>,
            name: <></>,
            phoneNumber: <></>
        };

        for (let fieldError of fieldErrors) {
            EmptyFieldErros = {
                ...EmptyFieldErros,
                [fieldError.field]: <p>{fieldError.defaultMessage}</p>
            }
        }

        setFieldErrorMessages(EmptyFieldErros);
    }

    return (
        <AdminContainer>
            <AdminPageLayout title={"관리자 추가"} onCheckClick={() => adminSignup.mutateAsync().catch(() => { })}>
                <div css={s.layout}>
                    <div css={s.signupContainer}>
                        <div css={s.inputBox}>
                            <label htmlFor="username">아이디</label>
                            <input type="text" id='username' name='username' value={adminInput.username} onChange={adminInputOnChange} />
                            {
                                fieldErrorMessages.username !== "" ? fieldErrorMessages.username : <></>
                            }
                        </div>
                        <div css={s.inputBox}>
                            <label htmlFor="password">비밀번호</label>
                            <input type="password" id='password' name='password' value={adminInput.password} onChange={adminInputOnChange} />
                            {
                                fieldErrorMessages.password !== "" ? fieldErrorMessages.password : <></>
                            }
                        </div>
                        <div css={s.inputBox}>
                            <label htmlFor="checkPassword">비밀번호 확인</label>
                            <input type="password" id='checkPassword' name='checkPassword' value={adminInput.checkPassword} onChange={adminInputOnChange} />
                            {
                                fieldErrorMessages.checkPassword !== "" ? fieldErrorMessages.checkPassword : <></>
                            }
                        </div>
                        <div css={s.inputBox}>
                            <label htmlFor="name">성명</label>
                            <input type="text" id='name' name='name' value={adminInput.name} onChange={adminInputOnChange} />
                            {
                                fieldErrorMessages.username !== "" ? fieldErrorMessages.username : <></>
                            }
                        </div>
                        <div css={s.inputBox}>
                            <label htmlFor="phoneNumber">휴대폰 번호</label>
                            <input type="text" id='phoneNumber' name='phoneNumber' value={adminInput.phoneNumber} onChange={adminInputOnChange} />
                        </div>
                        <div css={s.selectBox}>
                            <p>무슨 권한을 줄 것 인가요?</p>
                            <select name="roleId" value={adminInput.roleId} onChange={adminInputOnChange} >
                                {
                                    roles?.data?.data?.map(role =>
                                        <option key={role.id} value={role.id} >{role.name}</option>
                                    )
                                }
                            </select>
                        </div>
                        {
                            adminInput.roleId === '3' &&
                            <div css={s.selectBox}>
                                <p>부서가 어디인가요?</p>
                                <select name="departId" value={adminInput.departId} onChange={adminInputOnChange}>
                                    {
                                        departs?.data?.data?.map(depart =>
                                            <option key={depart.id} value={depart.id}>{depart.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                        }
                    </div>
                    {
                        adminInput.roleId === "3" &&
                        <div css={s.textContainer}>
                            <div css={s.textareaBox}>
                                <label htmlFor='comment'>소개글</label>
                                <textarea name="comment" id="comment" value={adminInput.comment} placeholder='내용을 입력하세요.' onChange={adminInputOnChange}></textarea>
                            </div>
                            <div css={s.textareaBox}>
                                <label htmlFor='record'>약력</label>
                                <textarea name="record" id="record" value={adminInput.record} placeholder='내용을 입력하세요.' onChange={adminInputOnChange}></textarea>
                            </div>
                        </div>

                    }
                </div>
            </AdminPageLayout>
        </AdminContainer>
    );
}

export default AdminAddPage;