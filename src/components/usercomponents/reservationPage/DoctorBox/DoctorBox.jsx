import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useSetRecoilState } from 'recoil';
import { reservationModalAtom } from '../../../../atoms/modalAtoms';
import { doctorInfoAtom } from '../../../../atoms/doctorAtoms';

function DoctorBox({ doctor }) {

    const setReservationOpen = useSetRecoilState(reservationModalAtom);
    const setDoctorInfo = useSetRecoilState(doctorInfoAtom)

    const handleReservationModalOnClick = () => {
        setDoctorInfo(doctor)
        setReservationOpen(true);
    }
    
    return (
        <div css={s.layout}>
            <img src={doctor.user.img} alt="" />
            <div css={s.nameAndDepartBox}>
                <div>{doctor.user.name}</div>
                <div>{doctor.depart.name}</div>
            </div>
            <button onClick={handleReservationModalOnClick}>예약</button>
        </div>

    );
}
export default DoctorBox;