import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubLayout from '../../../components/usercomponents/SubLayout/SubLayout';
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

function DoctorDetailPage(props) {
    const params = useParams();
    const doctorId = params.doctorId;

    const queryClient = useQueryClient();
    const doctors = queryClient.getQueryData("doctorsQuery")
    const doctor = doctors?.data?.doctors.find(doctor => doctor.id === parseInt(doctorId));
    console.log(doctor)
    const [isShow, setShow] = useState(true);

    return (
        <SubLayout isShow={isShow}>
            <SubContainer>
                <BackButton setShow={setShow} />
                <div css={s.layout}>
                    <img src={doctor.img} alt="" />
                    <div css={s.header}>
                        <p>이름: {doctor.name}</p>
                        <p>부서: {doctor.depart.name}</p>
                    </div>
                    <div css={s.body}>
                        <p>{doctor.record}</p>
                    </div>
                </div>
            </SubContainer>
        </SubLayout>
    );
}

export default DoctorDetailPage;