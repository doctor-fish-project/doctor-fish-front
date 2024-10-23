import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { AiFillSound } from "react-icons/ai"
import { FaUser, FaRegBell } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import SubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import TodayReservationBox from '../../../components/usercomponents/dashBoard/TodayReservationBox/TodayReservationBox';
import DoctorDetailPage from '../DoctorDetailPage/DoctorDetailPage';
import DoctorBox from '../../../components/usercomponents/dashBoard/DoctorBox/DoctorBox';
import MyProfilePage from '../MyProfilePage/MyProfilePage';
import { useSetRecoilState } from 'recoil';
import { signinModalAtom } from '../../../atoms/modalAtoms';
import BoxTopBar from '../../../components/usercomponents/dashBoard/BoxTopBar/BoxTopBar';

function DashBoard(props) {
    const nav = useNavigate();

    const setSigninModalState = useSetRecoilState(signinModalAtom);

    const queryClient = useQueryClient();
    const authState = queryClient.getQueryState("accessTokenValidQuery")
    const userInfo = queryClient.getQueryData("userInfoQuery");

    const todayReservations = useQuery(
        ["todayReservationsQuery"],
        async () => await instance.get("/reservation/today"),
        {
            enabled: authState?.data?.data,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const doctors = useQuery(
        ["doctorsQuery"],
        async () => await instance.get("/doctor/list"),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    ) 

    const handleSigninOnClick = () => {
        nav("/");
        setSigninModalState(true)
    }

    const handleMyProfileOnClick = () => {
        nav("/dashboard/myprofile")
    }

    const handleDoctorProfileOnClick = (doctorId) => {
        nav(`/dashboard/doctor/${doctorId}`)
    }

    return (
        <>
            <SubContainer>
                <DashBoardTopBar title={"MEDIBOOK"} icon={<FaRegBell />} />
                <div css={s.layout}>
                    <div css={s.noticeBox}>
                        <AiFillSound />안녕하세요
                    </div>
                    <div css={s.userInfoBox}>
                        {
                            authState?.data?.data
                                ?
                                <>
                                    <p>{userInfo?.data?.name}</p>
                                    <button onClick={handleMyProfileOnClick}><FaUser />내정보</button>
                                </>
                                :
                                <div css={s.defaultBox}>
                                    <button onClickCapture={handleSigninOnClick}>로그인</button>
                                </div>
                        }

                    </div>
                    <BoxTopBar title1={"예약 일정"} title2={"전체 보기"} link={"/reservationlist"} icon={<IoIosArrowForward />} />
                    <TodayReservationBox reservations={todayReservations?.data?.data?.reservations} />

                    <BoxTopBar title1={"의료진"} />
                    <div css={s.doctorBox}>
                        {
                            doctors?.data?.data?.doctors?.map(doctor =>
                                <DoctorBox key={doctor.id} doctor={doctor} onClick={handleDoctorProfileOnClick} />
                            )
                        }
                    </div>
                </div>
            </SubContainer>
            <Routes>
                <Route path='/myprofile/*' element={<MyProfilePage />} />
                <Route path='/doctor/:doctorId' element={<DoctorDetailPage />} />
            </Routes>
        </>

    );
}

export default DashBoard;