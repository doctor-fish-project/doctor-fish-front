import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaUser, FaRegBell } from "react-icons/fa";
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import TodayReservationBox from '../../../components/usercomponents/dashBoard/TodayReservationBox/TodayReservationBox';
import MyProfilePage from '../MyProfilePage/MyProfilePage';
import { useSetRecoilState } from 'recoil';
import { bellAlramModalAtom, signinModalAtom } from '../../../atoms/modalAtoms';
import BoxTopBar from '../../../components/usercomponents/dashBoard/BoxTopBar/BoxTopBar';
import DoctorListPage from '../DoctorListPage/DoctorListPage';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import NoticeListPage from '../NoticeListPage/NoticeListPage';

function DashBoard(props) {
    const nav = useNavigate();

    const setSigninModalState = useSetRecoilState(signinModalAtom);
    const setBellAlramOpen = useSetRecoilState(bellAlramModalAtom);

    const queryClient = useQueryClient();
    const authState = queryClient.getQueryState("accessTokenValidQuery")
    const userInfo = queryClient.getQueryData("userInfoQuery");
    
    const [index, setIndex] = useState(0);

    const todayReservations = useQuery(
        ["todayReservationsQuery"],
        async () => await instance.get("/reservation/today"),
        {
            enabled: authState?.data?.data,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const handleNextReservationOnClick = (index) => {
        setIndex(todayReservations.data.data.reservations.length === index + 1 ? 0 : index + 1);
    }

    const handleSigninOnClick = () => {
        nav("/");
        setSigninModalState(true)
    }

    const handleMyProfileOnClick = () => {
        nav("/dashboard/myprofile")
    }

    const handleDoctorListOnClick = () => {
        nav("/dashboard/doctor")
    }

    const handleNoticeListPageOnClick = () => {
        nav("/dashboard/notice")
    }

    const handleBellAlramOnClick = () => {
        setBellAlramOpen(true);
    }

    return (
        <>
            <UserSubContainer>
                <DashBoardTopBar title={"MEDIBOOK"} icon={<FaRegBell />} onClick={() => handleBellAlramOnClick()}/>
                <div css={s.layout}>
                    <div css={s.userInfoBox}>
                        {
                            (authState?.status === "success" && authState?.data?.data) ?
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
                        {
                            (authState?.status === "success" && authState?.data?.data) ?
                                !!todayReservations?.data?.data?.reservations.length ? 
                                <div css={s.reservationListSlider(index)}>
                                    {
                                        todayReservations?.data?.data?.reservations?.map((reservation, idx) =>
                                            <TodayReservationBox key={reservation?.id} index={idx} reservation={reservation} link={"/reservationlist"} onClick={() => handleNextReservationOnClick(idx)} />
                                        )
                                    }
                                </div> :
                                <div css={s.defaultBox}>
                                    <p>예약이 없습니다.</p>
                                </div> :
                                <div css={s.defaultBox}>
                                    <p>로그인 후 이용가능합니다.</p>
                                </div>
                        }
                    </div>
                    <div css={s.pageBox}>
                        <div onClick={handleNoticeListPageOnClick}>
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
                <Route path='/doctor/*' element={<DoctorListPage />} />
                <Route path='/notice/*' element={<NoticeListPage />} />
            </Routes>
        </>
    );
}

export default DashBoard;