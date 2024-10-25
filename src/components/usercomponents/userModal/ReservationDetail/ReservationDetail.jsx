import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import CancelButton from '../CancelButton/CancelButton';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import CountDownTimer from '../../CountDownTimer/CountDownTimer';
import { instance } from '../../../../apis/utils/instance';
import Swal from 'sweetalert2';
import { doctorIdAtom } from '../../../../atoms/doctorAtoms';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modifyStateAtom, reservationIdAtom } from '../../../../atoms/reservations';
import { reservationDetailModalAtom, reservationModalAtom } from '../../../../atoms/modalAtoms';

function ReservationDetail({ containerRef }) {
    const queryClient = useQueryClient();
    const userInfo = queryClient.getQueryData("userInfoQuery");

    const [ reservationId, setReservationId ] = useRecoilState(reservationIdAtom);
    const [reservationDetailOpen, setReservationDetailOpen] = useRecoilState(reservationDetailModalAtom);

    const setDoctorId = useSetRecoilState(doctorIdAtom);
    const setModifyState = useSetRecoilState(modifyStateAtom);
    const setReservationModalOpen = useSetRecoilState(reservationModalAtom);


    const [ani, setAni] = useState("userModalOpen");

    const reservation = useQuery(
        ["reservationQuery"],
        async () => {
            setModifyState(false)
            return await instance.get(`/reservation/${reservationId}`)
        },
        {
            enabled: reservationDetailOpen,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

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
                        setReservationDetailOpen(false)
                        setReservationId(0)
                    },
                    customClass: {
                        popup: 'custom-timer-swal',
                        container: 'container'
                    }
                })
            }
        }
    )

    const handleModifyReservationOnClick = (reservationId) => {
        Swal.fire({
            icon: 'info',
            text: '예약 수정하시겠습니까?',
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
                setReservationId(reservationId);
                setDoctorId(reservation?.data?.data?.doctorId)
                setModifyState(true);
                setReservationDetailOpen(false);
                setReservationModalOpen(true);
            }
        })
    }

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
            }
        })
    }

    const closeModal = () => {
        setAni("userModalClose")
        setTimeout(() => {
            setAni("userModalOpen");
            setReservationDetailOpen(false);
        }, 500)
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
                            <img src={reservation?.data?.data?.doctor?.user?.img} alt="" />
                        </div>
                        <div css={s.doctorInfoBox}>
                            <p>{reservation?.data?.data?.doctor?.user?.name}</p>
                            <p>{reservation?.data?.data?.doctor?.depart?.name}</p>
                        </div>
                    </div>
                    <div css={s.doctorIntroduceBox}>
                        <p>{reservation?.data?.data?.doctor?.comment}</p>
                    </div>
                    <CountDownTimer reservation={reservation?.data?.data}/>
                </div>
                <div css={s.buttonBox}>
                    <button onClick={() => handleModifyReservationOnClick(reservation?.data?.data?.id)} disabled={reservation?.data?.data?.status === 3}>예약수정</button>
                    <button onClick={handleCancelReservationOnClick} disabled={reservation?.data?.data?.status === 3}>예약취소</button>
                </div>
            </div>
        </ModalLayout>
    );
}

export default ReservationDetail;