import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { IoIosClose } from "react-icons/io"
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState, useRecoilValue } from 'recoil';
import { reservationCalendarModalAtom } from '../../../../atoms/modalAtoms';
import ReservationCalendar from '../../reservationPage/ReservationCalendar/ReservationCalendar';
import { useMutation } from 'react-query';
import { instance } from '../../../../apis/utils/instance';
import { useNavigate } from 'react-router-dom';
import TimeBox from '../../reservationPage/TimeBox/TimeBox';
import { doctorIdAtom } from '../../../../atoms/doctorAtoms';

function ReservationCalendarModal({ containerRef }) {
    const nav = useNavigate();

    const [reservationOpen, setReservationOpen] = useRecoilState(reservationCalendarModalAtom);
    const doctorId = useRecoilValue(doctorIdAtom);

    console.log(doctorId)
    const [ani, setAni] = useState("userModalOpen");
    const [reservationDate, setReservationDate] = useState(new Date());
    const [reservationTime, setReservationTime] = useState("");
    const [reservationData, setReservationData] = useState({
        reserveData: "",
        doctorId: 0
    });

    useEffect(() => {
        setReservationData(reservationData => ({
            ...reservationData,
            doctorId: doctorId
        }))
    }, [])

    useEffect(() => {
        const parse = (value) => (value < 10 ? "0" : "") + value

        const year = reservationDate.getFullYear();
        const month = parse(reservationDate.getMonth() + 1);
        const day = parse(reservationDate.getDate());
        const time = parse(reservationTime);

        setReservationData(reservationData => ({
            ...reservationData,
            reserveData: `${year}-${month}-${day}T${time}:00`,
        }))
    }, [reservationDate, reservationTime])

    const reservation = useMutation(
        async () => await instance.post("/reservation", reservationData),
        {
            onSuccess: response => {
                nav("/reservationlist")
            },
            onError: error => {
                alert("예약 중 오류 발생")
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
                <ReservationCalendar reservationDate={reservationDate} setReservationDate={setReservationDate}/>
                <div css={s.timeBox}>
                    <TimeBox setReservationTime={setReservationTime}/>
                </div>
                
            </div>
        </ModalLayout>
    );
}

export default ReservationCalendarModal;