import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState } from 'recoil';
import { reservationModalAtom } from '../../../../atoms/modalAtoms';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../../apis/utils/instance';
import ReservationCalendar from '../../reservationPage/ReservationCalendar/ReservationCalendar';
import { doctorIdAtom } from '../../../../atoms/doctorAtoms';
import TimeBox from '../../reservationPage/TimeBox/TimeBox';
import Swal from 'sweetalert2';
import CancelButton from '../CancelButton/CancelButton';
import { modifyStateAtom, reservationIdAtom } from '../../../../atoms/reservations';

function ReservationCalendarModal({ containerRef }) {
    const nav = useNavigate();

    const [reservationOpen, setReservationOpen] = useRecoilState(reservationModalAtom);
    const [reservationId, setReservationId] = useRecoilState(reservationIdAtom);
    const [doctorId, setDoctorId] = useRecoilState(doctorIdAtom)
    const [modifyState, setModifyState] = useRecoilState(modifyStateAtom);

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
            return await instance.get("/times")
        },
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
            })
        },
        {
            enabled: ref,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const myReservation = useQuery(
        ["myReservationQeury"],
        async () => {
            setModifyState(false)
            return await instance.get(`/reservation/${reservationId}`)
        },
        {
            enabled: modifyState,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                const modifyReservationDate = new Date(response?.data.reservationDate);
                setReservationDate(modifyReservationDate)
                setReservationTime(response?.data?.reservationDate?.slice(11, 16))
            }
        }
    )

    const doctor = useQuery(
        ["doctorQuery"],
        async () => {
            return await instance.get(`/doctor/${doctorId}`)
        },
        {
            enabled: !!doctorId,
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

    const modifyReservation = useMutation(
        async () => await instance.put(`/reservation/${reservationId}`, reservationData),
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
                        myReservation.remove();
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
        if (reservationTime === "") {
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
        reservation.mutateAsync().catch(() => { })
    }

    const closeModal = () => {
        setAni("userModalClose")
        setTimeout(() => {
            setAni("userModalOpen");
            setReservationOpen(false);
        }, 500)
        setReservationDate(new Date());
        setReservationTime("");
        setDoctorId(0);
        setReservationId(0);
        myReservation.remove();
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
                        times?.data?.data?.map(time => {
                            if(reservationDate.getDay() !== 6 && reservationDate.getDay() !== 0 && time?.time === myReservation?.data?.data?.reservationDate?.slice(11, 16)) {
                                return  <TimeBox key={time.id} time={time} reservationTime={reservationTime} setReservationTime={setReservationTime} disabled={false}/>
                            }
                            if(reservedTimes?.data?.data?.find(reservedTime => reservedTime?.time === time?.time)) {
                                return <TimeBox key={time.id} time={time} reservationTime={reservationTime} setReservationTime={setReservationTime} disabled={true}/>
                            }
                            if(today.toLocaleString().slice(0, 13) === reservationDate?.toLocaleDateString() && (time.time < today.toTimeString().slice(0, 5))) {
                                return <TimeBox key={time.id} time={time} reservationTime={reservationTime} setReservationTime={setReservationTime} disabled={true}/>
                            }
                            if(reservationDate.getDay() === 6 || reservationDate.getDay() === 0) {
                                return <TimeBox key={time.id} time={time} reservationTime={reservationTime} setReservationTime={setReservationTime} disabled={true}/>
                            }
                            return <TimeBox key={time.id} time={time} reservationTime={reservationTime} setReservationTime={setReservationTime} disabled={false}/>
                        })
                    }
                </div>
                {
                    !!myReservation?.data?.data
                        ? <button onClick={() => modifyReservation.mutateAsync().catch(() => { })}
                            disabled={myReservation?.data?.data?.reservationDate?.slice(11, 16) === reservationTime}>예약 변경</button>
                        : <button onClick={handleReservationOnClick}>예약</button>
                }
            </div>
        </ModalLayout>
    );
}

export default ReservationCalendarModal;