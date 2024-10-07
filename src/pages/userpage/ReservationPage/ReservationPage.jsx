import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import MainLayout from '../../../components/usercomponents/MainLayout/MainLayout';
import ReservationCalendar from '../../../components/usercomponents/reservationPage/ReservationCalendar/ReservationCalendar';
import DoctorBox from '../../../components/usercomponents/reservationPage/DoctorBox/DoctorBox';
import TimeBox from '../../../components/usercomponents/reservationPage/TimeBox/TimeBox';
import { useNavigate } from 'react-router-dom';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';

function ReservationPage(props) {
    const nav = useNavigate();
    const calendarRef = useRef();

    const [reservationDate, setReservationDate] = useState(new Date());
    const [doctorId, setDoctorId] = useState(0);
    const [reservationTime, setReservationTime] = useState("");
    const [reservationData, setReservationData] = useState({
        reserveData: "",
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
            reserveData: `${year}-${month}-${day}T${time}:00`
        }))
    }, [reservationDate, reservationTime])

    const handleReservationSubmitButton = () => {
        nav("/dashboard/reservationlist")
        console.log(reservationData)
    }

    return (
        <MainLayout>
            <SubContainer>
                <DashBoardTopBar title={"예약하기"} />
                <ReservationCalendar reservationDate={reservationDate} setReservationDate={setReservationDate}/>
                <div css={s.doctorContainer}>
                    <DoctorBox id={1} name={"이름"} depart={"부서"} doctorId={doctorId} setDoctorId={setDoctorId} setReservationTime={setReservationTime}/>
                    <DoctorBox id={2} name={"이름1"} depart={"부서1"} doctorId={doctorId} setDoctorId={setDoctorId} setReservationTime={setReservationTime}/>
                </div>
                {
                    doctorId === 0 ? <></> :
                        <div css={s.timeContainer}>
                            <TimeBox time={"09:00"} reservationTime={reservationTime} setReservationTime={setReservationTime} />
                            <TimeBox time={"10:00"} reservationTime={reservationTime} setReservationTime={setReservationTime} />
                            <TimeBox time={"11:00"} reservationTime={reservationTime} setReservationTime={setReservationTime} />
                            <TimeBox time={"12:00"} reservationTime={reservationTime} setReservationTime={setReservationTime} />
                            <TimeBox time={"13:00"} reservationTime={reservationTime} setReservationTime={setReservationTime} />
                        </div>
                }
                <div css={s.buttonBox}>
                    <button onClick={handleReservationSubmitButton}>예약하기</button>
                </div>
            </SubContainer>
        </MainLayout>

    );
}

export default ReservationPage;