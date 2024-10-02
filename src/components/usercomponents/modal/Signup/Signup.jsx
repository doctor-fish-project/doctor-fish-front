import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState } from 'recoil';
import { signupModalAtom } from '../../../../atoms/modalAtoms';
import { IoIosClose } from "react-icons/io"

function Signup({ containerRef }) {
    const [ signupOpen, setSignupOpen ] = useRecoilState(signupModalAtom);
    const [ ani, setAni ] = useState("userModalOpen")

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
        
        </div>
    </ModalLayout>
    );
}

export default Signup;