import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { IoIosArrowForward } from "react-icons/io";
function DoctorBox({ doctor, onClick }) {

    return (
        <div key={doctor.id} css={s.layout} onClick={() => onClick(doctor.id)}>
            <img src="https://firebasestorage.googleapis.com/v0/b/userprofile-9dd9e.appspot.com/o/user%2Fdefault.png?alt=media&token=caad563b-86be-48bb-a70a-a717042d870f" alt="" />
            <div css={s.nameAndDepartBox}>
                <div>{doctor.name}</div>
                <div>{doctor.depart}</div>
            </div>
            <IoIosArrowForward />
        </div>
    );
}

export default DoctorBox;