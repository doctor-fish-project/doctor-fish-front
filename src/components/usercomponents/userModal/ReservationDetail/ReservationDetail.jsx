import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState } from 'recoil';
import { reservationDetailModalAtom } from '../../../../atoms/modalAtoms';
import { reservationAtom } from '../../../../atoms/reservations';
import CancelButton from '../CancelButton/CancelButton';

function ReservationDetail({ containerRef }) {

    const [reservationDetailOpen, setReservationDetailOpen] = useRecoilState(reservationDetailModalAtom);
    const [reservation, setReservation] = useRecoilState(reservationAtom);

    console.log(reservation)

    const [ani, setAni] = useState("userModalOpen");
    
    
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
                <CancelButton onClick={closeModal} />
                <div css={s.nameContainer}> 
                    <p>백승주</p>
                    <p>님 예약내역</p>
                </div>
                <div css={s.infoContainer}>
                    <div css={s.doctorContainer}>
                        <div css={s.doctorImgBox}>
                            <img src="" alt="" />
                        </div>
                        <div css={s.doctorInfoBox}>
                            <p>백승주 의사</p>
                            <p>정형외과, 의사 부서</p>
                        </div>
                    </div>
                    <div css={s.doctorIntroduceBox}>
                        <p>안녕하세요. 언제나 환자를 위해 최선을 다하는 누구누구 의사입니다.</p>
                    </div>
                    <div css={s.timeBox}>
                        <p>2024-10-22</p>
                        <div css={s.timeLimitBox}>
                            <p>72h 22m 19s</p>
                        </div>
                    </div>
                </div>
                <div css={s.buttonBox}>
                    <button>예약수정</button>
                    <button>예약취소</button>
                </div>
            </div>
        </ModalLayout>
    );
}

export default ReservationDetail;