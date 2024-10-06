import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { signinModalAtom, signupModalAtom } from '../../../../atoms/modalAtoms';
import { IoIosClose } from "react-icons/io"

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
                <p>로그인</p>
                <div css={s.inputBox}>
                    <input type="text" name='email' onChange={handleInputOnChange} value={input.emial}/>
                    <input type="password" name='password' onChange={handleInputOnChange} value={input.password}/>
                </div>
                <div css={s.submitButtonBox}>
                    <button onClick={handleSigninOnClick}>로그인</button>
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

export default Signin;