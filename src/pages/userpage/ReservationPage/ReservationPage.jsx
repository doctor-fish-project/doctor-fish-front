import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import MainLayout from '../../../components/usercomponents/MainLayout/MainLayout';
import DoctorBox from '../../../components/usercomponents/reservationPage/DoctorBox/DoctorBox';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import { instance } from '../../../apis/utils/instance';
import { useQuery } from 'react-query';

function ReservationPage(props) {

    const doctors = useQuery(
        ["doctorsQuery"],
        async () => await instance.get("/doctor/list"),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    return (
        <MainLayout>
            <SubContainer>
                <DashBoardTopBar title={"예약하기"} />
                <div css={s.layout}>
                    {
                        doctors?.data?.data?.doctors.map(doctor => 
                            <DoctorBox key={doctor.id} doctor={doctor}/>
                        )
                    }
                </div>
            </SubContainer>
        </MainLayout>

    );
}

export default ReservationPage;