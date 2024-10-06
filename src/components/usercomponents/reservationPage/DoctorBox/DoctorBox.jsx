import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function DoctorBox({ doctorId, setDoctorId, setReservationTime, id, name, img, depart }) {

    const handleDoctorIdOnClick = (e, id) => {
        setReservationTime("")
        e.stopPropagation();
        setDoctorId(id === doctorId ? 0 : id)
    }

    return (
        <div css={s.layout} onClick={(e) => handleDoctorIdOnClick(e, id)} >
            <img src="https://firebasestorage.googleapis.com/v0/b/userprofile-9dd9e.appspot.com/o/user%2Fdefault.png?alt=media&token=caad563b-86be-48bb-a70a-a717042d870f" alt="" />
            <div css={s.userInfoBox}>
                <p>{name}</p>
                <p>{depart}</p>
            </div>
        </div>

    );
}
export default DoctorBox;