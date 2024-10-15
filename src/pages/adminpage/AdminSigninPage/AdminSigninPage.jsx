import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { FaUser, FaLock } from "react-icons/fa6";
import { useMutation } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function AdminSigninPage(props) {
    const nav = useNavigate();

    const [userInput, setUnserInput] = useState({
        userName: "",
        password: ""
    })

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        userName: <></>,
        password: <></>,
    });

    const adminSignin = useMutation(
        async () => await instance.post("/", userInput),
        {
            onSuccess: response => {
                localStorage.setItem("accessToken", "Bearer " + response.data.accessToken);
                instance.interceptors.request.use(config => {
                    config.headers["Authorization"] = localStorage.getItem("accessToken");
                    return config;
                });
                Swal.fire({
                    icon: 'success',
                    text: '로그인 성공',
                    backdrop: false,
                    showConfirmButton: false,
                    timer: 1000,
                    willClose: () => {
                        nav("/admin/dashboard", { replace: true })
                    },
                    customClass: {
                        popup: 'custom-timer-swal',
                        container: 'container'
                    }
                })
            },
            onError: error => {
                const response = error.response;
                console.log(response)
                if (typeof (response.data) === 'string') {
                    Swal.fire({
                        icon: 'error',
                        text: response.data,
                        backdrop: false,
                        showConfirmButton: false,
                        timer: 1000,
                        customClass: {
                            popup: 'custom-timer-swal',
                            container: 'container',
                        }
                    })
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
                        userName: "",
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
            userName: <></>,
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
                <div css={s.inputBox}>
                    <FaUser />
                    <input type="text" name='userName' onChange={handleUserInputOnChange} value={userInput.userName} placeholder='아이디' />
                    {
                        fieldErrorMessages.userName !== "" ? fieldErrorMessages.email : <></>
                    }
                    <FaLock />
                    <input type="password" name='password' onChange={handleUserInputOnChange} value={userInput.password} placeholder='패스워드' />
                    {
                        fieldErrorMessages.password !== "" ? fieldErrorMessages.email : <></>
                    }
                </div>
                <div css={s.buttonBox}>
                    <button>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default AdminSigninPage;