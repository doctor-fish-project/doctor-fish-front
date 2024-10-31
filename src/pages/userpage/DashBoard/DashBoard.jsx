import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaUser, FaRegBell } from "react-icons/fa";
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import TodayReservationBox from '../../../components/usercomponents/dashBoard/TodayReservationBox/TodayReservationBox';
import MyProfilePage from '../MyProfilePage/MyProfilePage';
import { useSetRecoilState } from 'recoil';
import { bellAlramModalAtom, signinModalAtom } from '../../../atoms/modalAtoms';
import BoxTopBar from '../../../components/usercomponents/dashBoard/BoxTopBar/BoxTopBar';
import DoctorListPage from '../DoctorListPage/DoctorListPage';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import NoticeListPage from '../NoticeListPage/NoticeListPage';
import { alarmsAtom, alarmStateAtom } from '../../../atoms/dashboardAtoms';
import Swal from 'sweetalert2';

function DashBoard(props) {
    const nav = useNavigate();

    const setBellAlarmOpen = useSetRecoilState(bellAlramModalAtom);
    const setSigninModalOpen = useSetRecoilState(signinModalAtom);

    const setAlarmState = useSetRecoilState(alarmStateAtom);
    const setalarms = useSetRecoilState(alarmsAtom)

    const queryClient = useQueryClient();
    const authState = queryClient.getQueryState("accessTokenValidQuery")
    const userInfo = queryClient.getQueryData("userInfoQuery");

    const [alarmsId, setAlarmsId] = useState([]);
    const [index, setIndex] = useState(0);

    console.log(authState)
    const alarms = useQuery(
        ["alarmsQuery"],
        async () => {
            return instance.get("/alarms");
        },
        {
            enabled: authState?.data?.data,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                if (response?.data?.length > 0) {
                    setalarms(response?.data)
                    setAlarmsId(response?.data?.map(resp => resp.id))
                    setAlarmState(true);
                    return
                }
                setalarms(response?.data)
                setAlarmState(false)
            }
        }
    )

    const todayReservations = useQuery(
        ["todayReservationsQuery"],
        async () => await instance.get("/reservation/today"),
        {
            enabled: authState?.data?.data,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const checkAlarms = useMutation(
        async () => await instance.post("/alarms", alarmsId),
        {
            onSuccess: response => {
                setAlarmState(false)
            }
        }
    )

    const handleNextReservationOnClick = (index) => {
        setIndex(todayReservations.data.data.reservations.length === index + 1 ? 0 : index + 1);
    }

    const handleSigninOnClick = () => {
        nav("/");
        setSigninModalOpen(true)
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
        setBellAlarmOpen(true);
        checkAlarms.mutateAsync().catch(() => { })
        alarms.refetch();
    }

    const handleReadyForService = () => {
        Swal.fire({
            icon: 'info',
            title: '서비스 준비 중',
            backdrop: false,
            showCancelButton: true,
            confirmButtonText: '확인',
            cancelButtonText: '취소',
            allowOutsideClick: false,
            customClass: {
                popup: 'custom-confirm-swal',
                container: 'container',
                confirmButton: 'confirmButton',
            }
        })
    }

    return (
        <>
            <UserSubContainer>
                <DashBoardTopBar title={"MEDIBOOK"} icon={<FaRegBell />} onClick={() => handleBellAlramOnClick()} />
                <div css={s.layout}>
                    <div css={s.userInfoBox}>
                        {
                            authState?.status === "success" ?
                                <div onClick={handleMyProfileOnClick}>
                                    <p><FaUser />내정보</p>
                                    <div>
                                        <p>{userInfo?.data?.name}님</p>
                                    </div>
                                </div>

                                : authState?.status === "loading" ? <></>
                                    : authState?.status === "idle" ? <></> :
                                        <div css={s.defaultBox}>
                                            <button onClickCapture={handleSigninOnClick}>로그인</button>
                                        </div>
                        }
                    </div>
                    <div css={s.reservationBox}>
                        <BoxTopBar title1={"예약 일정"} />
                        {
                            (authState?.status === "success" && todayReservations?.data?.data?.reservations.length > 0) &&
                            <div css={s.reservationListSlider(index)}>
                                {
                                    todayReservations?.data?.data?.reservations?.map((reservation, idx) =>
                                        <TodayReservationBox key={reservation?.id} reservation={reservation} length={todayReservations?.data?.data?.reservations?.length}
                                            link={"/reservationlist"} onClick={() => handleNextReservationOnClick(idx)} />
                                    )
                                }
                            </div>
                        }
                        {
                            (authState?.status === "success" && todayReservations?.data?.data?.reservations.length === 0) &&
                            <div css={s.defaultBox}>
                                <p>예약이 없습니다.</p>
                            </div>
                        }
                        {
                            authState?.status === "loading" && <></>
                        }
                        {
                            authState?.status === "idle" && <></>
                        }
                        {
                            authState?.status === "error" &&
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
                        <div onClick={handleReadyForService}>
                            <p>병원소개</p>
                            <img src="/금지.png" alt="" />
                        </div>
                        <div onClick={handleReadyForService}>
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