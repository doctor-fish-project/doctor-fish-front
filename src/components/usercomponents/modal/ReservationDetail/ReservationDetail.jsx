import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { IoIosClose } from "react-icons/io"
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState, useRecoilValue } from 'recoil';
import { reservationDetailModalAtom } from '../../../../atoms/modalAtoms';
import { reservationAtom } from '../../../../atoms/reservations';

function ReservationDetail({ containerRef }) {

    const [reservationDetailOpen, setReservationDetailOpen] = useRecoilState(reservationDetailModalAtom);
    const [reservation, setReservation] = useRecoilState(reservationAtom);
    const [ani, setAni] = useState("userModalOpen");

    console.log(reservation)

    const closeModal = () => {
        setAni("userModalClose")
        setTimeout(() => {
            setAni("userModalOpen");
            setReservationDetailOpen(false);
        }, 500)
        setReservation({})
    }

    return (
        <ModalLayout containerRef={containerRef} isOpen={reservationDetailOpen} closeModal={closeModal} ani={ani}>
            <div css={s.layout}>
                <div css={s.cancelButtonBox}>
                    <button onClick={closeModal}><IoIosClose /></button>
                </div>

            </div>
        </ModalLayout>
    );
}

export default ReservationDetail;