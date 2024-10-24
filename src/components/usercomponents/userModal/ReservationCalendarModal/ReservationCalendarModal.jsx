import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState, useRecoilValue } from 'recoil';
import { reservationModalAtom } from '../../../../atoms/modalAtoms';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../../apis/utils/instance';
import ReservationCalendar from '../../reservationPage/ReservationCalendar/ReservationCalendar';
import { doctorIdAtom } from '../../../../atoms/doctorAtoms';
import TimeBox from '../../reservationPage/TimeBox/TimeBox';
import Swal from 'sweetalert2';
import CancelButton from '../CancelButton/CancelButton';
import { modifyReservationIdAtom } from '../../../../atoms/reservations';

function ReservationCalendarModal({ containerRef }) {
    const nav = useNavigate();

    const [reservationOpen, setReservationOpen] = useRecoilState(reservationModalAtom);
    const doctorId = useRecoilValue(doctorIdAtom);
    const modifyReservationId = useRecoilValue(modifyReservationIdAtom);

    const [ani, setAni] = useState("userModalOpen")
    const [ref, setRef] = useState(false);
    const [reservationDate, setReservationDate] = useState(new Date());
    const [reservationTime, setReservationTime] = useState("");
    const [reservationData, setReservationData] = useState({
        reserveDate: "",
        doctorId: 0
    });

    const today = new Date();

    useEffect(() => {
        const parse = (value) => (value < 10 ? "0" : "") + value

        const year = reservationDate.getFullYear();
        const month = parse(reservationDate.getMonth() + 1);
        const day = parse(reservationDate.getDate());
        const time = parse(reservationTime);

        setReservationData(reservationData => ({
            ...reservationData,
            reserveDate: `${year}-${month}-${day}T${time}:00`,
            doctorId: doctorId
        }))
    }, [reservationDate, reservationTime, doctorId])

    const times = useQuery(
        ["timesListQuery"],
        async () => {
            setRef(true);
            return await instance.get("/times")},
        {
            enabled: reservationOpen,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const reservedTimes = useQuery(
        ["timesListQuery", reservationData],
        async () => {
            return await instance.get("/times/reserved", {
            params: {
                doctorId: reservationData.doctorId,
                reservationDate: reservationData.reserveDate
            }
        })},
        {
            enabled: ref,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const myReservation = useQuery(
        ["myReservationQeury", modifyReservationId],
        async () => await instance.get(`/reservation/${modifyReservationId}`),
        {
            enabled: !!modifyReservationId,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                const modifyReservationDate = new Date(response?.data.reservationDate);
                setReservationDate(modifyReservationDate)
                setReservationTime(response?.data?.reservationDate?.slice(11,16))
                setReservationData({
                    reserveDate: response?.data?.reservationDate,
                    doctorId: response?.data?.doctorId
                })
            }
        }
    )
    console.log(reservationData)
    const doctor = useQuery(
        ["doctorQuery", modifyReservationId],
        async () => await instance.get(`/doctor/${reservationData?.doctorId}`),
        {
            enabled: !!reservationData?.doctorId,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const reservation = useMutation(
        async () => await instance.post("/reservation", reservationData),
        {
            onSuccess: response => {
                Swal.fire({
                    icon: 'success',
                    text: '예약 완료',
                    backdrop: false,
                    showConfirmButton: false,
                    timer: 1000,
                    willClose: () => {
                        setReservationOpen(false)
                        nav("/reservationlist", { replace: true })
                    },
                    customClass: {
                        popup: 'custom-timer-swal',
                        container: 'container'
                    }
                })
            },
            onError: error => {
                Swal.fire({
                    icon: 'error',
                    text: '예약 중 오류 발생',
                    backdrop: false,
                    showConfirmButton: false,
                    timer: 1000,
                    customClass: {
                        popup: 'custom-timer-swal',
                        container: 'container'
                    }
                })
            }
        }
    )

    const handleReservationOnClick = () => {
        if(reservationTime === "") {
            Swal.fire({
                icon: 'error',
                text: '예약 시간을 선택하여 주세요',
                backdrop: false,
                showConfirmButton: false,
                timer: 1000,
                customClass: {
                    popup: 'custom-timer-swal',
                    container: 'container'
                }
            })
            return;
        }
        reservation.mutateAsync().catch(() => {})
    }

    const closeModal = () => {
        setAni("userModalClose")
        setTimeout(() => {
            setAni("userModalOpen");
            setReservationOpen(false);
        }, 500)
        setReservationDate(new Date());
        setReservationTime("");
    }

    return (
        <ModalLayout containerRef={containerRef} isOpen={reservationOpen} closeModal={closeModal} ani={ani}>
            <div css={s.layout}>
                <CancelButton onClick={closeModal} />
                <div css={s.doctorInfoBox}>
                    <p>{doctor?.data?.data?.departName}: {doctor?.data?.data?.name}의 예약 진료 현황</p>
                </div>
                <ReservationCalendar reservationDate={reservationDate} setReservationDate={setReservationDate} setReservationTime={setReservationTime} />
                <div css={s.timeBox}>
                    {
                        times?.data?.data?.map(time =>
                            <TimeBox key={time.id} time={time} reservationTime={reservationTime} setReservationTime={setReservationTime}
                            disabled={!!reservedTimes?.data?.data?.filter(reservedTime => reservedTime?.time === time?.time).length
                                || (today.toLocaleString().slice(0,13) === reservationDate?.toLocaleDateString()) && (time.time < today.toTimeString().slice(0,5))
                                || reservationDate.getDay() === 6
                                || reservationDate.getDay() === 0}
                             />
                        )
                    }
                </div>
                {
                    !!modifyReservationId ? <button>수정하기</button> : <button onClick={handleReservationOnClick}>예약하기</button>
                }
            </div>
        </ModalLayout>
    );
}

export default ReservationCalendarModal;