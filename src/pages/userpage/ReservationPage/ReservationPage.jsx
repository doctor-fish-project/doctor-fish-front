import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import MainLayout from '../../../components/usercomponents/MainLayout/MainLayout';
import ReservationCalendar from '../../../components/usercomponents/reservationPage/ReservationCalendar/ReservationCalendar';
import DoctorBox from '../../../components/usercomponents/reservationPage/DoctorBox/DoctorBox';
import TimeBox from '../../../components/usercomponents/reservationPage/TimeBox/TimeBox';
import { useNavigate } from 'react-router-dom';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';

function ReservationPage(props) {

    const doctorsInfo = useQuery(
        ["doctorsInfoQuery"],
        async () => await instance.get("/doctors"),
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
                <div css={s.doctorContainer}>
                    {
                        doctorsInfo?.data?.data?.map(doctor => 
                            <DoctorBox key={doctor.id} doctor={doctor} />
                        )
                    }
                </div>
            </SubContainer>
        </MainLayout>

    );
}

export default ReservationPage;