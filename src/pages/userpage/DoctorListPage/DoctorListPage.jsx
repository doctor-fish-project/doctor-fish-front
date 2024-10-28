import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import DoctorBox from '../../../components/usercomponents/dashBoard/DoctorBox/DoctorBox';
import { useQueryClient } from 'react-query';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DoctorDetailPage from '../DoctorDetailPage/DoctorDetailPage';

function DoctorListPage(props) {
    const [ isShow, setShow ] = useState(true);
    const nav = useNavigate();
    const queryClient = useQueryClient();
    const doctors = queryClient.getQueryData("doctorsQuery");

    const handleDoctorProfileOnClick = (doctorId) => {
        nav(`/dashboard/doctor/${doctorId}`)
    }

    return (
        <UserSubLayout isShow={isShow}>
            <UserSubContainer>
                <BackButton title={"의료진 소개"} setShow={setShow}/>
                <div css={s.layout}>
                    <div css={s.doctorBox}>
                        {
                            doctors?.data?.doctors?.map(doctor =>
                                <DoctorBox key={doctor.id} doctor={doctor} onClick={handleDoctorProfileOnClick} />
                            )
                        }
                    </div>
                </div>
            </UserSubContainer>
        </UserSubLayout>
    );
}

export default DoctorListPage;