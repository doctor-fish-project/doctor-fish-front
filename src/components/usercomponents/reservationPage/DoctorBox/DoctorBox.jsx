import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useSetRecoilState } from 'recoil';
import { reservationModalAtom } from '../../../../atoms/modalAtoms';
import { doctorIdAtom } from '../../../../atoms/doctorAtoms';

function DoctorBox({ doctor }) {

    const setReservationOpen = useSetRecoilState(reservationModalAtom);
    const setDoctorId = useSetRecoilState(doctorIdAtom)

    const handleReservationModalOnClick = () => {
        setDoctorId(doctor?.id)
        setReservationOpen(true);
    }

    return (
        <div css={s.layout}>
            <div css={s.imgBox}>
                <img src={doctor?.user?.img} alt="" />
            </div>
            <div css={s.nameAndDepartBox}>
                <div>{doctor?.user?.name}</div>
                <div>{doctor?.depart?.name}</div>
            </div>
            <button onClick={handleReservationModalOnClick}>예약하기</button>
        </div>

    );
}
export default DoctorBox;