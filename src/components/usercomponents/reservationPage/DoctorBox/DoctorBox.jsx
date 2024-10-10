import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { IoIosArrowForward } from "react-icons/io";
import { useSetRecoilState } from 'recoil';
import { reservationCalendarModalAtom } from '../../../../atoms/modalAtoms';
import { doctorIdAtom } from '../../../../atoms/doctorAtoms';

function DoctorBox({ doctor }) {

    const setReservationCalendar = useSetRecoilState(reservationCalendarModalAtom);
    const setDoctorId = useSetRecoilState(doctorIdAtom);

    const handleDoctorIdOnClick = () => {
        setReservationCalendar(true);
        setDoctorId(doctor.id)
    }
    
    return (
        <div css={s.layout}>
            <img src="https://firebasestorage.googleapis.com/v0/b/userprofile-9dd9e.appspot.com/o/user%2Fdefault.png?alt=media&token=caad563b-86be-48bb-a70a-a717042d870f" alt="" />
            <div css={s.nameAndDepartBox}>
                <div>{doctor.name}</div>
                <div>{doctor.depart}</div>
            </div>
            <button onClick={handleDoctorIdOnClick}>예약</button>
        </div>

    );
}
export default DoctorBox;