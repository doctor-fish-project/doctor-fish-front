import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { signinModalAtom, signupModalAtom } from '../../../../atoms/modalAtoms';
import { IoIosClose } from "react-icons/io"
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { instance } from '../../../../apis/utils/instance';

function Signin({ containerRef }) {
    const nav = useNavigate();

    const [signinOpen, setSigninOpen] = useRecoilState(signinModalAtom);
    const setSignupOpen = useSetRecoilState(signupModalAtom);

    const [ani, setAni] = useState("userModalOpen")
    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        email: <></>,
        password: <></>,
    });

    const signin = useMutation(
        async () => {
            return await instance.post("/auth/signin", input)
        }, {
        onSuccess: response => {
            localStorage.setItem("accessToken", "Bearer " + response.data.accessToken);
            instance.interceptors.request.use(config => {
                config.headers["Authorization"] = localStorage.getItem("accessToken");
                return config;
            });
            alert("로그인에 성공하셨습니다.")
            closeModal()
            setTimeout(() => {
                nav("/dashboard", { replace: true })
            }, 500)
        },
        onError: error => {
            const response = error.response;
            if (typeof (response.data) === 'string') {
                alert(response.data);
                return
            }
            if (response.status === 400) {
                const fieldErrors = response.data.map(fieldError => ({ field: fieldError.field, defaultMessage: fieldError.defaultMessage }))
                showFieldErrorMessage(fieldErrors);
                return
            }
            if (response.status === 401) {
                alert(response.data);
                setInput({
                    email: "",
                    password: ""
                })
                return
            }
        }
    })

    const handleSigninOnClick = () => {
        signin.mutateAsync().catch(() => { })
    }

    const handleSignupOnClick = () => {
        closeModal();
        setTimeout(() => {
            setSignupOpen(true)
        }, 400)
    }

    const handleInputOnChange = (e) => {
        setInput(input => ({
            ...input,
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
        setInput({
            email: "",
            password: ""
        })
    }

    return (
        <ModalLayout containerRef={containerRef} isOpen={signinOpen} closeModal={closeModal} ani={ani}>
            <div css={s.layout}>
                <div css={s.cancelButtonBox}>
                    <button onClick={closeModal}><IoIosClose /></button>
                </div>
                <div css={s.logoBox}>
                    <h2>MEDIBOOK</h2>
                </div>
                <div css={s.inputBox}>
                    <p>이메일</p>
                    <input type="text" placeholder='아이디' name='email' onChange={handleInputOnChange} value={input.email} />
                    {
                        fieldErrorMessages.email !== "" ? fieldErrorMessages.email : <></>
                    }
                </div>
                <div css={s.inputBox}>
                    <p>비밀번호</p>
                    <input type="password" placeholder='비밀번호' name='password' onChange={handleInputOnChange} value={input.password} />
                    {
                        fieldErrorMessages.password !== "" ? fieldErrorMessages.password : <></>
                    }
                </div>
                <div css={s.buttonBox}>
                    <button onClick={handleSigninOnClick}>로그인</button>
                </div>
                <div css={s.findBox}>
                    <p>패스워드를 잊어버리셨나요?</p>
                    <button>패스워드 찾기</button>
                </div>
                <div css={s.findBox}>
                    <p>계정이 없으신가요?</p>
                    <button onClick={handleSignupOnClick}>회원가입</button>
                </div>
            </div>
        </ModalLayout>
    );
}

export default Signin;