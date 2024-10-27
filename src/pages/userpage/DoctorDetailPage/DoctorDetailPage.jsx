import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';

function DoctorDetailPage(props) {
    const params = useParams();
    const doctorId = params.doctorId;
    
    const [isShow, setShow] = useState(true);

    const queryClient = useQueryClient();
    const doctors = queryClient.getQueryData("doctorsQuery")
    const doctor = doctors?.data?.doctors?.find(doctor => doctor.id === parseInt(doctorId));

    return (
        <UserSubLayout isShow={isShow}>
            <UserSubContainer>
                <BackButton setShow={setShow} title={"의료진"}/>
                <div css={s.layout}>
                    <img src={doctor?.user?.img} alt="" />
                    <div css={s.header}>
                        <p>이름: {doctor?.user?.name}</p>
                        <p>부서: {doctor?.depart?.name}</p>
                        <p>인사말: {doctor?.comment}</p>
                    </div>
                    <div css={s.body}>
                        <p>{doctor?.record}</p>
                    </div>
                </div>
            </UserSubContainer>
        </UserSubLayout>
    );
}

export default DoctorDetailPage;