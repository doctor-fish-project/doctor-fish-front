import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { findUserModalAtom, signinModalAtom, signupModalAtom } from '../../../../atoms/modalAtoms';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { instance } from '../../../../apis/utils/instance';
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import Swal from 'sweetalert2';
import CancelButton from '../CancelButton/CancelButton';

function Signin({ containerRef }) {
    const nav = useNavigate();

    const [signinOpen, setSigninOpen] = useRecoilState(signinModalAtom);
    const setFindUserOpen = useSetRecoilState(findUserModalAtom)
    const setSignupOpen = useSetRecoilState(signupModalAtom);

    const [ani, setAni] = useState("userModalOpen")
    const [userInput, setUserInput] = useState({
        email: "",
        password: ""
    })

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        email: <></>,
        password: <></>,
    });

    const signin = useMutation(
        async () => {
            return await instance.post("/auth/signin", userInput)
        }, {
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
                    setSigninOpen(false)
                    nav("/dashboard", { replace: true })
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
                setUserInput({
                    email: "",
                    password: ""
                })
                return
            }
        }
    })

    const handleFindUserOnClick = () => {
        closeModal();
        setTimeout(() => {
            setFindUserOpen(true)
        }, 400)
    }

    const handleSignupOnClick = () => {
        closeModal();
        setTimeout(() => {
            setSignupOpen(true)
        }, 400)
    }

    const handleInputOnChange = (e) => {
        setUserInput(userInput => ({
            ...userInput,
            [e.target.name]: e.target.value
        }))
    }

    const showFieldErrorMessage = (fieldErrors) => {
        let EmptyFieldErros = {
            email: <></>,
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

    const closeModal = () => {
        setAni("userModalClose")
        setTimeout(() => {
            setAni("userModalOpen");
            setSigninOpen(false);
        }, 500)
        setFieldErrorMessages({
            email: <></>,
            password: <></>,
        })
        setUserInput({
            email: "",
            password: ""
        })
    }

    return (
        <ModalLayout containerRef={containerRef} isOpen={signinOpen} closeModal={closeModal} ani={ani} inset={"auto 0px 0px"} width={"100%"} height={"80%"} borderTop={"1px solid #dbdbdb"}>
            <div css={s.layout}>
                <CancelButton onClick={closeModal} />
                <div css={s.logoBox}>
                    <h2>MEDIBOOK</h2>
                </div>
                <div css={s.inputBox}>
                    <p>이메일</p>
                    <input type="text" placeholder='아이디' name='email' onChange={handleInputOnChange} value={userInput.email} />
                    {
                        fieldErrorMessages.email !== "" ? fieldErrorMessages.email : <></>
                    }
                </div>
                <div css={s.inputBox}>
                    <p>비밀번호</p>
                    <input type="password" placeholder='비밀번호' name='password' onChange={handleInputOnChange} value={userInput.password} />
                    {
                        fieldErrorMessages.password !== "" ? fieldErrorMessages.password : <></>
                    }
                </div>
                <div css={s.buttonBox}>
                    <button onClick={() => signin.mutateAsync().catch(() => { })}>로그인</button>
                </div>
                <div css={s.findBox}>
                    <p>패스워드를 잊어버리셨나요?</p>
                    <button onClick={handleFindUserOnClick}>재설정</button>
                </div>
                <div css={s.findBox}>
                    <p>계정이 없으신가요?</p>
                    <button onClick={handleSignupOnClick}>회원가입</button>
                </div>
                <div css={s.pBox}>
                    <div></div>
                    <p>소셜 미디어로 로그인</p>
                    <div></div>
                </div>
                <div css={s.oAuthBox}>
                    <a href=""><FcGoogle /></a>
                    <a href=""><RiKakaoTalkFill /></a>
                    <a href=""><SiNaver /></a>
                </div>
            </div>
        </ModalLayout>
    );
}

export default Signin;