import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaUser, FaRegBell } from "react-icons/fa";
import SubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import TodayReservationBox from '../../../components/usercomponents/dashBoard/TodayReservationBox/TodayReservationBox';
import DoctorDetailPage from '../DoctorDetailPage/DoctorDetailPage';
import MyProfilePage from '../MyProfilePage/MyProfilePage';
import { useSetRecoilState } from 'recoil';
import { signinModalAtom } from '../../../atoms/modalAtoms';
import BoxTopBar from '../../../components/usercomponents/dashBoard/BoxTopBar/BoxTopBar';
import DoctorListPage from '../DoctorListPage/DoctorListPage';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';

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

    const handleSigninOnClick = () => {
        nav("/");
        setSigninModalState(true)
    }

    const handleMyProfileOnClick = () => {
        nav("/dashboard/myprofile")
    } 

    const handleDoctorListOnClick = () => {
        nav(`/dashboard/doctor`)
    }

    const handleNoticeListPageOnClick = () => {
        nav("/noticelist")
    }

    return (
        <>
            <UserSubContainer>
                <DashBoardTopBar title={"MEDIBOOK"} icon={<FaRegBell />} />
                <div css={s.layout}>
                    <div css={s.userInfoBox}>
                        {
                            authState?.data?.data
                            ?
                            <div onClick={handleMyProfileOnClick}>
                                <p><FaUser />내정보</p>
                                <div>
                                    <p>{userInfo?.data?.name}님</p>
                                </div>
                            </div>
                            :
                            <div css={s.defaultBox}>
                                <button onClickCapture={handleSigninOnClick}>로그인</button>
                            </div>
                        }
                    </div>
                    <div css={s.reservationBox}>
                        <BoxTopBar title1={"예약 일정"} />
                        <TodayReservationBox reservations={todayReservations?.data?.data?.reservations} link={"/reservationlist"} />
                    </div>
                    <div css={s.pageBox}>
                        <div onClick={handleNoticeListPageOnClick }>
                            <p>공지사항</p>
                            <img src="/공지사항.png" alt="" />
                        </div>
                        <div onClick={handleDoctorListOnClick}>
                            <p>의료진 소개</p>
                            <img src="/의사.png" alt="" />
                        </div>
                    </div>
                    <div css={s.pageBox}>
                        <div>
                            <p>병원소개</p>
                            <img src="/금지.png" alt="" />
                        </div>
                        <div>
                            <p>오시는 길</p>
                            <img src="/금지.png" alt="" />
                        </div>
                    </div>
                </div>
            </UserSubContainer>
            <Routes>
                <Route path='/myprofile/*' element={<MyProfilePage />} />
                <Route path='/doctor' element={<DoctorListPage />} />
                <Route path='/doctor/:doctorId' element={<DoctorDetailPage />} />
            </Routes>
        </>

    );
}

export default DashBoard;