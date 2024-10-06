import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { signinModalAtom, signupModalAtom } from '../../../../atoms/modalAtoms';
import { IoIosClose } from "react-icons/io"

function Signup({ containerRef }) {
    const [ signupOpen, setSignupOpen ] = useRecoilState(signupModalAtom);

    const [ ani, setAni ] = useState("userModalOpen")
    const [ input, setInput] = useState({
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
                <p>회원가입</p>
                <div css={s.inputBox}>
                    <input type="text" name='email' onChange={handleInputOnChange} value={input.email} placeholder='아이디: 사용가능한 이메일'/>
                    <input type="password" name='password' onChange={handleInputOnChange} value={input.password} placeholder='비밀번호'/>
                    <input type="password" name='checkPassword' onChange={handleInputOnChange} value={input.checkPassword} placeholder='비밀번호 확인'/>
                    <input type="password" name='name' onChange={handleInputOnChange} value={input.name} placeholder='본인 이름'/>
                    <input type="password" name='phoneNumber' onChange={handleInputOnChange} value={input.phoneNumber} placeholder='사용자 핸드폰 번호'/>
                </div>
                <div css={s.submitButtonBox}>
                    <button onClick={handleSignupOnClick}>회원가입</button>
                </div>
                <div css={s.andBox}>
                    또는
                </div>
                <div css={s.oAuthBox}>
                    <button>구글</button>
                    <button>네이버</button>
                    <button>카카오</button>
                </div>
            </div>
    </ModalLayout>
    );
}

export default Signup;