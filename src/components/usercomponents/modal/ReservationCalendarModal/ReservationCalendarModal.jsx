import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState, useRecoilValue } from 'recoil';
import { reservationModalAtom } from '../../../../atoms/modalAtoms';
import { IoIosClose } from "react-icons/io"
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../../apis/utils/instance';
import ReservationCalendar from '../../reservationPage/ReservationCalendar/ReservationCalendar';
import { doctorInfoAtom } from '../../../../atoms/doctorAtoms';
import TimeBox from '../../reservationPage/TimeBox/TimeBox';
import Swal from 'sweetalert2';

function ReservationCalendarModal({ containerRef }) {
    const nav = useNavigate();

    const [reservationOpen, setReservationOpen] = useRecoilState(reservationModalAtom);
    const doctorInfo = useRecoilValue(doctorInfoAtom);

    const [ani, setAni] = useState("userModalOpen")
    const [reservationDate, setReservationDate] = useState(new Date());
    const [reservationTime, setReservationTime] = useState("");
    const [reservationData, setReservationData] = useState({
        reserveDate: "",
        doctorId: 0
    });

    useEffect(() => {
        const parse = (value) => (value < 10 ? "0" : "") + value

        const year = reservationDate.getFullYear();
        const month = parse(reservationDate.getMonth() + 1);
        const day = parse(reservationDate.getDate());
        const time = parse(reservationTime);

        setReservationData(reservationData => ({
            ...reservationData,
            reserveDate: `${year}-${month}-${day}T${time}:00`,
            doctorId: doctorInfo.id
        }))
    }, [reservationDate, reservationTime, doctorInfo.id])

    const times = useQuery(
        ["timesListQuery"],
        async () => await instance.get("/times"),
        {
            enabled: reservationOpen,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const reservedTimes = useQuery(
        ["timesListQuery", reservationData],
        async () => await instance.get("/times/reserved", {
            params: {
                doctorId: reservationData.doctorId,
                reservationDate: reservationData.reserveDate
            }
        }),
        {
            enabled: times?.data?.status === 200,
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
                <div css={s.cancelButtonBox}>
                    <button onClick={closeModal}><IoIosClose /></button>
                </div>
                <div css={s.doctorInfoBox}>
                    <p>{doctorInfo.depart}: {doctorInfo.name}의 예약 진료 현황</p>
                </div>
                <ReservationCalendar reservationDate={reservationDate} setReservationDate={setReservationDate} setReservationTime={setReservationTime} />
                <div css={s.timeBox}>
                    {
                        times?.data?.data?.map(time =>
                            <TimeBox key={time.id} time={time} disabled={!!reservedTimes?.data?.data.filter(reservedTime => reservedTime.time === time.time).length} reservationTime={reservationTime} setReservationTime={setReservationTime} />
                        )
                    }
                </div>
                <button onClick={() => reservation.mutateAsync().catch(() => {})}>예약하기</button>
            </div>
        </ModalLayout>
    );
}

export default ReservationCalendarModal;