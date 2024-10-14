import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { IoIosArrowForward } from "react-icons/io";
function DoctorBox({ doctor, onClick }) {

    return (
        <div css={s.layout} onClick={() => onClick(doctor.id)}>
            <img src={doctor.img} alt="" />
            <div css={s.nameAndDepartBox}>
                <div>{doctor.name}</div>
                <div>{doctor.depart.name}</div>
            </div>
            <IoIosArrowForward />
        </div>
    );
}

export default DoctorBox;