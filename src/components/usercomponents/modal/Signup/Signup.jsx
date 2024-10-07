import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { signinModalAtom, signupModalAtom } from '../../../../atoms/modalAtoms';
import { IoIosClose } from "react-icons/io"

function Signup({ containerRef }) {
    const [signupOpen, setSignupOpen] = useRecoilState(signupModalAtom);

    const [ani, setAni] = useState("userModalOpen")
    const [input, setInput] = useState({
        email: "",
        password: "",
        checkPassword: "",
        name: "",
        phoneNumber: ""
    })

    const handleSignupOnClick = () => {
        console.log(input)
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
            setSignupOpen(false);
        }, 500)
    }
    return (
        <ModalLayout containerRef={containerRef} isOpen={signupOpen} closeModal={closeModal} ani={ani}>
            <div css={s.layout}>
                <div css={s.cancelButtonBox}>
                    <button onClick={closeModal}><IoIosClose /></button>
                </div>
                <div css={s.logoBox}>
                    <h2>MEDIBOOK</h2>
                </div>
                <div css={s.inputBox}>
                    <p>이메일</p>
                    <input type="text" name='email' onChange={handleInputOnChange} value={input.email} placeholder='아이디: 사용가능한 이메일' />
                </div>
                <div css={s.inputBox}>
                    <p>패스워드</p>
                    <input type="password" name='password' onChange={handleInputOnChange} value={input.password} placeholder='비밀번호' />
                </div>
                <div css={s.inputBox}>
                    <p>패스워드 확인</p>
                    <input type="password" name='checkPassword' onChange={handleInputOnChange} value={input.checkPassword} placeholder='비밀번호 확인' />
                </div>
                <div css={s.inputBox}>
                    <p>이름</p>
                    <input type="password" name='name' onChange={handleInputOnChange} value={input.name} placeholder='본인 이름' />
                </div>
                <div css={s.inputBox}>
                    <p>휴대폰 번호</p>
                    <input type="password" name='phoneNumber' onChange={handleInputOnChange} value={input.phoneNumber} placeholder='사용자 핸드폰 번호' />
                </div>
                <div css={s.submitButtonBox}>
                    <button onClick={handleSignupOnClick}>회원가입</button>
                </div>
            </div>
        </ModalLayout>
    );
}

export default Signup;