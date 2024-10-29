import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState } from 'recoil';
import { bellAlramModalAtom } from '../../../../atoms/modalAtoms';
import CancelButton from '../CancelButton/CancelButton';

function BellAlram({ containerRef }) {
    const [reservationDetailOpen, setBellAlramOpen] = useRecoilState(bellAlramModalAtom);
    const [ani, setAni] = useState("userBellAlramOpen");

    const closeModal = () => {
        setAni("userBellAlramClose")
        setTimeout(() => {
            setAni("userBellAlramOpen");
            setBellAlramOpen(false);
        }, 500)
    }

    return (
        <ModalLayout containerRef={containerRef} isOpen={reservationDetailOpen} closeModal={closeModal} ani={ani} width={"100%"} height={"20%"} inset={"40px 0px 0px"} borderTop={"none"} borderBottom={"1px solid #dbdbdb"}>
            <div css={s.layout}>
                <CancelButton onClick={closeModal} />

            </div>
        </ModalLayout>
    );
}

export default BellAlram;