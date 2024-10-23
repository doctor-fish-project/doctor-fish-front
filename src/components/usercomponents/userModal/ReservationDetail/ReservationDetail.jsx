import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState } from 'recoil';
import { reservationDetailModalAtom } from '../../../../atoms/modalAtoms';
import { reservationAtom } from '../../../../atoms/reservations';
import CancelButton from '../CancelButton/CancelButton';
import { useMutation, useQueryClient } from 'react-query';
import CountDownTimer from '../../CountDownTimer/CountDownTimer';
import { instance } from '../../../../apis/utils/instance';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function ReservationDetail({ containerRef }) {

    const nav = useNavigate();

    const queryClient = useQueryClient();
    const userInfo = queryClient.getQueryData("userInfoQuery");

    const [reservationDetailOpen, setReservationDetailOpen] = useRecoilState(reservationDetailModalAtom);
    const [reservation, setReservation] = useRecoilState(reservationAtom);

    const [ani, setAni] = useState("userModalOpen");

    const cancelReservation = useMutation(
        async () => await instance.put(`/reservation/cancel/${reservation?.id}`),
        {
            onSuccess: response => {
                Swal.fire({
                    icon: 'success',
                    text: '예약이 취소되었습니다.',
                    backdrop: false,
                    showConfirmButton: false,
                    timer: 1000,
                    willClose: () => {
                        nav("/reservationlist", { replace: true })
                    },
                    customClass: {
                        popup: 'custom-timer-swal',
                        container: 'container'
                    }
                })
            }
        }
    )

    const handleCancelReservationOnClick = () => {
        Swal.fire({
            icon: 'info',
            text: '예약 취소하시겠습니까?',
            backdrop: false,
            showCancelButton: true,
            confirmButtonText: '확인',
            cancelButtonText: '취소',
            customClass: {
                popup: 'custom-confirm-swal',
                container: 'container',
                confirmButton: 'confirmButton',
            }
        }).then(result => {
            if (result.isConfirmed) {
                cancelReservation.mutateAsync().catch(() => {})
                setReservationDetailOpen(false);
            }
        })
    }

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
                    <p>{userInfo?.data?.name}</p>
                    <p>님 예약내역</p>
                </div>
                <div css={s.infoContainer}>
                    <div css={s.doctorContainer}>
                        <div css={s.doctorImgBox}>
                            <img src={reservation?.doctor?.user?.img} alt="" />
                        </div>
                        <div css={s.doctorInfoBox}>
                            <p>{reservation?.doctor?.user?.name}</p>
                            <p>{reservation?.doctor?.depart?.name}</p>
                        </div>
                    </div>
                    <div css={s.doctorIntroduceBox}>
                        <p>{reservation?.doctor?.comment}</p>
                    </div>
                    <CountDownTimer reservationDate={reservation?.reservationDate}/>
                </div>
                <div css={s.buttonBox}>
                    <button>예약수정</button>
                    <button onClick={handleCancelReservationOnClick} disabled={reservation?.status === 3}>예약취소</button>
                </div>
            </div>
        </ModalLayout>
    );
}

export default ReservationDetail;