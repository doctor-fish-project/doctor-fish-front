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
            <img src="https://firebasestorage.googleapis.com/v0/b/userprofile-9dd9e.appspot.com/o/user%2Fdefault.png?alt=media&token=caad563b-86be-48bb-a70a-a717042d870f" alt="" />
            <div css={s.nameAndDepartBox}>
                <div>{doctor.name}</div>
                <div>{doctor.depart}</div>
            </div>
            <button onClick={handleReservationModalOnClick}>예약</button>
        </div>

    );
}
export default DoctorBox;