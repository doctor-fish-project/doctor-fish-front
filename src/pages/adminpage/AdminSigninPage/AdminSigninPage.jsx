import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { FaUser, FaLock } from "react-icons/fa6";
import { useMutation } from 'react-query';
import { adminInstance } from '../../../apis/utils/instance';
import { useNavigate } from 'react-router-dom';

function AdminSigninPage(props) {
    const nav = useNavigate();

    const [userInput, setUnserInput] = useState({
        username: "",
        password: ""
    })

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        username: <></>,
        password: <></>,
    });

    const adminSignin = useMutation(
        async () => await adminInstance.post("/admin/auth/signin", userInput),
        {
            onSuccess: response => {
                localStorage.setItem("adminAccessToken", "Bearer " + response.data.accessToken);
                adminInstance.interceptors.request.use(config => {
                    config.headers["Authorization"] = localStorage.getItem("adminAccessToken");
                    return config;
                });
                nav("/admin/dashboard", { replace: true })
            },
            onError: error => {
                const response = error.response;
                if (typeof (response.data) === 'string') {
                    alert(response.data)
                    return
                }
                if (response.status === 400) {
                    const fieldErrors = response.data.map(fieldError => ({ field: fieldError.field, defaultMessage: fieldError.defaultMessage }))
                    showFieldErrorMessage(fieldErrors);
                    return
                }
                if (response.status === 401) {
                    alert(response.data);
                    setUnserInput({
                        username: "",
                        password: ""
                    })
                    return
                }
            }
        }
    )

    const handleUserInputOnChange = (e) => {
        setUnserInput(userInput => ({
            ...userInput,
            [e.target.name]: e.target.value
        }))
    }

    const showFieldErrorMessage = (fieldErrors) => {
        let EmptyFieldErros = {
            username: <></>,
            password: <></>,
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
        <div css={s.layout}>
            <div css={s.container}>
                <h2>관리자 로그인</h2>
                <div css={s.inputContainer}>
                    <div css={s.inputBox}>
                        <FaUser />
                        <input type="text" name='username' onChange={handleUserInputOnChange} value={userInput.userName} placeholder='아이디' />
                        {
                            fieldErrorMessages.username !== "" ? fieldErrorMessages.username : <></>
                        }
                    </div>
                    <div css={s.inputBox}>
                        <FaLock />
                        <input type="password" name='password' onChange={handleUserInputOnChange} value={userInput.password} placeholder='패스워드' />
                        {
                            fieldErrorMessages.password !== "" ? fieldErrorMessages.password : <></>
                        }
                    </div>
                </div>
                <div css={s.buttonBox}>
                    <button onClick={() => adminSignin.mutateAsync().catch(() => { })}>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default AdminSigninPage;