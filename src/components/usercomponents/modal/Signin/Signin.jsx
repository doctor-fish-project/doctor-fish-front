import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { signinModalAtom, signupModalAtom } from '../../../../atoms/modalAtoms';
import { IoIosClose } from "react-icons/io"
import { Link } from 'react-router-dom';

function Signin({ containerRef }) {
    const [ signinOpen, setSigninOpen ] = useRecoilState(signinModalAtom);
    const setSignupOpen = useSetRecoilState(signupModalAtom);

    const [ ani, setAni ] = useState("userModalOpen")
    const [ input, setInput] = useState({
        email: "",
        password: ""
    })

    const handleSigninOnClick = () => {
        console.log(input)
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

    const closeModal = () => {
        setAni("userModalClose")
        setTimeout(() => {
            setAni("userModalOpen");
            setSigninOpen(false);
        }, 500)  
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
                <div css={s.inputContainer}>
                    <div css={s.inputBox}>
                        <p>이메일</p>
                        <input type="text" placeholder='아이디' name='email' onChange={handleInputOnChange} value={input.email} />
                        <p>비밀번호</p>
                        <input type="text" placeholder='비밀번호' name='password' onChange={handleInputOnChange} value={input.password} />
                        <p>패스워드를 잊어버리셨나요?</p>
                    </div>
                    <div css={s.buttonBox}>
                        <button onClick={handleSigninOnClick}>로그인</button>
                    </div>
                    <div css={s.signupBox}>
                        <p>계정이 없으신가요?</p>
                        <button onClick={handleSignupOnClick}>회원가입</button>
                    </div>
                </div>
            </div>
        </ModalLayout>
    );
}

export default Signin;