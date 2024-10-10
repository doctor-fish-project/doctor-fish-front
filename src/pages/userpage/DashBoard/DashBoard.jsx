import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { AiFillSound } from "react-icons/ai"
import { FaUser } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import MainLayout from '../../../components/usercomponents/MainLayout/MainLayout';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import TodayReservationBox from '../../../components/usercomponents/dashBoard/TodayReservationBox/TodayReservationBox';
import DoctorDetailPage from '../DoctorDetailPage/DoctorDetailPage';
import DoctorBox from '../../../components/usercomponents/dashBoard/DoctorBox/DoctorBox';
import MyProfilePage from '../MyProfilePage/MyProfilePage';

function DashBoard(props) {

    const nav = useNavigate();

    const queryClient = useQueryClient();
    const authState = queryClient.getQueryState("accessTokenValidQuery");

    const userInfo = useQuery(
        ["userInfoQuery"],
        async () => await instance.get("/user/me"),
        {
            enabled: authState.data?.data,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const todayReservations = useQuery(
        ["todayReservationsQuery"],
        async () => await instance.get("/reservation/user"),
        {
            enabled: authState.data?.data,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const doctorsInfo = useQuery(
        ["doctorsInfoQuery"],
        async () => await instance.get("/doctors"),
        {
            enabled: authState.data?.data,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )
    
    const handleReservationListOnClick = () => {
        nav("/reservationlist")
    }

    const handleMyProfileOnClick = () => {
        nav("/dashboard/myprofile")
    }

    const handleDoctorProfileOnClick = (doctorId) => {
        nav(`/dashboard/doctor/${doctorId}`)
    }

    return (
        <MainLayout>
            <SubContainer>
                <DashBoardTopBar title={"MEDIBOOK"}/>   
                <div css={s.layout}>
                    <div css={s.noticeBox}>
                        <AiFillSound />안녕하세요
                    </div>
                    <div css={s.userInfoBox}>
                        <p>{userInfo.data?.data?.name}</p>
                        <div css={s.userButtonBox}>
                            <button onClick={handleMyProfileOnClick}><FaUser />내정보</button>
                        </div>
                    </div>
                    <div css={s.reservationBox}>
                        <p>예약 일정</p>
                        <button onClick={handleReservationListOnClick}>전체보기<IoIosArrowForward /></button>
                    </div>
                    <TodayReservationBox reservations={todayReservations?.data?.data?.reservations} />
                    <div css={s.doctorBox}>
                        {
                            doctorsInfo?.data?.data?.map(doctor => 
                                <DoctorBox doctor={doctor} onClick={handleDoctorProfileOnClick}/>
                            )
                        }
                    </div>
                </div>
            </SubContainer>
            <Routes>
                <Route path='/myprofile' element={<MyProfilePage />}/>
                <Route path='/doctor/:doctorId' element={<DoctorDetailPage />}/>
            </Routes>
        </MainLayout>
    );
}

export default DashBoard;