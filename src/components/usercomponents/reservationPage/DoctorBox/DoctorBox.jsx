import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { IoIosArrowForward } from "react-icons/io";

function DoctorBox({ doctorId, setDoctorId, setReservationTime, id, name, img, depart }) {

    const handleDoctorIdOnClick = (id) => {
        setReservationTime("")
        setDoctorId(id === doctorId ? 0 : id)
    }

    return (
        <div css={s.layout}>
            <img src="https://firebasestorage.googleapis.com/v0/b/userprofile-9dd9e.appspot.com/o/user%2Fdefault.png?alt=media&token=caad563b-86be-48bb-a70a-a717042d870f" alt="" />
            <div css={s.nameAndDepartBox}>
                <div>이름</div>
                <div>부서</div>
            </div>
            <button onClick={() => handleDoctorIdOnClick(id)}>예약</button>
        </div>

    );
}
export default DoctorBox;