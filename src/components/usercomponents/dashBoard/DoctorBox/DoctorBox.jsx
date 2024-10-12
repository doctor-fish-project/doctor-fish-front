import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { IoIosArrowForward } from "react-icons/io";
function DoctorBox({ doctor, onClick }) {

    return (
        <div key={doctor.id} css={s.layout} onClick={() => onClick(doctor.id)}>
            <img src="doctor-character-man.png" alt="" />
            <div css={s.nameAndDepartBox}>
                <div>{doctor.name}</div>
                <div>{doctor.depart}</div>
            </div>
            <IoIosArrowForward />
        </div>
    );
}

export default DoctorBox;