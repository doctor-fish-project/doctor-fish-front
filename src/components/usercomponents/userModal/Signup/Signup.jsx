import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { signinModalAtom, signupModalAtom } from '../../../../atoms/modalAtoms';
import { useMutation } from 'react-query';
import { instance } from '../../../../apis/utils/instance';
import Swal from 'sweetalert2';
import CancelButton from '../CancelButton/CancelButton';

function Signup({ containerRef }) {

    const [signupOpen, setSignupOpen] = useRecoilState(signupModalAtom);
    const setSigninOpen = useSetRecoilState(signinModalAtom);

    const [ani, setAni] = useState("userModalOpen")
    const [input, setInput] = useState({
        email: "",
        password: "",
        checkPassword: "",
        name: "",
        phoneNumber: ""
    })

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        email: <></>,
        password: <></>,
        checkPassword: <></>,
        name: <></>,
        phoneNumber: <></>
    });

    const signup = useMutation(
        async () => {
            return await instance.post("/auth/signup", input)
        }, {
        onSuccess: response => {
            Swal.fire({
                icon: 'info',
                text: '인증메일을 전송하였습니다.',
                backdrop: false,
                showConfirmButton: false,
                timer: 1000,
                willClose: () => {
                    setSignupOpen(false)
                    setSigninOpen(true)
                },
                customClass: {
                    popup: 'custom-timer-swal',
                    container: 'container'
                }
            })
        },
        onError: error => {
            const response = error.response;
            const fieldErrors = response.data.map(fieldError => ({ field: fieldError.field, defaultMessage: fieldError.defaultMessage }))
            showFieldErrorMessage(fieldErrors);
            return
        }
    })

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

    const closeModal = () => {
        setAni("userModalClose")
        setTimeout(() => {
            setAni("userModalOpen");
            setSignupOpen(false);
        }, 500)
        setFieldErrorMessages({
            email: <></>,
            password: <></>,
            checkPassword: <></>,
            name: <></>,
            phoneNumber: <></>
        })
        setInput({
            email: "",
            password: "",
            checkPassword: "",
            name: "",
            phoneNumber: ""
        })
    }

    return (
        <ModalLayout containerRef={containerRef} isOpen={signupOpen} closeModal={closeModal} ani={ani} inset={"auto 0px 0px"} width={"100%"} height={"80%"} borderTop={"1px solid #dbdbdb"}>
            <div css={s.layout}>
                <CancelButton onClick={closeModal} />
                <div css={s.logoBox}>
                    <h2>MEDIBOOK</h2>
                </div>
                <div css={s.inputBox}>
                    <p>이메일</p>
                    <input type="text" name='email' onChange={handleInputOnChange} value={input.email} placeholder='아이디: 사용가능한 이메일' />
                    {
                        fieldErrorMessages.email !== "" ? fieldErrorMessages.email : <></>
                    }
                </div>
                <div css={s.inputBox}>
                    <p>패스워드</p>
                    <input type="password" name='password' onChange={handleInputOnChange} value={input.password} placeholder='비밀번호' />
                    {
                        fieldErrorMessages.password !== "" ? fieldErrorMessages.password : <></>
                    }
                </div>
                <div css={s.inputBox}>
                    <p>패스워드 확인</p>
                    <input type="password" name='checkPassword' onChange={handleInputOnChange} value={input.checkPassword} placeholder='비밀번호 확인' />
                    {
                        fieldErrorMessages.checkPassword !== "" ? fieldErrorMessages.checkPassword : <></>
                    }
                </div>
                <div css={s.inputBox}>
                    <p>이름</p>
                    <input type="text" name='name' onChange={handleInputOnChange} value={input.name} placeholder='본인 이름' />
                    {
                        fieldErrorMessages.name !== "" ? fieldErrorMessages.name : <></>
                    }
                </div>
                <div css={s.inputBox}>
                    <p>휴대폰 번호</p>
                    <input type="text" name='phoneNumber' onChange={handleInputOnChange} value={input.phoneNumber} placeholder='사용자 핸드폰 번호' />
                    {
                        fieldErrorMessages.phoneNumber !== "" ? fieldErrorMessages.phoneNumber : <></>
                    }
                </div>
                <div css={s.submitButtonBox}>
                    <button onClick={() => signup.mutateAsync().catch(() => {})}>회원가입</button>
                </div>
            </div>
        </ModalLayout>
    );
}

export default Signup;