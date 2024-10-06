import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState } from 'recoil';
import { adminSigninModalAtom } from '../../../../atoms/modalAtoms';
import { IoIosClose } from "react-icons/io"

function AdminSignin({ containerRef }) {

    const [ adminSigninOpen, setAdminSigninOpen ] = useRecoilState(adminSigninModalAtom);

    const [ ani, setAni ] = useState("userModalOpen")
    const [ input, setInput] = useState({
        email: "",
        password: ""
    })

    const handleInputOnChange = (e) => {
        setInput(input => ({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handleSigninOnClick = () => {
        
    }

    const closeModal = () => {
        setAni("userModalClose")
        setTimeout(() => {
            setAni("userModalOpen");
            setAdminSigninOpen(false);
        }, 500)
         
    }
    return (
        <ModalLayout containerRef={containerRef} isOpen={adminSigninOpen} closeModal={closeModal} ani={ani}>
            <div css={s.layout}>
                <div css={s.cancelButtonBox}>
                    <button onClick={closeModal}><IoIosClose /></button>
                </div>
                <p>관리자 로그인</p>
                <div css={s.inputBox}>
                    <input type="text" name='email' onChange={handleInputOnChange} value={input.emial}/>
                    <input type="password" name='password' onChange={handleInputOnChange} value={input.password}/>
                </div>
                <div css={s.submitButtonBox}>
                    <button onClick={handleSigninOnClick}>로그인</button>
                </div>
            </div>
        </ModalLayout>
    );
}

export default AdminSignin;